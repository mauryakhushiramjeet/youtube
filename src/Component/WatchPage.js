import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utill/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";
import VideoInfo from "./videoInfo";
import { API_KEY } from "../Utill/Constants";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState([]);

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    fetchData();
  }, [dispatch]);
  const fetchData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        searchParams.get("v") +
        "&key=" +
        API_KEY
    );
    const json = await data.json();
    // console.log(json?.items[0])
    // console.log("sub", json.items)
    setVideoInfo(json?.items[0]);
  };
  if (videoInfo.length === 0) return <h1>loading</h1>;
  const { snippet, statistics } = videoInfo;

  return (
    <div className=" flex flex-col w-full">
      <div className="px-5 flex ">
        <div className=" w-[100%] ">
          <iframe
            width="100%"
            height="800"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
      <div className="details pt-5 px-3 ">
          <div>
            <h1 className="font-semibold  text-2xl  whitespace-nowrap overflow-hidden text-ellipsis ">
              {videoInfo?.snippet?.localized?.title}
            </h1>
          </div>
        </div>


      <div className=" w-[100%] h-[500px]">
      <VideoInfo videoInfo={videoInfo} />

        <CommentList />
      </div>
    </div>
  );
};

export default WatchPage;
