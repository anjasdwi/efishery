import React from 'react'
import PropTypes from 'prop-types'

const PriceList = ({komoditas, size, price, area_kota, area_provinsi}) => (
  <div className="price-list">
    <div className="price-list__commodity">{komoditas}</div>
    <div className="price-list__size">Ukuran: {size}</div>
    <div className="price-list__price">{price}</div>
    <div className="price-list__area">
      {`${area_kota}, ${area_provinsi}`}
    </div>
  </div>
)

PriceList.defaultProps = {
  komoditas: '',
  size: '',
  price: '',
  area_kota: '',
  area_provinsi: '',
}

PriceList.propTypes = {
  komoditas: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.string,
  area_kota: PropTypes.string,
  area_provinsi: PropTypes.string,
}

export default PriceList

