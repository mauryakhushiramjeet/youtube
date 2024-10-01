import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiUserRectangleLight } from "react-icons/pi";
import { LuHistory } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { AiOutlineBulb } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { BsFire } from "react-icons/bs";
import { PiFilmSlateBold } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { GoTrophy } from "react-icons/go";
import { MdOutlinePodcasts } from "react-icons/md";
import { GiHanger } from "react-icons/gi";
import { IoMdWifi } from "react-icons/io";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="py-3 w-48  pl-2 shadow-xl absolute bg-white z-0">
      <ul className=" border-b  border-black font-medium w-[170px] text-[16px]">
        <Link to={"/"}>
          {" "}
          <li className=" m-2  flex items-center gap-4 ">
            <AiFillHome size="24px" /> Home
          </li>
        </Link>
        <li className=" m-2 my-3 flex items-center gap-4 ">
          <SiYoutubeshorts size="24px" /> Shorts
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <MdOutlineSubscriptions size="24px" /> Subscription
        </li>
      </ul>
      <h1 className=" font-bold pt-5 pl-3">You</h1>
      <ul className="border-b  border-black font-medium w-[170px] text-[16px]">
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <  PiUserRectangleLight size="24px" /> Your Channel
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <LuHistory size="24px" /> History
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <CgPlayList size="24px" /> Playlist
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <GoVideo size="24px" /> Your Videos
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <AiOutlineBulb size="24px" /> Your Courses
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <MdOutlineWatchLater size="24px" />Watch Later
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <BiLike size="24px" />Liked videos
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <LiaDownloadSolid size="24px" /> Downloads
        </li>
      </ul>

      <h1 className=" font-bold pt-5 pl-3">Explore</h1>
      <ul className="border-b  border-black font-medium w-[170px] text-[16px]">
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <  BsFire size="24px" />Trending
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <RiShoppingBag4Line size="24px" /> Shopping
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <IoMusicalNoteOutline size="24px" /> Music
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <PiFilmSlateBold size="24px" /> Films
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <IoMdWifi size="24px" /> Live
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <SiYoutubegaming size="24px" /> Gaming
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <BiNews size="24px" /> News
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <GoTrophy size="24px" /> Sports
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <AiOutlineBulb size="24px" /> Cources
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <GiHanger size="24px" /> Fashion & beauty
        </li>
        <li className=" m-2  my-3 flex items-center gap-4 ">
          <MdOutlinePodcasts size="24px" />Podcarst
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
