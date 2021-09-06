import React, {lazy, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Spinner} from 'reactstrap'

import {getPrices, sortingPrice} from 'store/actions/prices'
import SectionSearch from 'components/SectionSearch'
import PriceList from 'components/PriceList'
import FAB from 'components/FAB'
import ArrowUpward from 'components/Icons/ArrowUpward'

const EmptyState = lazy(() => import('components/EmptyState'))
const ModalFilter = lazy(() => import('components/modal/filter'))
const ModalSorter = lazy(() => import('components/modal/sorter'))

const HomePage = () => {
  const LIMIT_DEFAULT = 10

  let history = useHistory()
  const dispatch = useDispatch()
  const {data, meta} = useSelector(({prices}) => prices)

  const [scrollTop, setScrollTop] = useState(0)
  const [modal, setModal] = useState({
    filter: false,
    sorter: false
  })
  const [pagination, setPagination] = useState({
    limit: LIMIT_DEFAULT,
    offset: 0
  })
  const [filter, setFilter] = useState({
    area: null,
    size: null,
    komoditas: ''
  })
  const [sorter, setSorter] = useState('')

  const showLoadMore = () => {
    return (
      data.prices.length > 0 &&
      meta.prices !== 'searching' &&
      !meta.fullLoadedPrice
    )
  }

  const showSpinner = () => {
    return meta.prices === 'loadmore' || meta.prices === 'fetch'
  }

  const onScrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

  const setParamsFilter = () => {
    let params = {}

    if (filter.area) {
      const [area_kota = null, area_provinsi = null] =
        filter.area.value.split(', ')
      params = {
        ...params,
        area_kota,
        area_provinsi
      }
    }

    if (filter.size) {
      params = {
        ...params,
        size: filter.size.value
      }
    }

    if (filter.komoditas) {
      params = {
        ...params,
        komoditas: filter.komoditas
      }
    }

    return params
  }

  const toggleModal = (type) => () => {
    setModal({
      ...modal,
      [type]: !modal[type]
    })
  }

  const onResetFilter = async () => {
    setFilter({
      area: null,
      size: null,
      komoditas: ''
    })

    const dispatchPrices = dispatch(
      getPrices({
        meta: 'reseting',
        params: {
          limit: LIMIT_DEFAULT,
          offset: 0
        }
      })
    )

    await Promise.all([dispatchPrices])

    setModal({...modal, filter: false})
  }

  const applyFilter = async () => {
    const searchParams = setParamsFilter()

    if (Object.keys(searchParams).length > 0) {
      let page = {
        limit: LIMIT_DEFAULT,
        offset: 0
      }

      setPagination(page)
      const dispatchPrices = dispatch(
        getPrices({
          meta: 'filtering',
          params: {
            ...page,
            search: {
              ...searchParams
            }
          }
        })
      )

      await Promise.all([dispatchPrices])

      setModal({...modal, filter: false})
    } else setModal({...modal, filter: false})
  }

  const applySorter = () => {
    const sorting = data.prices.sort((a, b) => {
      if (sorter === 'komoditas') {
        return a[sorter].toLowerCase() > b[sorter].toLowerCase() ? 1 : -1
      } else if (sorter === 'tgl_parsed') {
        return a[sorter] < b[sorter] ? 1 : -1
      }
      return parseInt(a[sorter]) < parseInt(b[sorter]) ? 1 : -1
    })

    dispatch(sortingPrice(sorting))

    setModal({...modal, sorter: false})
  }

  const loadMore = () => {
    if (!meta.fullLoadedPrice) {
      const searchParams = setParamsFilter()
      let page = {
        limit: LIMIT_DEFAULT,
        offset: pagination.offset + LIMIT_DEFAULT
      }

      setPagination(page)
      dispatch(
        getPrices({
          meta: 'loadmore',
          params: {
            ...page,
            search: {
              ...searchParams
            }
          }
        })
      )

      setSorter('')
    }
  }

  const onSearch = () => {
    if (filter.komoditas) {
      const searchParams = setParamsFilter()
      dispatch(
        getPrices({
          meta: 'searching',
          params: {
            search: {
              ...searchParams
            }
          }
        })
      )
    }
  }

  useEffect(() => {
    dispatch(getPrices({params: pagination}))
  }, [])

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return (
    <>
      <div className="price-header">
        <h1>Harga Ikan di Indonesia</h1>
        <Button
          className="btn-eFishery"
          onClick={() => history.push('/create')}
        >
          Buat Baru
        </Button>
      </div>

      {modal.filter && (
        <ModalFilter
          values={filter}
          isOpen={modal.filter}
          onSubmit={applyFilter}
          setValues={setFilter}
          onReset={onResetFilter}
          toggle={toggleModal('filter')}
        />
      )}

      {modal.sorter && (
        <ModalSorter
          value={sorter}
          isOpen={modal.sorter}
          onSubmit={applySorter}
          onChange={(e) => setSorter(e.target.value)}
          toggle={toggleModal('sorter')}
        />
      )}

      <SectionSearch
        filter={filter}
        setFilter={setFilter}
        onSearch={onSearch}
        toggleModal={toggleModal}
      />

      {meta.prices === 'searching' ? (
        <div className="d-flex justify-content-center mb-3">
          <Spinner className="spinner-eFishery" />
        </div>
      ) : (
        meta.prices !== 'fetch' &&
        data.prices.map((price, key) => <PriceList key={key} {...price} />)
      )}

      <div className="d-flex justify-content-center">
        {showSpinner() ? (
          <Spinner className="spinner-eFishery" />
        ) : showLoadMore() ? (
          <Button
            className="btn-outline-eFishery btn-loadmore"
            outline
            onClick={loadMore}
          >
            Muat Lebih Banyak
          </Button>
        ) : (
          data.prices.length === 0 && (
            <EmptyState
              description={
                filter.komoditas
                  ? 'Silakan gunakan kata kunci pencarian lainnya.'
                  : ''
              }
            />
          )
        )}
      </div>

      {scrollTop >= 200 && (
        <FAB onClick={onScrollTop}>
          <ArrowUpward fill="#fff" />
        </FAB>
      )}
    </>
  )
}

export default HomePage
