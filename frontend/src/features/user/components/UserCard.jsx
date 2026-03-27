import React from "react";

function UserCard({ user, onToggleFollow }) {
  return (
    <div className="flex items-center justify-between p-3 border-b">
      <div className="flex items-center gap-3">
        <img
          src="https://ik.imagekit.io/coders11/twitter/Test_N62kt0v4b"
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium">username</span>
      </div>

      {/* <button
        onClick={() => onToggleFollow(user)}
        className={`px-3 py-1 rounded ${
          user.isFollowing ? "bg-red-500" : "bg-blue-500"
        } text-white`}
      >
        {user.isFollowing ? "Unfollow" : "Follow"}
      </button> */}
    </div>
  );
}

export default UserCard;