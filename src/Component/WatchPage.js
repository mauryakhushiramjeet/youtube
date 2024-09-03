import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utill/appSlice'
import { useSearchParams } from 'react-router-dom'
// import CommentsContainer from './CommentsContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faShare, faArrowDown, faBell } from '@fortawesome/free-solid-svg-icons'
import CommentList from './CommentList'

import LiveChat from './LiveChat'
import { API_KEY } from '../Utill/Constants'
const WatchPage = () => {
    const [videoInfo, setVideoInfo] = useState([])

    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())
        fetchData();
    }, [dispatch])
    const fetchData = async () => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + searchParams.get("v") +
            "&key=" + API_KEY)
        const json = await data.json();
        // console.log(json?.items[0])
        console.log("sub", json.items)
        setVideoInfo(json?.items[0])

    }
    if (videoInfo.length === 0)
        return <h1>loading</h1>
    const { snippet, statistics } = videoInfo

    return (
        <div className=' flex flex-col w-full'>
            <div className='px-5 flex '>
                <div>
                    <iframe
                        width="1000" height="500"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen aria-hidden="false">

                    </iframe>
                    <h1 className="font-semibold text-2xl mt-5 ">{snippet?.localized.title}</h1>
                    <div className='flex mt-3 mb-3 mr-3 justify-center items-center '>
                        <div>
                            {/* <img src={snippet?.thumbnails?.standard}/> */}
                        </div>
                        <div>
                            <h1 className='text-[20px] font-bold w-[13rem]  '>{snippet.channelTitle}</h1>
                        </div>
                        <button className='bg-black text-white mr-7 px-5 py-1 rounded-2xl h-10 flex '><FontAwesomeIcon className='h-6 pr-1' icon={faBell} />Subscribe</button>

                        <button className='bg-black text-white ml-40  px-3 py-1 rounded-2xl flex text-[15px]  h-10'><FontAwesomeIcon className='h-5 px-2' icon={faThumbsUp} />{statistics.likeCount / 1000000 >= 1
                            ? `${(statistics.likeCount / 1000000).toPrecision(2)}M `
                            : `${(statistics.likeCount / 1000).toFixed(2)}K `
                        }<FontAwesomeIcon className='h-6 px-2' icon={faThumbsDown} /></button>
                        <button className='bg-black text-white mx-3 px-3 py-1 rounded-2xl  h-10 flex justify-center items-center'>
                            <FontAwesomeIcon className='h-5 px-2 ' icon={faShare} />   Share</button>
                        <button className='bg-black text-white mx-3 px-3 py-1 rounded-2xl  h-10 flex justify-center items-center'><FontAwesomeIcon className='h-4 px-2 font-bold' icon={faArrowDown} />Dowload</button>
                        <button className='bg-black text-white mx-3 px-3 py-1 rounded-2xl font-bold  h-10 justify-center items-center'>...</button>
                    </div>
                    <div>
                        <h1 className='mt-2 font-bold text-xl'> {statistics.commentCount}</h1>
                    </div>
                </div>
                <div className='w-full'>
                    <LiveChat />
                </div>
            </div>
            <div className='w-full'>
                <CommentList />
            </div>
        </div>
    )
}


export default WatchPage
