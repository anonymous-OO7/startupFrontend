// pages/dashboard.tsx
import ThreadCard from "@/components/cards/ThreadCard";
import PostBlock from "@/components/pages/home/PostBlock";
import { posts } from "@/constants";
import React from "react";

const Home: React.FC = () => {
  // Dummy API response
  const result = {
    posts: [
      {
        _id: "post1",
        parentId: null,
        text: "This is a sample post.",
        author: {
          name: "John Doe",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXtaVmOb4HrB308wM_c3Nk8hHx2ek5XqRpKQ&s",
          id: "author123",
        },
        community: {
          id: "community123",
          name: "Sample Community",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ixVFEPim519RhOyS0gmudwl0LJLGOyaSFA&s",
        },
        createdAt: "2024-03-07T12:00:00Z",
        children: [
          {
            _id: "comment1",
            parentId: "post1",
            text: "This is a comment.",
            author: {
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopJ_-xFVPkHg66dbAjpMBNHOyIBNbMpF9IA&s",
            },
            community: null,
            createdAt: "2024-03-07T12:30:00Z",
            children: [],
          },
        ],
      },
      // Add more posts as needed
    ],
  };

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

          <h1 className="text-2xl font-semibold mb-4 font-poppins">
            Whats happening
          </h1>
        </div>

        <div className="">
          {posts.map((post) => (
            <PostBlock key={post.$id} post={post} />
          ))}
        </div>

        <section className="mt-9 flex flex-col gap-10">
          {result.posts.length === 0 ? (
            <p className="no-result">No threads found</p>
          ) : (
            <>
              {result.posts.map((post) => (
                <ThreadCard
                  key={post._id}
                  id={post._id}
                  currentUserId={"abc"}
                  parentId={post.parentId}
                  content={post.text}
                  author={post.author}
                  community={post.community}
                  createdAt={post.createdAt}
                  comments={post.children}
                />
              ))}
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
