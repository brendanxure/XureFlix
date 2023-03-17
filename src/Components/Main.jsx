import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLatestMovies, getLatest } from '../features/Latest/LatestSlice'
import { getPopularmovies } from '../features/popular/popularSlice'
import { getAllTopRated, getToprated } from '../features/Toprated/TopratedSlice'
import { getAllUpcoming, getUpcoming } from '../features/Upcoming/UpcomingSlice'
import Row from './Row'

const Main = () => {
    const upcomingMovies = useSelector(getUpcoming)
    const popular = useSelector(getPopularmovies)
    const Toprated = useSelector(getToprated)
    const Latest = useSelector(getLatest)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllUpcoming())
        dispatch(getAllTopRated())
        dispatch(getAllLatestMovies())
    }, [])
  return (
    <div className='mb-8'>
        <Row title="Upcoming" Content={upcomingMovies} />
        <Row title="Popular" Content={popular} />
        <Row title="Top Rated" Content={Toprated}/>
        <Row title="Latest" Content={Latest} />
    </div>
  )
}

export default Main