import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import ProfileInfo from "../components/ProfileInfo";
import SavePosts from "../components/SavePost";
import { usePost } from "../../posts/hooks/usePost";
import Post from "../components/Post";
import LikePost from "../components/LikePost";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router";

const Profile = () => {
const [activeTab, setActiveTab] = useState("posts");
const [dataLoaded, setDataLoaded] = useState(false);

const navigate = useNavigate()

const { loading, user, handleGetMe } = useAuth();

const {
  saved,
  handleGetSavedPosts,
  post,
  handleGetPost,
  handleGetLikePosts,
  liked,
} = usePost();

const {
  followers,
  following,
  handleGetFollowers,
  handleGetFollowing,
} = useUser();


//Load user once
useEffect(() => {
  handleGetMe();
}, []);


//Load all data AFTER user is available
useEffect(() => {
  if (!user?.username || dataLoaded) return;

  const fetchAllData = async () => {
    try {
      await Promise.all([
        handleGetSavedPosts(),
        handleGetPost(),
        handleGetLikePosts(),
        handleGetFollowers({ username: user.username }),
        handleGetFollowing({ username: user.username }),
      ]);

      setDataLoaded(true); // prevent refetch
    } catch (error) {
      console.error("Error loading profile data:", error);
    }
  };

  fetchAllData();
}, [user, dataLoaded]);


//Better loading condition
if (loading || !user || !dataLoaded) {
  return <main>loading...</main>;
}


//Safe counts
const postsCount = post?.length || 0;
const followersCount = followers?.length || 0;
const followingCount = following?.length || 0;


  return (
    <div className="w-full min-h-screen text-white relative">
      <svg onClick={()=> navigate("/")} className="w-10 h-10 cursor-pointer absolute top-2 left-2 z-10 bg-zinc-600 rounded-full p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
      <ProfileInfo user={user} postsCount={postsCount} followersCount={followersCount} followingCount={followingCount} />

      <div className="mt-6 border-b border-zinc-800 flex justify-around text-sm md:text-base">
        {["posts", "media", "likes"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 w-full text-center capitalize ${
              activeTab === tab
                ? "border-b-2 border-blue-500 font-semibold"
                : "text-zinc-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 md:p-6">
        {activeTab === "posts" && (
          <div>
            {post.map((data, idx) => (
              <div key={idx}>
                <Post data={data} />
              </div>
            ))}
          </div>
        )}

        {activeTab === "media" && (
          <div>
            {saved.map((post, idx) => (
              <div key={idx}>
                <SavePosts post={post.post} />
              </div>
            ))}
          </div>
        )}

        {activeTab === "likes" && (
          <div>
            {liked.map((data, idx) => (
              <div key={idx}>
                <LikePost data={data.post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
