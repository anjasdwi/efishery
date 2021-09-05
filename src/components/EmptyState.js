import React from 'react'
import PropTypes from 'prop-types'
import AlertIcon from 'components/Icons/Alert'

const EmptyState = ({title, description}) => (
  <div className="text-center p-4">
    <AlertIcon width={32} height={32} className="mb-2 text-black-50" />
    <h6>{title}</h6>
    <div>{description}</div>
  </div>
)

EmptyState.defaultProps = {
  title: 'Komoditas tidak ditemukan',
  description: 'Silakan gunakan kata kunci pencarian lainnya.'
}

EmptyState.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default EmptyState
