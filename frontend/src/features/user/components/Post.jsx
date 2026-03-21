import React from "react";

const Post = ({ data }) => {
  return (
    <div className="space-y-4">
      <div className="p-4 md:w-50 h-60 border border-zinc-800 rounded-lg">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.imgUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default Post;
