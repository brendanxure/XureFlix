import { addDoc, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { auth, db } from '../Firebase/Config'



const Row = ({title, Content, id}) => {
    console.log(Content)

    const [like, setLike] = useState([])
    // const [save, setSave] = useState(false)

    const movieId = doc(db, 'userMovies', `${auth?.currentUser?.email}`)

    const saveShow = async(id) => {
        if(auth?.currentUser) {
            setLike(id)
            // await addDoc(movieId, {
            //     savedShow: arrayUnion({
            //         id: item?.id,
            //         title: item?.title,
            //         img: item?.backdrop_path
            //     })
            // })
        } else {
            alert('Please login')
        }
    
    }
    const slideleft = () => {
        const slider = document.getElementById('slider' + id)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideright = () => {
        const slider = document.getElementById('slider' + id)
        slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
    <div>
        <h1 className='p-2 text-2xl font-bold'>{title}</h1>
        <div className='flex items-center group/pep'>
            <MdChevronLeft onClick={slideleft} size={40} className='hidden group-hover/pep:block bg-white rounded-full left-2 absolute z-10 opacity-50 hover:opacity-100 cursor-pointer text-black'/>
        <div id={'slider' + id} className='flex whitespace-nowrap scroll-smooth relative overflow-x-scroll gap-4 scrollbar-hide'>
            {Content?.map((item) =>
            <div key={item?.id} className='m-2 min-w-[300px] h-[200px] cursor-pointer relative'>
                <img className='w-full min-w-[300px] h-full object-cover' src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="/" />
                <div className='group w-full h-full hover:bg-black/50 absolute left-0 top-0 mx-auto'>
                    <p className='group-hover:block hidden absolute top-[50%] items-center text-center h-full w-full text-lg'>{item.title}</p>
                    <p>{like == item.id ? <AiFillHeart onClick={()=>saveShow(item?.id)} className='relative top-4 left-4 group-hover:block hidden' /> : <AiOutlineHeart onClick={()=>saveShow(item.id)} className='relative top-4 left-4 group-hover:block hidden' />}</p>
                    {/* {like ? <div onClick={()=>saveShow(id)}><AiFillHeart /></div> : <div onClick={saveShow} ><AiOutlineHeart /></div> } */}
                </div>
            </div>    
            )}
        </div>
            <MdChevronRight onClick={slideright} size={40} className='hidden group-hover/pep:block bg-white rounded-full absolute right-2 z-10 opacity-50 hover:opacity-100 cursor-pointer text-black'/>
        </div>
    </div>
  )
}

export default Row