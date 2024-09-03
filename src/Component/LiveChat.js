import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { generateRendomName } from '../Utill/helper'
import { makeRandomMessage } from '../Utill/helper'
import { aDDMessage } from '../Utill/chatSlice'

const LiveChat = () => {
    const [LiveMessage, setLiveMessage] = useState("")
    const chatMessage = useSelector((store) => store.chat.messages)
    const dispatch = useDispatch()
    useEffect(() => {
        const i = setInterval(() => {
            //  /API polling
            // console.log("API ")
            dispatch(aDDMessage({
                name: generateRendomName(),
                message: makeRandomMessage(20)
            }))
        }, 2000)
        return () => clearInterval(i)
    }, [])
    return (
        <>
            <div className='ml-2 p-2 border border-black w-full h-[500px] bg-gray-200  rounded-lg overflow-y-scroll flex flex-col-reverse'>
                <div>
                    {chatMessage.map((c, i) => (
                        <  ChatMessage key={i} name={c.name} message={c.message} />)
                    )}
                </div>

            </div>
            <form className='border border-black w-full ml-2 p-3 flex'
                   onSubmit={(e)=>{
                    e.preventDefault()
                    // console.log("on Submit",LiveMessage)
                    dispatch(aDDMessage({
                        name:"khushu",
                        message:LiveMessage
                    }))
                    setLiveMessage("")
                   }} >
               <input type='text'
                className='w-96 px-2'
                value={LiveMessage}
                onChange={(e)=>{setLiveMessage(e.target.value)}}

               />
                <button className='px-2 mx-2 bg-green-100'>send</button>
            </form>
        </>
    )
}

export default LiveChat

