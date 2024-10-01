import React, { useEffect, useState } from "react";
// import { API_KEY } from "../Utill/Constants";
import "../style/videoCard.css"

const VideoCard = ({ info }) => {
  // console.log(info)
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle, channelId } = snippet;
 
  return (
    <div className=" videoCard p-2 m-2 sm:w-80 shadow-lg  sm:mx-4 mx-0 hover:bg-gray-100">
      <img
        className="rounded-lg"
        alt="thumbnails"
        src={thumbnails.medium.url}
      />
      <div className="flex">
        <div className="w-[15%] pt-5 ">
        <img
          className="rounded-full h-10 object-cover"
          src={thumbnails.medium.url}
          alt="user -icon"
        />
        </div>
        <div className="w-[85%] pl-3">
          <ul >
            <li className="title font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>
              {statistics?.viewCount / 1000000 >= 1
                ? `${(statistics?.viewCount / 1000000).toPrecision(2)}M views`
                : `${(statistics?.viewCount / 1000).toFixed(2)}K views`}{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
