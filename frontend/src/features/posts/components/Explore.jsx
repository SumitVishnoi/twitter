import React from "react";
import News from "./News";

const Explore = () => {
  return (
    <div className="py-3 px-10 flex flex-col gap-5">
      <div className="sticky top-3 bg-black">
        <input
          className="border border-zinc-500 py-3 px-8 w-full rounded-full"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="border border-zinc-500 rounded-xl p-2 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">Today's news</h2>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-5">
          <News />
          <News />
          <News />
          <News />
        </div>
      </div>

      <div className="border border-zinc-500 rounded-xl p-2 flex flex-col gap-5">
        <h2 className="font-bold text-xl">Trends</h2>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm text-zinc-600">Entertainment · Trending</p>
            <p className="font-bold text-blue-500 cursor-pointer">#Trending</p>
          </div>

          <div>
            <p className="text-sm text-zinc-600">Trending in India</p>
            <p className="font-bold text-blue-500 cursor-pointer">
              YOUNG FILMISTAN WORST PR
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-600">Trending in India</p>
            <p className="font-bold text-blue-500 cursor-pointer">Kangana</p>
          </div>

          <div>
            <p className="text-sm text-zinc-600">Sports · Trending</p>
            <p className="font-bold text-blue-500 cursor-pointer">Bernal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
