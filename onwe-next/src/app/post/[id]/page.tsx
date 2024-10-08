"use client";

import DiaglogComment from "@/components/post_component/Dialog_component/DiaglogComment";
import DialogBox from "@/components/post_component/Dialog_component/DialogBox";
import DialogImage from "@/components/post_component/Dialog_component/DialogImage";
import { cn } from "@/lib/utils";
import { PostsProps } from "@/types/type";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { MessageSquare } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {

    const {getToken} = useAuth();
    const postid =  useParams().id;
    const [post, setPost] = useState<PostsProps>({} as PostsProps)
    
    useEffect(() => {
        const getPost = async () => {
            try {
                const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postid}`
                , {
                    headers: {
                        Authorization: `Bearer ${await getToken()}`,
                        "ngrok-skip-browser-warning": "69420",
                    },
                }
                );
                console.log(data)
                setPost(data as PostsProps)
            } catch (error) {
                console.log(error)
            }
        }
         getPost()
    }, [getToken,postid])


    return <div className="flex justify-center bg-white items-center text-black h-[80vh]">
           {post && <DialogBox post={post} description={post.description}/>}
           
            post
    </div>;
};

export default Page;
