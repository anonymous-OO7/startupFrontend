"use client";

import { GetAllPosts, GetAllUserData } from "@/apis";
// pages/dashboard.tsx
import PostBlock from "@/components/pages/home/PostBlock";
// import { posts } from "@/constants";
import useApi from "@/hooks/useApi";
import useTokenCheck from "@/hooks/useTokenCheck";
import React, { useEffect } from "react";

const Home: React.FC = () => {
  useTokenCheck();
  const { makeApiCall } = useApi();
  const [loading, setLoading] = React.useState(false); // eslint-disable-line
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    makeApiCall(GetAllUserData())
      .then((response) => {
        if (response !== undefined) {
          console.log("ALL USER DATA FETCHED", response);
          localStorage.setItem("user_data", JSON.stringify(response));
        }
      })
      .catch((error) => console.error(error, "error in fetching user"))
      .finally(() => {
        setLoading(false);
      });
  }, [makeApiCall]);

  //fetch all posts
  useEffect(() => {
    setLoading(true);
    makeApiCall(GetAllPosts())
      .then((response) => {
        if (response !== undefined) {
          console.log("ALL USER posts", response);
          setPosts(response); // Assuming response.data contains the array of posts
        }
      })
      .catch((error) => console.error(error, "error in fetching user posts"))
      .finally(() => {
        setLoading(false);
      });
  }, [makeApiCall]);

  return (
    <div>
      <div className="container h-screen mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          {/* <div className="w-[50%]">
            <Link href="/submit">
              <button className="rounded-full py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Create Post
              </button>
            </Link>
          </div> */}

          <h1 className="text-2xl text-black font-semibold mb-4 font-poppins">
            Whats happening
          </h1>
        </div>

        <div className="">
          {/* eslint-disable-next-line */}
          {posts?.map((post: any) => <PostBlock key={post?.id} post={post} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
