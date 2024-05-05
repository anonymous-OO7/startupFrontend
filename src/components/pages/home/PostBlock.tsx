import Link from "next/link";
import { multiFormatDateString } from "@/lib/utils";
import PostStats from "@/components/shared/PostStats";

// type PostCardProps = {
//   post: Models.Document;
// };

type PostCardProps = {
  post: {
    creator: {
      $id: string; // Assuming $id is a string representing the creator's ID
      name: string; // Assuming name is a string representing the creator's name
      imageUrl?: string; // Optional string representing the URL of the creator's image
    };
    $createdAt: string; // Assuming $createdAt is a string representing the creation date of the post
    location: string; // Assuming location is a string representing the location of the post
    $id: string; // Assuming $id is a string representing the post ID
    caption: string; // Assuming caption is a string representing the caption of the post
    tags: string[]; // Assuming tags is an array of strings representing the tags of the post
    imageUrl?: string; // Optional string representing the URL of the post image
  };
};

const PostBlock = ({ post }: PostCardProps) => {
  const user = { id: "x" };

  if (!post.creator) return;

  return (
    <div className=" flex justify-center mb-5">
      <div className="bg-dark-2 rounded-3xl border border-dark-4 p-5 lg:p-7 w-full max-w-screen-sm bg-neutral-50">
        <div className="flex-between">
          <div className="flex items-center gap-3 ">
            <Link href={`/profile/${post.creator.$id}`}>
              <img // eslint-disable-line
                src={
                  post.creator?.imageUrl ||
                  "/assets/icons/profile-placeholder.svg"
                }
                alt="creator"
                className="w-12 lg:h-12 rounded-full"
              />
            </Link>

            <div className="flex flex-col">
              <p className="text-[16px] text-black font-poppins font-medium leading-[140%] lg:body-bold text-light-1">
                {post.creator.name}
              </p>
              <div className="flex justify-center items-center gap-2 text-light-3">
                <p className="text-[12px] text-black font-semibold font-poppins leading-[140%] lg:text-[14px] lg:font-normal lg:leading-[140%] ">
                  {multiFormatDateString(post.$createdAt)}
                </p>
                •
                <p className="text-[12px] text-black font-semibold font-poppins leading-[140%] lg:text-[14px] lg:font-normal lg:leading-[140%]">
                  {post.location}
                </p>
              </div>
            </div>
          </div>

          <Link
            href={`/update-post/${post.$id}`}
            className={`${user.id !== post.creator.$id && "hidden"}`}
          >
            <img // eslint-disable-line
              src={"/assets/icons/edit.svg"}
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
        </div>

        <Link href={`/posts/${post.$id}`}>
          <div className="text-[14px] font-poppins font-medium leading-[140%] lg:text-[16px] lg:font-medium lg:leading-[140%] py-5">
            <p className="text-black font-semibold font-poppins">
              {post.caption}
            </p>
            <ul className="flex font-semibold font-poppins  text-sm font-poppins gap-1 mt-2">
              {/* {post.tags.map((tag: string, index: string) => (
              <li key={`${tag}${index}`} className="text-light-3 small-regular">
                #{tag}
              </li>
            ))} */}
              #tags
            </ul>
          </div>

          <img // eslint-disable-line
            src={post.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt="post image"
            className=" h-64 xs:h-[350px] lg:h-[400px] w-full rounded-[24px] object-cover mb-5"
          />
        </Link>

        <PostStats />
      </div>
    </div>
  );
};

export default PostBlock;
