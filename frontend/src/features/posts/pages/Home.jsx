import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Explore from "../components/Explore";
import { usePost } from "../hooks/usePost";
import Feed from "../components/Feed";

const Home = () => {
  const [data, setData] = useState(true);

  const { loading, feed, handleGetFeed } = usePost();

  const getFeed = async () => {
    await handleGetFeed();
  };

  useEffect(() => {
    getFeed();
  }, []);

    if (loading || !feed) {
    return (
      <main>
        <h1>loading...</h1>
      </main>
    );
  }

  console.log(feed)
  return (
    <div className="grid grid-cols-[1fr_2fr_1.5fr]">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="border border-t-0 border-zinc-500">
        <div className="flex justify-between items-center border-0 border-b border-zinc-900 sticky top-0 bg-[#16161641] backdrop-blur-2xl shadow-lg">
          <h2
            onClick={() => {
              setData(true);
            }}
            className={`cursor-pointer w-1/2 text-center hover:bg-zinc-900 py-4 ${data && "border-b-2 border-blue-500 font-medium text-lg transition-all linear duration-75"}`}
          >
            For you
          </h2>
          <h2
            onClick={() => {
              setData(false);
            }}
            className={`cursor-pointer w-1/2 text-center hover:bg-zinc-900 py-4 ${!data && "border-b-2 border-blue-500 font-medium text-lg transition-all linear duration-75"}`}
          >
            Following
          </h2>
        </div>
  
          {data &&
          <div className="overflow-auto h-screen">
            {feed.map((post)=> (
            <Feed user={post.user} post={post}/>
          ))}
          </div>
          }
      </div>
      <div className="hidden lg:flex min-h-screen">
        <Explore />
      </div>
    </div>
  );
};

export default Home;
