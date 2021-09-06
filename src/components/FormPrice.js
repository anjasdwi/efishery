import React from 'react'
import PropTypes from 'prop-types'
import JsonToForm from 'json-reactform'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

import {Spinner} from 'reactstrap'

import ModalLoader from 'components/modal/loader'

const FormPrice = ({title, breadcrumb, meta, model, onSubmit, loader}) => (
  <>
    <h1 className="mb-3">{title}</h1>
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>{breadcrumb}</BreadcrumbItem>
    </Breadcrumb>

    {meta.prices === 'submit' && (
      <ModalLoader isOpen={meta.prices === 'submit'} fullScreen={false} />
    )}

    {!loader ? (
      <div className="form-create-price">
        <JsonToForm model={model} onSubmit={onSubmit} />
      </div>
    ) : (
      <div className="d-flex justify-content-center">
        <Spinner className="spinner-eFishery" />
      </div>
    )}
  </>
)

FormPrice.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumb: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    prices: PropTypes.string
  }).isRequired,
  model: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired
}

export default FormPrice
