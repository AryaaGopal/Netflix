import React from 'react'
import "./RowPost.css"
import {API_KEY,imageUrl}  from '../../Constants/Constant'
import { useEffect,useState } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube';
function Rowpost(props) {
  const[movie,setMovie]=useState([])
  const[urlid,seturlid]=useState('')
  useEffect(() => {
  axios.get(props.url).then((response)=>{
    
    
   setMovie(response.data.results)
   console.log(response.data.results)
   

  })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handlemovie=(id)=>{
console.log(id)
axios.get(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
 console.log(response.data)
if(response.data.results.length!==0)
{
 seturlid(response.data.results)
}
else{
  alert("NO TRAILER")
}
})
  }
  return (
    <div className='row'>
     <h2>{props.title}</h2>
     <div className='posters'>
    
     {movie.map((obj)=>
     <img onClick={()=>handlemovie(obj.id)} className={props.isSmall?'smallPoster':'poster' } alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
     )}
     </div>
     {urlid &&<YouTube videoId={urlid.key} opts={opts}  />}
    </div>
    
  )
}

export default Rowpost