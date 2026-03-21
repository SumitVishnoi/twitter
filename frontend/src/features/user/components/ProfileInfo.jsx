import React from "react";

const ProfileInfo = ({ user, postsCount }) => {
  return (
    <div>
      <div className="w-full h-40 md:h-52 bg-linear-to-r from-blue-500 to-purple-600 relative">

        <div className="absolute -bottom-12 left-4 md:left-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-black bg-zinc-700 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={user.profileImage}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mt-16 px-4 md:px-8">

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">{user.username}</h1>
            <p className="text-zinc-400">@{user.email}</p>
          </div>

          <button className="px-4 py-2 cursor-pointer border border-zinc-600 rounded-full hover:bg-zinc-800 transition">
            Edit Profile
          </button>
        </div>

        <p className="mt-3 text-sm md:text-base">{user.bio}</p>

        <div className="flex gap-6 mt-3 text-sm">
          <p>
            {/* <span className="font-bold">{user.following}</span>{" "} */}
            <span className="text-zinc-400">Following</span>
          </p>
          <p>
            {/* <span className="font-bold">{user.followers}</span>{" "} */}
            <span className="text-zinc-400">Followers</span>
          </p>
          <p>
            <span className="font-bold">{postsCount}</span>{" "}
            <span className="text-zinc-400">Posts</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
