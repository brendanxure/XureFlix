import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPopularmovies, getPopularmovies } from '../features/popular/popularSlice'

const Banner = () => {
    const dispatch = useDispatch()

    const movies = useSelector(getPopularmovies)
   

    useEffect(()=>{
        dispatch(getAllPopularmovies()) 
    }, [dispatch])
    
    const movie = movies[Math.floor(Math.random() * movies.length)]
    console.log(movie?.backdrop_path)
    


  return (
    <div>
        <img className='h-[600px] w-full' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt='/' />
        <div className='absolute top-[30%] left-0 mx-auto w-full h-full px-6'>
            <div>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>{movie?.title}</h1>
                <button className='bg-white px-4 py-1 my-3 text-black'>Play</button>
                <button className='b px-4 py-1 my-3'>Watch Later</button>
            </div>
            <div className='w-[95%] md:w-[80%] lg:w-[60%] my-2 h-full'>
                <p>Released: {movie?.release_date}</p>
                <p className='my-2'>{movie?.overview.slice(0, 200) + '...'}</p>
            </div>

        </div>
    </div>
  )
}

export default Banner