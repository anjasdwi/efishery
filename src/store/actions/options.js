
import SteinStore from 'stein-js-client'

import apiPath, {urlApi} from 'constant/apiPath'

export const actionTypes = {
  SET_DATA_AREAS: 'SET_DATA_AREAS',
  SET_META_AREAS: 'SET_META_AREAS',
  SET_DATA_SIZES: 'SET_DATA_SIZES',
  SET_META_SIZES: 'SET_META_SIZES'
}

export const getAreas = (params) => async dispatch => {
  try {
    dispatch({
      type: actionTypes.SET_META_AREAS,
      payload: 'fetch',
    })
		
    const store = new SteinStore(urlApi)
    
    const areas = await store.read(apiPath.AREAS(), params)
		
    dispatch({
      type: actionTypes.SET_DATA_AREAS,
      payload: areas.map((area) => ({
        label: `${area.city}, ${area.province}`,
        value: `${area.city}, ${area.province}`,
      })),
    })

    dispatch({
      type: actionTypes.SET_META_AREAS,
      payload: 'success',
    })
		
  } catch (error) {
    dispatch({
      type: actionTypes.SET_META_AREAS,
      payload: 'fail',
    })
  }
}

export const getSizes = (params) => async dispatch => {
  try {
    dispatch({
      type: actionTypes.SET_META_SIZES,
      payload: 'fetch',
    })
		
    const store = new SteinStore(urlApi)
    
    const sizes = await store.read(apiPath.SIZES(), params)
		
    dispatch({
      type: actionTypes.SET_DATA_SIZES,
      payload: sizes.map(({size}) => ({
        label: size,
        value: size,
      })),
    })

    dispatch({
      type: actionTypes.SET_META_SIZES,
      payload: 'success',
    })
		
  } catch (error) {
    dispatch({
      type: actionTypes.SET_META_SIZES,
      payload: 'fail',
    })
  }
}