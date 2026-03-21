import React, { useEffect, useState } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import ProfileInfo from "../components/ProfileInfo";
import SavePosts from "../components/SavePost";
import { usePost } from "../../posts/hooks/usePost";
import Post from "../components/Post";
import LikePost from "../components/LikePost";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const { loading, user, handleGetMe } = useAuth();
  const {
    saved,
    handleGetSavedPosts,
    post,
    handleGetPost,
    handleGetLikePosts,
    liked,
  } = usePost();

  const getUser = async () => {
    await handleGetMe();
  };

  const getSavedPosts = async () => {
    await handleGetSavedPosts();
  };

  const getPosts = async () => {
    await handleGetPost();
  };

  const getLikedPosts = async () => {
    await handleGetLikePosts();
  };

  useEffect(() => {
    getUser();
    (getSavedPosts(), getPosts(), getLikedPosts());
  }, []);

  if (loading || !user || !saved || !post || !liked) {
    return <main>loading...</main>;
  }

  const postsCount = post.length;

  return (
    <div className="w-full min-h-screen text-white">
      <ProfileInfo user={user} postsCount={postsCount} />

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
