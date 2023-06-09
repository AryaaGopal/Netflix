import React, { useState } from 'react'
import "./Banner.css"
import { useEffect } from 'react';
import axios from '../../axios'
import {API_KEY,imageUrl}  from '../../Constants/Constant'

function Banner() {
  const[movie,setMovie]=useState()
  useEffect(() => {
  axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    
    const arrayOfObjects=(response.data.results)
    const randomIndex = Math.floor(Math.random() * arrayOfObjects.length);
   setMovie(response.data.results[randomIndex])
   

  })
  }, [])
  
  return (
    <div
    style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}
    className='Banner'>
     <div className='Content'>
       <h1 className='title'>{movie? movie.title:""}</h1>
         <div className='banner-buttons'>
         <button className='button'>Play</button>
         <button className='button'>My List</button>
        </div>
     <h1 className='description'> {movie?movie.overview:""}</h1>
     
    </div>
     <div className='fade_bottom'></div>

    </div>
  )
}

export default Banner