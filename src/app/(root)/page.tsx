// pages/dashboard.tsx
import PostBlock from "@/components/pages/home/PostBlock";
import { posts } from "@/constants";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <div className="container h-screen mx-auto py-10">
        <div className="bg-gray-700 w-full">
          <button>Submit</button>
        </div>
        <h1 className="text-2xl font-semibold mb-4 font-poppins">
          Whats happening
        </h1>
        <div className="">
          {posts.map((post) => (
            <PostBlock key={post.$id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
