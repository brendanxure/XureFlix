import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import LatestService from './LatestService';

const initialState = {
    latestMovies: null,
    status: 'idle',
    message: ''
}

export const getAllLatestMovies = createAsyncThunk('getlatestmovies', async(_, thunkAPI)=>{
    try {
        const response = await LatestService.latestMovies()
        return response
    } catch (error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const LatestSlice = createSlice({
  name: 'Latestmovies',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
      builder
      .addCase(getAllLatestMovies.pending, (state)=> {
          state.status = 'loading'
      })
      .addCase(getAllLatestMovies.fulfilled, (state, action)=> {
          state.status = 'success'
          state.latestMovies = action.payload
      })
      .addCase(getAllLatestMovies.rejected, (state, action)=> {
            state.status = 'error'
            state.message = action.payload
      })
  }
});

// export const {} = LatestSlice.actions
export const getLatest = state=> state.Latestmovies.latestMovies

export default LatestSlice.reducer