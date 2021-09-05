import React from 'react'
import PropTypes from 'prop-types'
import {numberToCurrency} from 'json-reactform/src/libs/helper'

import {capitalizeTheFirstLetter} from 'utils/string'
import {dateFormat} from 'utils/date'

const PriceList = ({
  komoditas,
  size,
  price,
  area_kota,
  area_provinsi,
  tgl_parsed
}) => {
  const setArea = () => {
    return `${capitalizeTheFirstLetter(
      area_kota ? area_kota.toLowerCase() : ''
    )}, ${capitalizeTheFirstLetter(
      area_provinsi ? area_provinsi.toLowerCase() : ''
    )}`
  }

  return (
    <div className="price-list">
      <div className="price-list__date text-muted mb-2">
        Tanggal: {tgl_parsed ? dateFormat(tgl_parsed) : '-'}
      </div>
      <div className="price-list-grid">
        <div>
          <div className="price-list__label text-muted">Komoditas</div>
          <div className="price-list__commodity">{komoditas}</div>
        </div>
        <div>
          <div className="price-list__label text-muted">Ukuran</div>
          <div className="price-list__value">{size}</div>
        </div>
        <div>
          <div className="price-list__label text-muted">Harga</div>
          <div className="price-list__value">
            Rp {numberToCurrency(price || 0)}
          </div>
        </div>
        <div>
          <div className="price-list__label text-muted">Area</div>
          <div className="price-list__value">{setArea()}</div>
        </div>
      </div>
    </div>
  )
}

PriceList.defaultProps = {
  komoditas: '',
  size: '',
  price: '',
  tgl_parsed: '',
  area_kota: '',
  area_provinsi: ''
}

PriceList.propTypes = {
  tgl_parsed: PropTypes.string,
  komoditas: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.string,
  area_kota: PropTypes.string,
  area_provinsi: PropTypes.string
}

export default PriceList
