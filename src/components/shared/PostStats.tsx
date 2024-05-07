"use client";
import { useState } from "react";
import { checkIsLiked } from "@/lib/utils";
import Image from "next/image";
import Save from "../../assets/icons/save.svg";
import Saved from "../../assets/icons/saved.svg";
import Upvote from "../../assets/icons/upvote.svg";
import ToUpvote from "../../assets/icons/toupvote.svg";
import Comment from "../../assets/reply.svg";
import ThreadCard from "../cards/ThreadCard";

const PostStats = ({ userId = "NA" }) => {
  // const likesList = post.likes.map((user: Models.Document) => user.$id);
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

  const [likes, setLikes] = useState<string[]>(["like1"]);
  const [isSaved, setIsSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLikePost = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    e.stopPropagation();

    let likesArray = [...likes];

    if (likesArray.includes(userId)) {
      likesArray = likesArray.filter((Id) => Id !== userId);
    } else {
      likesArray.push(userId);
    }

    setLikes(likesArray);
  };

  const handleSavePost = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div>
      <div className={`flex justify-between items-center z-20 w-full `}>
        <div className="flex gap-2 mr-5 ">
          <Image
            src={checkIsLiked(likes, userId) ? Upvote : ToUpvote}
            alt="like"
            width={20}
            height={20}
            onClick={(e) => handleLikePost(e)}
            className="cursor-pointer"
          />
          <p className="font-poppins font-light text-black small-medium lg:base-medium">
            {likes.length}
          </p>
          <Image
            src={checkIsLiked(likes, userId) ? ToUpvote : Upvote}
            alt="like"
            width={20}
            height={20}
            onClick={(e) => handleLikePost(e)}
            className="cursor-pointer transform rotate-180"
          />
          <div className="flex gap-4 ml-5">
            <Image
              src={Comment}
              alt="share"
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={() => {
                setShowComments(!showComments);
              }}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Image
            src={isSaved ? Saved : Save}
            alt="share"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => handleSavePost()}
          />
        </div>
      </div>
      {showComments ? (
        <section className=" mt-9 flex flex-col gap-10">
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
      ) : null}
    </div>
  );
};

export default PostStats;
