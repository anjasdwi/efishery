import React from 'react'
import PropTypes from 'prop-types'
import {Modal, ModalBody, Spinner} from 'reactstrap'

const ModalLoader = ({caption, fullScreen, className, ...props}) => {
  let dialogClassName = ''

  if (fullScreen) {
    dialogClassName = 'modal-fullscreen'
  } else {
    dialogClassName = 'modal-dialog-centered'
  }

  return (
    <Modal className={`${dialogClassName} ${className}`} {...props}>
      <ModalBody>
        <div className="d-flex justify-content-center h-100 align-items-center flex-column">
          <h6>{caption}</h6>
          <Spinner className="spinner-eFishery mt-4" />
        </div>
      </ModalBody>
    </Modal>
  )
}

ModalLoader.defaultProps = {
  fullScreen: true,
  caption: 'Mohon Tunggu...',
  className: ''
}

ModalLoader.propTypes = {
  fullScreen: PropTypes.bool,
  caption: PropTypes.string,
  className: PropTypes.string
}

export default ModalLoader
