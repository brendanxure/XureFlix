import { configureStore } from '@reduxjs/toolkit';
import popularReducer from '../features/popular/popularSlice';
import upcomingReducer from '../features/Upcoming/UpcomingSlice'
import topratedReducer from '../features/Toprated/TopratedSlice'
import latestReducer from '../features/Latest/LatestSlice'


export const store = configureStore({
  reducer: {
    popMovies: popularReducer,
    upcomingmovies: upcomingReducer,
    TopratedMovies: topratedReducer,
    Latestmovies: latestReducer
  },
});
