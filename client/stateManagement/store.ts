import { configureStore } from '@reduxjs/toolkit'
import nav from './features/navSlice'


export const store = configureStore({

    reducer:{
        nav:nav
    }

})