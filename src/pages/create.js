import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import uuid from 'react-uuid'

import {createNewPrice} from 'store/actions/prices'
import model from 'scheme/createPrice'
import FormPrice from 'components/FormPrice'
import useOptions from 'hooks/useOptions'

const CreatePricePage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {meta} = useSelector(({prices}) => prices)
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

  useEffect(() => {
    if (meta.prices === 'created') history.push('/')
  }, [meta])

  return (
    <FormPrice
      meta={meta}
      title="Buat Baru"
      breadcrumb="Tambah Komoditas"
      model={model({areas, sizes})}
      onSubmit={onSubmit}
      loader={loader}
    />
  )
}

CreatePricePage.propTypes = {}

export default CreatePricePage
