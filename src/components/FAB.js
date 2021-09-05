import React from 'react'
import PropTypes from 'prop-types'

const FAB = ({children, ...props}) => {
  return (
    <button className="btn btn-fab-efishery" {...props}>
      {children}
    </button>
  )
}

FAB.propTypes = {
  children: PropTypes.node.isRequired
}

export default FAB
