import { createSlice } from '@reduxjs/toolkit'

var user

if(typeof window !== "undefined"){
    user = JSON.parse(localStorage.getItem('edu-user'))
}

const INITIAL_STATE = {
    user: user ? user : null,
    error: false,
    isLoading: false
}

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        loginStart: (state) => {
            state.user = null
            state.isLoading = true,
                state.error = false
        },
        loginFailed: (state) => {
            state.user = null
            state.isLoading = false
            state.error = true
        },
        loginSucess: (state, action) => {
            state.user = action.payload
            state.isLoading = false
            state.error = false
        },
        logOut: (state) => {
            state.user = null
            state.isLoading = false
            state.error = false
        }
    }
})

export const { loginStart, loginFailed, loginSucess, logOut } = userSlice.actions
export default userSlice.reducer