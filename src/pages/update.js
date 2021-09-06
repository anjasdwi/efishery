import React, {useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import model from 'scheme/editPrice'
import {findPrice, updatePrice, deletePrice} from 'store/actions/prices'
import ModalLoader from 'components/modal/loader'
import FormPrice from 'components/FormPrice'
import useOptions from 'hooks/useOptions'

const UpdatePricePage = () => {
  const history = useHistory()
  const {id} = useParams()

  const dispatch = useDispatch()
  const {meta, data} = useSelector(({prices}) => prices)
  const {price = {}} = data || {}

  const {areas, sizes, loader} = useOptions()

  const onSubmit = (params) => {
    const {
      Area = {
        value: ''
      },
      Ukuran,
      Harga,
      Komoditas,
      Tanggal
    } = params || {}
    const [area_kota = null, area_provinsi = null] =
      Area.value.split(', ') || []

    const payload = {
      search: {
        uuid: id
      },
      set: {
        komoditas: Komoditas,
        area_provinsi,
        area_kota,
        size: Ukuran.value || null,
        price: Harga,
        tgl_parsed: Tanggal,
        timestamp: new Date().getTime()
      }
    }
    dispatch(updatePrice(payload))
  }

  const onDelete = () => {
    const payload = {
      search: {
        uuid: id
      }
    }
    dispatch(deletePrice(payload))
  }

  useEffect(() => {
    if (meta.prices === 'updated' || meta.prices === 'deleted')
      history.push('/')
  }, [meta])

  useEffect(() => {
    dispatch(
      findPrice({
        params: {
          search: {
            uuid: id
          }
        }
      })
    )
  }, [])

  if (meta.price === 'fetch') {
    return (
      <ModalLoader
        caption="Menyiapkan data..."
        isOpen={meta.price === 'fetch'}
        fullScreen={false}
      />
    )
  }

  return (
    <FormPrice
      type="update"
      meta={meta}
      onSubmit={onSubmit}
      title="Ubah Komoditas"
      breadcrumb="Ubah Komoditas"
      loader={loader}
      onDelete={onDelete}
      model={model({areas, sizes, values: price})}
    />
  )
}

UpdatePricePage.propTypes = {}

export default UpdatePricePage
