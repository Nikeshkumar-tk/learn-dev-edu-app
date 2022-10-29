import { createSlice } from '@reduxjs/toolkit'


const initial_state = {
    show: true
}

const navSlice = createSlice({
    name: "nav",
    initialState: initial_state,
    reducers: {
        loginMode: (state) => {
            state.show = false
        },
        registerMode: (state) => {
            state.show = false
        },
        showNav: (state) => {
            state.show = true
        }

    }
})


export const { loginMode, registerMode, showNav } = navSlice.actions
export default navSlice.reducer