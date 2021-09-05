import React from 'react'
import PropTypes from 'prop-types'
import {Button, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap'

const ModalSorter = ({toggle, onSubmit, onChange, value, ...props}) => (
  <Modal className="modal-dialog-centered" size="sm" {...props}>
    <ModalHeader toggle={toggle}>Urut Berdasarkan</ModalHeader>
    <ModalBody>
      <FormGroup className="mb-0" tag="fieldset">
        <FormGroup check className="my-2">
          <Label check>
            <Input
              type="radio"
              name="sorter"
              value="price"
              onChange={onChange}
              checked={value === 'price'} 
            />
						Harga Tertinggi
          </Label>
        </FormGroup>
        <FormGroup check className="my-2">
          <Label check>
            <Input
              type="radio"
              name="sorter"
              value="size"
              onChange={onChange}
              checked={value === 'size'} 
            />
						Ukuran Tertinggi
          </Label>
        </FormGroup>
        <FormGroup check className="my-2">
          <Label check>
            <Input
              type="radio"
              name="sorter"
              value="komoditas"
              onChange={onChange}
              checked={value === 'komoditas'} 
            />
						Nama A-Z
          </Label>
        </FormGroup>
      </FormGroup>
    </ModalBody>
    <ModalFooter>
      <Button className="btn-eFishery" onClick={onSubmit}>
        Terapkan
      </Button>
      <Button outline onClick={toggle}>
        Batalkan
      </Button>
    </ModalFooter>
  </Modal>
)

ModalSorter.defaultProps = {
  value: null,
}

ModalSorter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default ModalSorter

