
import SteinStore from 'stein-js-client'
import {toast} from 'react-toastify'

import apiPath, {urlApi} from 'constant/apiPath'

export const actionTypes = {
  SET_DATA_PRICES: 'SET_DATA_PRICES',
  SET_SORTING_PRICES: 'SET_SORTING_PRICES',
  SET_META_PRICES: 'SET_META_PRICES',
  SET_META_FULL_LOAD: 'SET_META_FULL_LOAD'
}

const payloadToast = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export const getPrices = ({meta = 'fetch', params = {}} = {}) => async dispatch => {
  try {
    dispatch({
      type: actionTypes.SET_META_PRICES,
      payload: meta,
    })
		
    const store = new SteinStore(urlApi)
    
    const prices = await store.read(apiPath.PRICE_LIST(), params)
		
    dispatch({
      meta,
      type: actionTypes.SET_DATA_PRICES,
      payload: prices.filter((price) => price.uuid),
    })

    if (prices.length === 0) {
      dispatch({
        type: actionTypes.SET_META_FULL_LOAD,
        payload: true,
      })
    }

    dispatch({
      type: actionTypes.SET_META_PRICES,
      payload: 'success',
    })

  } catch (error) {
    dispatch({
      type: actionTypes.SET_META_PRICES,
      payload: 'fail',
    })
  }
}

export const sortingPrice = (payload) => (dispatch) => {
  dispatch({
    meta: 'sorting',
    type: actionTypes.SET_SORTING_PRICES,
    payload,
  })
}

export const createNewPrice = (payload) => async dispatch => {
  try {
    let state = ''
    dispatch({
      type: actionTypes.SET_META_PRICES,
      payload: 'submit',
    })
    
    const store = new SteinStore(urlApi)
    
    const response = await store.append(apiPath.PRICE_CREATE(), [
      payload,
    ])

    dispatch({
      type: actionTypes.SET_META_PRICES,
      payload: 'created',
    })

    if (response) {
      state = 'success'
    } else {
      state = 'error'
    }

    toast[state](`Komoditas baru ${state === 'success' ? 'berhasil' : 'gagal'} ditambahkan`, payloadToast)

    return response || {}
		
  } catch (error) {
    dispatch({
      type: actionTypes.SET_META_PRICES,
      payload: 'fail',
    })
    toast.error('Komoditas baru gagal ditambahkan', payloadToast)
  }
}