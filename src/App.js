import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Button, FormGroup, Label, Input, Spinner, ButtonGroup } from 'reactstrap'

import {getPrices} from 'store/actions/prices'
import Header from 'components/Header'
import PriceList from 'components/PriceList'
import EmptyState from 'components/EmptyState'

const App = () => {
  const LIMIT_DEFAULT = 10
  const dispatch = useDispatch()
  const {data, meta} = useSelector(({prices}) => prices)

  const [pagination, setPagination] = useState({
    limit: LIMIT_DEFAULT,
    offset: 0,
  })
  const [filter, setFilter] = useState({
    search: ''
  })

  const loadMore = () => {
    setPagination({
      limit: pagination.limit + LIMIT_DEFAULT,
      offset: pagination.limit + 1
    })
    dispatch(getPrices({
      limit: pagination.limit + LIMIT_DEFAULT,
      offset: pagination.limit + 1
    }))
  }

  useEffect(() => {
    if (filter.search.length > 0) {
      dispatch(getPrices({
        search: {
          komoditas: filter.search
        }
      }))
    } else {
      dispatch(getPrices(pagination))
    }
  }, [filter.search])

  useEffect(() => {
    dispatch(getPrices(pagination))
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <div className="app">
          {/* <h1>Daftar Harga Ikan di Indonesia</h1> */}

          <div className="app-search">
            <FormGroup>
              <Label for="search">Cari Komoditas</Label>
              <Input
                type="text"
                name="search"
                id="search"
                value={filter.value}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    search: e.target.value
                  })
                }
              />
            </FormGroup>

            <ButtonGroup>
              <Button color="primary" outline>Filter</Button>
              <Button color="primary" outline>Urutkan</Button>
            </ButtonGroup>
          </div>

          {data.prices.map((price, key) => (
            <PriceList key={key} {...price} />
          ))}

          <div className="d-flex justify-content-center">
            {meta.prices === 'fetch' ? (
              <Spinner color="primary" />
            ) : (data.prices.length > 0 && filter.search.length === 0) ? (
              <Button color="primary" onClick={loadMore}>Selanjutnya</Button>
            ) : data.prices.length === 0 && (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
