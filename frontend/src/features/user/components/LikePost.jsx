import React from "react";

const LikePost = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      <div className="bg-zinc-800 h-60 w-50 rounded-lg overflow-hidden">
        <img className="w-full h-full object-cover" src={data.imgUrl} alt="" />
      </div>
    </div>
  );
};

export default LikePost;
