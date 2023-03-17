import popularService from "./popularService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    popMovies: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

console.log(popularService.popMovieService())


export const getAllPopularmovies = createAsyncThunk('get/AllPopularMovies', async (_, thunkAPI) => {
    try {
        const response = await popularService.popMovieService()
        return response
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}) 

export const popularMovies = createSlice({
    name: "popMovies",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
    builder
    .addCase(getAllPopularmovies.pending, (state)=> {
        state.isLoading =true
    })
    .addCase(getAllPopularmovies.fulfilled, (state, action)=> {
        state.isLoading= false
        state.isSuccess= true
        state.popMovies = action.payload
    })
    .addCase(getAllPopularmovies.rejected, (state, action)=> {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    })
    }
})


export const getPopularmovies = state => state.popMovies.popMovies
export const isLoading = state => state.popMovies.isLoading

export default popularMovies.reducer