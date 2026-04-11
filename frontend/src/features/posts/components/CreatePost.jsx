import React, { useState } from "react";
import { Heart, MessageCircle, Share2, ImagePlus, Moon, Sun } from "lucide-react";

export default function CreatePost() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "John Doe",
      content: "Enjoying the sunset 🌅",
      image: "https://source.unsplash.com/random/800x400?nature",
      likes: 12,
      comments: 4,
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const handlePost = () => {
    if (!newPost) return;
    const post = {
      id: Date.now(),
      user: "You",
      content: newPost,
      image,
      likes: 0,
      comments: 0,
    };
    setPosts([post, ...posts]);
    setNewPost("");
    setImage("");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex justify-center transition-colors duration-300">
        <div className="w-full max-w-2xl space-y-6">

          {/* Create Post */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 transition">
            <textarea
              placeholder="What's on your mind?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="w-full h-50 bg-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-none outline-none resize-none text-lg"
            />

            

            <div className="flex justify-between items-center mt-3">
              <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-500">
                <ImagePlus size={20} /> Add Photo
              </button>
              <button
                onClick={handlePost}
                className="bg-blue-500 text-white px-4 py-1 rounded-xl hover:bg-blue-600"
              >
                Post
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          {/* {posts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow transition">
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 dark:text-white">{post.user}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{post.content}</p>
              </div>

              {post.image && (
                <img
                  src={post.image}
                  alt="post"
                  className="w-full h-80 object-cover"
                />
              )}

              <div className="flex justify-around p-3 border-t border-gray-200 dark:border-gray-700">
                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-500">
                  <Heart size={20} /> {post.likes}
                </button>
                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500">
                  <MessageCircle size={20} /> {post.comments}
                </button>
                <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-500">
                  <Share2 size={20} /> Share
                </button>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}