import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import JsonToForm from 'json-reactform'

import model from 'scheme/createPrice'
import {useDispatch, useSelector} from 'react-redux'
import {Spinner} from 'reactstrap'
import uuid from 'react-uuid'

import ModalLoader from 'components/modal/loader'
import {createNewPrice} from 'store/actions/prices'
import {getAreas, getSizes} from 'store/actions/options'

const CreatePrice = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {data} = useSelector(({options}) => options)
  const {meta} = useSelector(({prices}) => prices)
  const {areas = [], sizes = []} = data || {}

  const [loader, setLoader] = useState(true)

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
      uuid: uuid(),
      komoditas: Komoditas,
      area_provinsi,
      area_kota,
      size: Ukuran.value || null,
      price: Harga,
      tgl_parsed: Tanggal,
      timestamp: new Date().getTime()
    }
    dispatch(createNewPrice(payload))
  }

  useEffect(async () => {
    setLoader(true)
    const dispatchAreas = dispatch(getAreas())
    const dispatchSizes = dispatch(getSizes())

    await Promise.all([dispatchAreas, dispatchSizes])

    setLoader(false)
  }, [])

  useEffect(() => {
    if (meta.prices === 'created') history.push('/')
  }, [meta])

  return (
    <>
      <h1>Buat Baru</h1>
      {meta.prices === 'submit' && (
        <ModalLoader isOpen={meta.prices === 'submit'} fullScreen={false} />
      )}
      <div className="form-create-price">
        {!loader ? (
          <JsonToForm model={model({areas, sizes})} onSubmit={onSubmit} />
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner className="spinner-eFishery" />
          </div>
        )}
      </div>
    </>
  )
}

CreatePrice.propTypes = {}

export default CreatePrice
