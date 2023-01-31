import {createSlice} from "@reduxjs/toolkit";

export const navSlice = createSlice({
    name : "nav",
    initialState : {
        value : "Dashboard"
    },
    reducers : {
        update : (state,action) => {
            state.value = action.payload
        }
    }
})

export const {update} = navSlice.actions

export default navSlice.reducer