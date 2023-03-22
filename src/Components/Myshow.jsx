import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLatestMovies, getLatest } from '../features/Latest/LatestSlice'
import { getPopularmovies } from '../features/popular/popularSlice'
import { getAllTopRated, getToprated } from '../features/Toprated/TopratedSlice'
import { getAllUpcoming, getUpcoming } from '../features/Upcoming/UpcomingSlice'
import Row from './Row'

const Myshow = () => {

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
    <div className='text-white'>
         <img className='w-full h-[70vh]' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
         <div className='absolute top-[30vh] ml-12'>
             <h1 className='font-bold lg:text-4xl md:text-3xl text-3xl'>My Shows</h1>
             <div>

             </div>
         </div>
        <Row title="Upcoming" Content={upcomingMovies} />
        {/* <Row title="Popular" Content={popular} />
        <Row title="Top Rated" Content={Toprated}/>
        <Row title="Latest" Content={Latest} /> */}

    </div>
  )
}

export default Myshow