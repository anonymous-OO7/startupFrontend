"use client";
import { useState } from "react";
import { checkIsLiked } from "@/lib/utils";
import Image from "next/image";
import Save from "../../assets/icons/save.svg";
import Saved from "../../assets/icons/saved.svg";
import Upvote from "../../assets/icons/upvote.svg";
import ToUpvote from "../../assets/icons/toupvote.svg";

const PostStats = ({ userId = "NA" }) => {
  // const likesList = post.likes.map((user: Models.Document) => user.$id);

  const [likes, setLikes] = useState<string[]>(["like1"]);
  const [isSaved, setIsSaved] = useState(false);

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
    <div className={`flex justify-between items-center z-20 w-full`}>
      <div className="flex gap-2 mr-5">
        <Image
          src={checkIsLiked(likes, userId) ? Upvote : ToUpvote}
          alt="like"
          width={20}
          height={20}
          onClick={(e) => handleLikePost(e)}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
        <Image
          src={checkIsLiked(likes, userId) ? ToUpvote : Upvote}
          alt="like"
          width={20}
          height={20}
          onClick={(e) => handleLikePost(e)}
          className="cursor-pointer transform rotate-180"
        />
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
  );
};

export default PostStats;
