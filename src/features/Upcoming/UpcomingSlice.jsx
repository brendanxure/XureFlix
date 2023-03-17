import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import UpcomingService from '../Upcoming/UpcomingService';

const initialState = {
    upcoming: null,
    status: "idle",
    message: ""
}

export const getAllUpcoming = createAsyncThunk('get/movies', async(_, thunkAPI)=> {
    try {
        const response = await UpcomingService.UpcomingMovService()
        return response
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const UpcomingSlice = createSlice({
  name: 'upcomingmovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getAllUpcoming.pending, (state)=>{
        state.status = "loading"
    })
    .addCase(getAllUpcoming.fulfilled, (state, action)=>{
        state.status = "success"
        state.upcoming = action.payload
    })
    .addCase(getAllUpcoming.rejected, (state, action)=>{
        state.status = "error"
        state.message = action.payload
    } )
  }
});

export const getUpcoming = state => state.upcomingmovies.upcoming

// export const {} = UpcomingSlice.actions

export default UpcomingSlice.reducer