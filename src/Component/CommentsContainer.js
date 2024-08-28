import React from 'react'

const CommentsContainer = () => {
    const commentData = [{
        name: "marya khushi",
        text: "its you tube react project",
        replies: [
            {
                name: "marya khushi",
                text: "its you tube react project",
                replies: [
                    {
                        name: "marya khushi",
                        text: "its you tube react project",
                        replies: [
                            {
                                name: "marya khushi",
                                text: "its you tube react project",
                                replies: [

                                ]
                            },
                            {
                                name: "marya khushi",
                                text: "its you tube react project",
                                replies: [
                                    {
                                        name: "marya khushi",
                                        text: "its you tube react project",
                                        replies: [
                                            {
                                                name: "marya khushi",
                                                text: "its you tube react project",
                                                replies: [
                                                    {
                                                        name: "marya khushi",
                                                        text: "its you tube react project",
                                                        replies: [
                                                            {
                                                                name: "marya khushi",
                                                                text: "its you tube react project",
                                                                replies: [
                                                                    {
                                                                        name: "marya khushi",
                                                                        text: "its you tube react project",
                                                                        replies: [
                                                                           
                                                                        ]
                                                                    }, 
                                                                ]
                                                            }, 
                                                        ]
                                                    }, 
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "marya khushi",
        text: "its you tube react project",
        replies: [
           
        ]
    },
    {
        name: "marya khushi",
        text: "its you tube react project",
        replies: [
           
        ]
    },
    {
        name: "marya khushi",
        text: "its you tube react project",
        replies: [

        ]
    },


    ]
    const Comment = (({ data }) => {
        const { name, text, replies } = data;
        return (
            <div className='flex bg-gray-100 shadow-sm rounded-lgp-2'>
                <img
                    className='w-12 h-12'
                    alt='user'
                    src='https://iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
                <div className='px-3'>
                    <p className='font-bold'>{name}</p>
                    <p>{text}</p>
                </div>
            </div>
        )
    })
    const CommentList = ({ comments }) => {
        return comments.map((comment, index) =>
            <div key={index}>
                <Comment  data={comment} />
                <div className='border border-l-black ml-5 pl-5'>
                    <CommentList comments={comment.replies} />
                </div>
            </div>

        )
    }
    return (
        <div className='m-5 p-2'>
            <h1 className='font-bold text-2xl'>Comments:</h1>
            <CommentList comments={commentData} />
        </div>
    )
}

export default CommentsContainer
