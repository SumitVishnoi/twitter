import React from "react";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

const Feed = ({post, user}) => {
  return (
    <div className="flex flex-col gap-3 py-5 px-5 border border-t-0 border-zinc-500 hover:bg-zinc-900 ">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1722322426803-101270837197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <h1 className="text-white font-semibold text-lg">{user.username}</h1>
      </div>

      {/* caption */}
      <div>
        <p className="line-clamp-5">{post.caption}</p>
      </div>

      {/* post */}
      <div className="h-[70vh] rounded-md overflow-hidden">
        <img
          className="h-full object-cover w-full"
          src={post.imgUrl}
          alt="post image"
        />
      </div>

      {/* icons */}
      <div className="flex items-center justify-between gap-6 text-gray-500">
        <div className="flex items-center gap-2">
          <FaRegComment className="w-5 h-5" /> 
          <span>0</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRetweet className="w-6 h-7" />
          <span>0</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHeart className="w-5 h-5" />
          <span>0</span>
        </div>
        <div className="flex items-center gap-2">
          <IoStatsChart className="w-5 h-5" />
          <span>0</span>
        </div>
        <div className="flex items-center gap-2">
            <MdOutlineBookmarkBorder className="w-6 h-7" />
          <IoShareSocialOutline className="w-6 h-7" />
        </div>
      </div>
    </div>
  );
};

export default Feed;
