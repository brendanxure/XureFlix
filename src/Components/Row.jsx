import React, { useState } from 'react'

const Row = ({title, Content}) => {
    console.log(Content)

  return (
    <div>
        <h1>{title}</h1>
        <div className='relative flex items-center'>
        <div className='flex mx-auto overflow-x-scroll w-full h-full scrollbar-hide scroll-smooth whitespace-nowrap'>
            {Content?.map(item=>
            <div key={item.id} className='p-2 w-[300px] h-[100px] cursor-pointer'>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="/" />
            </div>    
            )}
        </div>
        </div>
    </div>
  )
}

export default Row