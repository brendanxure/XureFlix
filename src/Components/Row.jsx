import React, { useState } from 'react'

const Row = ({title, Content}) => {
    console.log(Content)

  return (
    <div>
        <h1 className='p-2 text-2xl font-bold'>{title}</h1>
        <div className='flex items-center'>
        <div id={'slider'} className='flex whitespace-nowrap scroll-smooth relative'>
            {Content?.map(item=>
            <div key={item.id} className='p-2 w-[300px] h-[200px] cursor-pointer relative'>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="/" />
                <div className='group w-full h-full hover:bg-black/50 absolute left-0 top-0'>
                    <p className='group-hover:block hidden absolute top-[50%] items-center text-center h-full w-full text-lg'>{item.title}</p>
                    
                </div>
            </div>    
            )}
        </div>
        </div>
    </div>
  )
}

export default Row