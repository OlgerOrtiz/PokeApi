import { createSlice } from "@reduxjs/toolkit";

const currentPageSlice = createSlice({
    name: 'currentPage',
    initialState: 0,
    reducers: {
        setCurrentPage: (state, action) => action.payload
    }
    
})

export const pokemonsPerPage = 9
export const { setCurrentPage } = currentPageSlice.actions
export default currentPageSlice.reducer