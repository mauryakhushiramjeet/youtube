import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
const CommentList = () => {
    const [searchParams] = useSearchParams();
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchComments()
    }, [])
    const fetchComments = async () => {
        const data = await fetch(
            `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${searchParams.get("v")}&key=AIzaSyBL72bDjA77VV3eYrZQDg0UIXrpimFOGDU`
        );
        const json = await data.json();
        // console.log("id",searchParams.get("v"))
        // console.log(json?.items)
        setComments(json?.items);
    };
    if (comments.length === 0) return <h1>Loading...</h1>;
    return (
        
        <div className='overflow-y-scroll h-[100%] '>
            <h1 className='font-bold px-2 my-2 text-xl'>Comments:</h1>
            {/* <input className='border border-gray-400 w-[80%] p-2 mt-2 ml-2 mr-2' type='text'/><button className='ml-2 rounded-lg bg-green-100 p-3 text-lg font-semibold'>send</button> */}

            {comments.map((comment) => (
                <div key={comment.id} className='w-full rounded-lg my-1 items-center pl-3 flex bg-slate-200 p-2 '>
                    <img className='h-12 rounded-3xl ' src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />
                    <span className='pl-3 font-bold font-serif  '>{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</span>
                    <span className="px-2 overflow-hidden ">
                        {comment?.snippet?.topLevelComment?.snippet?.textOriginal}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default CommentList
