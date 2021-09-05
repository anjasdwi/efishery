import React from 'react'
import PropTypes from 'prop-types'
import {Button, FormGroup, Input, ButtonGroup} from 'reactstrap'

const SectionSearch = ({filter, setFilter, onSearch, toggleModal}) => (
  <div className="app-search mb-3">
    <div className="d-flex">
      <FormGroup className="mb-0">
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Cari Komoditas"
          value={filter.komoditas}
          onChange={(e) =>
            setFilter({
              ...filter,
              komoditas: e.target.value
            })
          }
        />
      </FormGroup>
      <Button className="btn-outline-eFishery ml-2" outline onClick={onSearch}>
        Cari
      </Button>
    </div>

    <ButtonGroup>
      <Button
        className="btn-outline-eFishery"
        outline
        onClick={toggleModal('filter')}
      >
        Filter
      </Button>
      <div className="divider" />
      <Button
        className="btn-outline-eFishery"
        outline
        onClick={toggleModal('sorter')}
      >
        Urutkan
      </Button>
    </ButtonGroup>
  </div>
)

SectionSearch.propTypes = {
  setFilter: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    komoditas: PropTypes.string
  }).isRequired
}

export default SectionSearch
