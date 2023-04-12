import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 'all',
        name: 'Все',
        enabled: true
    },
    {
        id: 'noStop',
        name: 'Без пересадок',
        value: 0,
        enabled: true
    },
    {
        id: 'oneStop',
        name: '1 пересадка',
        value: 1,
        enabled: true
    },
    {
        id: 'twoStop',
        name: '2 пересадки',
        value: 2,
        enabled: true
    },
    {
        id: 'threeStop',
        name: '3 пересадки',
        value: 3,
        enabled: true
    }
]


const sideFilterSlice = createSlice({
    name: 'sideFilter',
    initialState,
    reducers: {
        "switchCheckBox": (state, action) => {
            state.forEach(item => {
                if(item.id === action.payload) {
                    item.enabled = !item.enabled
                }
            })    
        },
        "switchAll": (state, action) => {
            if(state[0].enabled === false) {
                state.forEach(item => {
                    item.enabled = true
                })
            } else {
                state.forEach(item => {
                    item.enabled = false
                })
            }
        }
    }
 }
)
export const {switchCheckBox, switchAll} = sideFilterSlice.actions
export default sideFilterSlice.reducer