import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utill/appSlice";
import { YOU_TUBE_API } from "../Utill/Constants";
// import { Link } from 'react-router-dom'
import { NewSearch } from "../Utill/NewSearchSlice";
// import { cacheResult } from '../Utill/searchSlice'
import { CiSearch } from "react-icons/ci";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [showSuggetions, setShowsuggetions] = useState(false);
  const dispatch = useDispatch();
  const handeleSearchPage = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&regionCode=IN&order=viewCount&key=AIzaSyBL72bDjA77VV3eYrZQDg0UIXrpimFOGDU`
    );
    console.log(data);
    console.log("api call");
    const json = await data.json();
    // (json.items);
    dispatch(NewSearch(json.items));
  };

  // const searchCache = useSelector((store) => store.search)
  useEffect(() => {
    // console.log(searchQuery)
    //make api call afeter every key press
    // if the diff btw  two 2 api ki<200ms decline api call

    const timer = setTimeout(() => {
      // if (searchCache[searchQuery]) {
      // setSuggetions(searchCache[searchQuery])
      // } else {
      getSearchSuggetion();
      // }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggetion = async () => {
    const data = await fetch(YOU_TUBE_API + searchQuery);
    const json = await data.json();
    // console.log(json[1])

    setSuggetions(json[1]);
    // dispatchs(cacheResult({
    //     [searchQuery]: json[1],
    // }))
  };
  const toggeleMenuHandeler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col p-5 shadow-lg w-screen sticky top-0 bg-white z-10">
      <div className=" flex col-span-1">
        <img
          className="h-9 cursor-pointer"
          onClick={() => toggeleMenuHandeler()}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
          alt="menu"
        />
        <a href="#">
          <img
            className="h-10 mx-2 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVorOK17MJVQ05WaY76HxkUGmsoezHyIhxg&s"
            alt="logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-5  sm:flex hidden ">
        <div className="w-[80%]">
          <input
            type="text "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggetions(true)}
            onBlur={() => setShowsuggetions(false)}
            className="w-[80%]  border border-gray-400 p-2 rounded-l-full  px-5 py-2  "
          />
          <button
            className=" border border-gray-400 p-2 rounded-r-full bg-gray-100 relative top-[5.7px]"
            onClick={handeleSearchPage}
          >
            <CiSearch size="24px" />
          </button>
        </div>

        {showSuggetions && (
          <div className="fixed w-[32.9rem] bg-white py-2 px-2 shadow-lg rounded-lg border border-gray-100 ">
            <ul>
              {suggetions.map((s) => (
                <li key={s} className="  hover:bg-gray-100 py-2 px-2">
                  {" "}
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 z-40 ">
        <img
          className="h-9 absolute right-5  cursor-pointer"
          src="https://iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user -icon"
        />
      </div>
    </div>
  );
};

export default Head;
