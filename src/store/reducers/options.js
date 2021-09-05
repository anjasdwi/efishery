import {actionTypes} from 'store/actions/options'

const initialState = {
  data: {
    areas: [],
    sizes: [],
  },
  meta: {
    areas: 'fetch',
    sizes: 'fetch'
  }
}

const optionReducers = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_DATA_AREAS:
    return {
      ...state,
      data: {
        ...state.data,
        areas: action.payload
      },
    }
  case actionTypes.SET_META_AREAS:
    return {
      ...state,
      meta: {
        ...state.meta,
        areas: action.payload,
      },
    }
  case actionTypes.SET_DATA_SIZES:
    return {
      ...state,
      data: {
        ...state.data,
        sizes: action.payload
      },
    }
  case actionTypes.SET_META_SIZES:
    return {
      ...state,
      meta: {
        ...state.meta,
        sizes: action.payload,
      },
    }
  default:
    return state
  }
}

export default optionReducers