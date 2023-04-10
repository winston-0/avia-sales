import React from "react";
import {switchCheckBox, switchAll} from '../store/sideFilterSlice';
import { useDispatch } from "react-redux";

const CheckBox = ({data}) => {
    const dispatch = useDispatch()
   const onChange = () => {
        if(data.id === 'all') {
            dispatch(switchAll())
        } else {
            dispatch(switchCheckBox(data.id))
        }
    }
        return (
            <li>
            <label htmlFor={data.id}>
                <input checked={data.enabled} onChange={onChange} type="checkbox" id={data.id}/>
                <span className="checkbox-span"></span>
                <span className="side-filter__text">{data.name}</span>
            </label>
            </li>
        )
}

export default CheckBox