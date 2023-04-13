import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CheckBox from '../CheckBox/CheckBox'
import { switchCheckBox } from '../store/sideFilterSlice'

const useSideFilterLogic = () => {
  const dispatch = useDispatch()
  const sideFilterState = useSelector((state) => state.sideFilter)
  const checkBoxes = sideFilterState.map((item, index) => <CheckBox key={index} data={item} />)
  useEffect(() => {
    const slicedState = sideFilterState.slice(1)
    const condition = slicedState.every((item) => (item.enabled ? true : false))
    if (condition && !sideFilterState[0].enabled) {
      dispatch(switchCheckBox('all'))
    } else if (!condition && sideFilterState[0].enabled) {
      dispatch(switchCheckBox('all'))
    }
  }, [sideFilterState])
  return checkBoxes
}
export default useSideFilterLogic
