import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {useDispatch, useSelector} from 'react-redux'
import {Button, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Spinner} from 'reactstrap'

import {getAreas, getSizes} from 'store/actions/options'

const ModalFilter = ({toggle, onSubmit, onReset, values, setValues, ...props}) => {
  const dispatch = useDispatch()
  const {data} = useSelector(({options}) => options)
  const {meta} = useSelector(({prices}) => prices)
  const {areas = [], sizes = []} = data || {}

  const [loader, setLoader] = useState(true)
	
  useEffect(async() => {
    if (areas.length === 0 && sizes.length === 0) {
      setLoader(true)
      const dispatchAreas = dispatch(getAreas())
      const dispatchSizes = dispatch(getSizes())
  
      await Promise.all([dispatchAreas, dispatchSizes])
      setLoader(false)
      
    } else setLoader(false)
  }, [])

  return (
    <Modal className="modal-dialog-centered" {...props}>
      <ModalHeader toggle={toggle}>Filter Berdasarkan</ModalHeader>
      <ModalBody>
        {loader ? (
          <div className="d-flex justify-content-center">
            <Spinner className="spinner-eFishery" />
          </div>
        ) : (
          <>
            <FormGroup>
              <Label for="area">Area</Label>
              <Select
                placeholder="Cari & Pilih Area"
                options={areas}
                value={values.area}
                onChange={(e) => setValues({
                  ...values,
                  area: e
                })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="size">Ukuran</Label>
              <Select
                placeholder="Cari & Pilih Ukuran"
                options={sizes}
                value={values.size}
                onChange={(e) => setValues({
                  ...values,
                  size: e
                })}
              />
            </FormGroup>
          </>
        )}
      </ModalBody>
      <ModalFooter>
        <Button className="btn-eFishery" onClick={onSubmit} disabled={meta.prices === 'filtering'}>
          {meta.prices === 'filtering' ? 'Mohon Tunggu...' : 'Terapkan'}
        </Button>
        <Button outline onClick={onReset} disabled={meta.prices === 'reseting'}>
          {meta.prices === 'reseting' ? 'Mohon Tunggu...' : 'Reset Filter'}
        </Button>
      </ModalFooter>
    </Modal>
  )
}

ModalFilter.propTypes = {
  values: PropTypes.shape({
    area: PropTypes.shape({}),
    size: PropTypes.shape({}),
  }).isRequired,
  onReset: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
}

export default ModalFilter

