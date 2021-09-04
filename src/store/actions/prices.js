
import SteinStore from 'stein-js-client'

export const actionTypes = {
  SET_DATA_PRICES: 'SET_DATA_PRICES',
  SET_META_PRICES: 'SET_META_PRICES'
}

export const getPrices = (params) => async dispatch => {
  try {
    dispatch({
      type: actionTypes.SET_META_PRICES,
      payload: 'fetch',
    })
		
    const store = new SteinStore(
      'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4'
    )
    
    const prices = await store.read('list', params)
		
    dispatch({
      type: actionTypes.SET_DATA_PRICES,
      payload: prices.filter((price) => price.uuid),
    })

    dispatch({
      type: actionTypes.SET_META_PRICES,
      payload: 'success',
    })
		
  } catch (error) {
    console.log(error)
    dispatch({
      type: actionTypes.SET_META_PRICES,
      payload: 'fail',
    })
  }
}