import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 w-48 shadow-lg'>
         <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li>Shots</li>
        <li>Video</li>
        <li>Live</li>
     </ul>
        <h1 className=' font-bold pt-5'>Subscription</h1>
     <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movei</li>
     </ul>
     <h1 className=' font-bold pt-5'>Watch Later</h1>
     <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movei</li>
     </ul>
    </div>
  )
}

export default Sidebar
