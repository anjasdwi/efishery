import React from 'react'
import PropTypes from 'prop-types'

import {capitalizeTheFirstLetter} from 'utils/string'

const PriceList = ({komoditas, size, price, area_kota, area_provinsi}) => {
  const setArea = () => {
    return `${capitalizeTheFirstLetter(
      area_kota ? area_kota.toLowerCase() : ''
    )}, ${capitalizeTheFirstLetter(
      area_provinsi ? area_provinsi.toLowerCase() : ''
    )}`
  }

  return (
    <div className="price-list">
      <div>
        <div className="price-list__commodity">{komoditas}</div>
        <div className="price-list__area">
          <span>Area</span>: {setArea()}
        </div>
      </div>
      <div className="price-list__size">Ukuran: {size}</div>
      <div className="price-list__price">{price}</div>
    </div>
  )
}

PriceList.defaultProps = {
  komoditas: '',
  size: '',
  price: '',
  area_kota: '',
  area_provinsi: ''
}

PriceList.propTypes = {
  komoditas: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.string,
  area_kota: PropTypes.string,
  area_provinsi: PropTypes.string
}

export default PriceList
