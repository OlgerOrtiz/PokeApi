import { configureStore } from "@reduxjs/toolkit";
import trainerName from './slices/trainerName.slice'
import currentPage from './slices/currentPage.slice'

export default configureStore({
    reducer: {
        trainerName,
        currentPage,
        
    }
})
