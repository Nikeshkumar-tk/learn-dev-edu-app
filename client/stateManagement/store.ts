import { configureStore } from '@reduxjs/toolkit'
import nav from './features/navSlice'
import user from './features/userSlice'


export const store = configureStore({

    reducer:{
        nav:nav,
        user:user
    }

})