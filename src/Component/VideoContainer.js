import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../Utill/Constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NewSearch } from '../Utill/NewSearchSlice';
const VideoContainer = () => {
  const[videoId,setVideoId]=useState("")
  const videos=useSelector((store)=>store.new.allVideos)
  // console.log(videos)
  // const[videos,setVideos]=useState([])
  const dispatch=useDispatch()
  useEffect(() => {
    getVideos()
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json();
    // console.log(json.items)
    // setVideos(json.items)
    dispatch(NewSearch(json.items))
  } 
if(videos.length===0){
  return <h1>loading</h1>
} 
// video?.kind ==="youtube#searchResult" ? video?.id?.videoId : video.id
  return (
  <div className='p-2 m-2 flex flex-wrap justify-center '>
   {videos.map((video)=>(
   <Link  key={video.id} to={`/watch?v=${video?.kind ==="youtube#searchResult" ? video?.id?.videoId : video.id}` }><VideoCard  info={video}/></Link> ))}
  </div>
  )
}

export default VideoContainer
