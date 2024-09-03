import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 w-48 shadow-xl'>
         <ul>
        <li className="p-2 active:text-2xl" ><Link to={"/"}>Home</Link></li>
        <li className="p-2">Shots</li>
        <li className="p-2">Video</li>
        <li className='p-2'>Live</li>
     </ul>
        <h1 className=' font-bold pt-5'>Subscription</h1>
     <ul>
        <li className="p-2">Music</li>
        <li className="p-2">Gaming</li>
        <li className="p-2">Sports</li>
        <li className="p-2">Movei</li>
     </ul>
     <h1 className=' font-bold pt-5'>Watch Later</h1>
     <ul>
        <li className="p-2">Music</li>
        <li className="p-2">Gaming</li>
        <li className="p-2">Sports</li>
        <li className="p-2">Movei</li>
     </ul>
    </div>
  )
}

export default Sidebar
