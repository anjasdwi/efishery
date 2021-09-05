import {actionTypes} from 'store/actions/prices'

const initialState = {
  data: {
    prices: [],
  },
  meta: {
    prices: 'fetch'
  }
}

const priceReducers = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_DATA_PRICES:
    return {
      ...state,
      data: {
        ...state.data,
        prices: action.meta === 'loadmore' ? [
          ...state.data.prices,
          ...action.payload,
        ] : action.payload
      },
    }
  case actionTypes.SET_SORTING_PRICES:
    return {
      ...state,
      data: {
        ...state.data,
        prices: action.payload
      },
    }
  case actionTypes.SET_META_PRICES:
    return {
      ...state,
      meta: {
        ...state.meta,
        prices: action.payload,
      },
    }
  default:
    return state
  }
}

export default priceReducers