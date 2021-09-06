import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getAreas, getSizes} from 'store/actions/options'

const useOptions = () => {
  const dispatch = useDispatch()
  const {data} = useSelector(({options}) => options)
  const {areas = [], sizes = []} = data || {}

  const [loader, setLoader] = useState(true)

  useEffect(async () => {
    setLoader(true)
    const dispatchAreas = dispatch(getAreas())
    const dispatchSizes = dispatch(getSizes())

    await Promise.all([dispatchAreas, dispatchSizes])

    setLoader(false)
  }, [])

  return {
    areas,
    sizes,
    loader
  }
}

useOptions.propTypes = {}

export default useOptions
