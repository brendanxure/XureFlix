import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import TopratedService from './TopratedService';

const initialState = {
    Toprated: null,
    status: 'idle',
    message: ''
}

export const getAllTopRated = createAsyncThunk('get/topratedmovies', async(_, thunkAPI)=> {
    try {
        const response = await TopratedService.TopratedMovies()
        console.log(response)
        return response
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const TopratedSlice = createSlice({
  name: 'TopratedMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
      .addCase(getAllTopRated.pending, (state)=>{
          state.status='loading'
      })
      .addCase(getAllTopRated.fulfilled, (state, action)=> {
          state.status='success'
          state.Toprated= action.payload
      })
      .addCase(getAllTopRated.rejected, (state, action)=> {
          state.status='error'
          state.message= action.payload
      })

  }
});

export const getToprated = state => state.TopratedMovies.Toprated
// export const {} = TopratedSlice.actions

export default TopratedSlice.reducer