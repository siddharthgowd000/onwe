"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";

import DiaglogComment from "./DiaglogComment";

import { cn } from "@/lib/utils";
import { PostsProps } from "@/types/type";
import { MessageSquare } from "lucide-react";
import PostImage from "../PostImage";

interface DialogBoxProps {
  imageUrl?: string;
  description?: string;
  post: PostsProps;
  className?: string;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  imageUrl,
  description,
  post,
  className,
}) => {
  const base64Prefix = "data:image/png;base64,";

  return (
    <Dialog>
      {imageUrl ? (
        <DialogTrigger className={cn("relative  w-full h-full", className)}>
          <Image
            src={`${base64Prefix}${imageUrl}`}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg object-scale-down"
            loading="lazy"
            unoptimized={true}
            blurDataURL={`${base64Prefix}${imageUrl}`}
          />
        </DialogTrigger>
      ) : (
        <DialogTrigger
          className={cn(
            "flex  justify-center items-center z-50 ",
            description ? "bg-[#b5e2fa]" : ""
          )}
        >
          {description ? (
            <div className="text-xl">{description}</div>
          ) : (
            <MessageSquare strokeWidth={1.4} size={24} />
          )}
        </DialogTrigger>
      )}
      <DialogTitle className="hidden">Are you absolutely sure?</DialogTitle>
      <DialogContent
        // className={`flex  h-[95vh] min-w-[28rem]   flex-col sm:flex-row justify-center items-center
        //             sm:rounded-3xl  bg-transparent bg-white  sm:p-0 ${
        //               post?.media?.length > 0 ? "sm:min-w-[70vw]" : ""
        //             }`}
        className={` h-[95vh]  gap-0   sm:flex-row justify-center items-center border-none
                      bg-transparent   sm:p-0 rounded-none ${
                        post?.media?.length > 0
                          ? "sm:min-w-[70vw] grid grid-cols-5 "
                          : "w-96"
                      }`}
      >
        {post && post.media && (
          <div className="col-span-3">
            <PostImage
              images={post?.media}
              className="flex flex-grow h-[95vh] relative bg-black"
            />
          </div>
        )}
        {/* {post && post.media && post.media.length > 1 ? (
          <div className="col-span-3">
            <PostImage
              images={post?.media}
              className="flex flex-grow h-[95vh] relative bg-black"
            />
          </div>
        ) : (
          <div className="hidden sm:flex flex-grow col-span-3   w-full h-full ">
            <DialogImage imageUrl={post?.media[0]} />
          </div>
        )} */}

        <div className="flex flex-grow w-full col-span-2  h-[95vh] bg-white overflow-y-auto min-w-96">
          <DiaglogComment post={post} />
        </div>

        {/* {post?.media?.length > 0 && (
          <div className="hidden sm:flex w-[70%] h-full justify-center items-end p-0 relative bg-transparent bg-red-100 ">
            <DialogImage imageUrl={post?.media[0]} />
          </div>
        )}

        <div className="p-3 flex-grow  rounded-3xl sm:w-[30rem]  h-full  overflow-y-auto bg-white">
          <DiaglogComment />
        </div> */}
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
