import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import {addMessage} from '../Utill/chatSlice'

const LiveChat = () => {
    const chatMessage=useSelector((store)=>store.chat.messages)
    const dispatch=useDispatch()
    useEffect(()=>{
        const i=setInterval(()=>{
            //  /API polling
            // console.log("API ")
dispatch(addMessage({
    name:"khushi",
    message:"nw project"
}
))
        },2000)
        return()=>clearInterval(i)
    },[])
  return (
    <div className='ml-2 p-2 border border-black w-full h-[500px] bg-gray-200  rounded-lg'>
        {chatMessage.map((c,index)=> <ChatMessage key={index} name={c.name} message={c.message}/>)}
   
    

    </div>
  )
}

export default LiveChat
