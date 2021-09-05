import React from 'react'
import PropTypes from 'prop-types'

const AlertIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

AlertIcon.defaultProps = {
  width: 24,
  height: 24
}

AlertIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

export default AlertIcon
