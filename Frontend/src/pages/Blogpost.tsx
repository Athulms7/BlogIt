
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { BlogSidebar } from "../components/blogside";
import { Buttons } from "@/components/button";
import { toast } from "sonner";
import { NotPage } from "./pagenotfound";
import  { formatDistanceToNow } from "date-fns";

export function BlogPost() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  async function fetchBlog() {
     if (!id) {
    console.error("No ID found in URL");
    setLoading(false);
    return;
  }
    try {
      const resp = await axios.post("https://blogit-4lvo.onrender.com/api/v1/blog/blogs", {
        id:parseInt(id)
      },{
        headers:{
            authorization:localStorage.getItem("token")
        }
      });
      setBlog(resp.data.blog);
    } catch (err) {
      console.error("Failed to fetch blog:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) fetchBlog();
  }, [id]);
  const token=localStorage.getItem("token");
    if(!token){
      return(<>
      <NotPage/>
      </>)
    }
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!blog) return <p className="text-center mt-10 text-red-600">Blog not found.</p>;

  return (
    <div className="flex">
    <div className="max-w-4xl mx-auto p-6 dark:bg-gray-900 rounded-xl shadow-md mt-10 bg-gray-50">
      {/* Author and Meta */}
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
        <img
          src={blog?.user?.avatar || "https://i.pravatar.cc/40"}
          alt="Author"
          className="w-8 h-8 rounded-full"
        />
        <span>{blog?.user?.username || "Admin"}</span>
        <span>· {new Date(blog.date).toDateString()}</span>
        <span>· posted {formatDistanceToNow(new Date(blog.date), { addSuffix: true })}</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
        {blog.title}
      </h1>

      {/* Subtitle */}
      <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
        {blog.subtitle || "A short and enticing subtitle to hook the reader."}
      </p>

      {/* Image */}
      <img
        src={blog.imageurl?blog.imageurl:"https://kickervideo.com/wp-content/themes/kickervideoTheme/images/blog_default.png"}
        alt={blog.title}
        className="w-full mt-6 rounded-lg object-cover"
      />

      {/* Content */}
      <div className="mt-6 text-gray-800 dark:text-gray-200 leading-7 space-y-4">
        <p>{blog.descprition}</p>

        <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600 dark:text-gray-400">
          “{blog.quote || "Blogging is a conversation, not a code."}”
        </blockquote>

        <p>
          {blog.extra ||
            "Use this space to dive deeper into your topic, share your thoughts, and keep your readers engaged."}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-6 text-sm text-gray-500">
        {blog.tags?.map((tag: string, idx: number) => (
          <span key={idx} className="mr-2 px-2 py-1 bg-gray-100 rounded-full">
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer - Like, Share, Views */}
      <div className="mt-6 flex justify-between text-gray-600 dark:text-gray-400 text-sm">
        <div className="flex items-center gap-4">
          <span>❤️ {blog.likes || 0}</span>
          <span>👁️ {blog.views || 0}</span>
        </div>
        <div className="space-x-3">
          <Link to="#">🔗</Link>
         
          <Link to="#">📘</Link>
        </div>
      </div>
       <div className="bg-white m-3 p-2 text-sm text-left font-sans font-semibold rounded-md dark:bg-gray-300 ">
     
      <div className="bg-white dark:bg-gray-300 p-1 flex-row ">
        <input
          type={"text"}
          
          className="h-9 w-70 p-1 mb-3 hover:bg-gray-100 rounded dark:text-black  border-b-2 border-gray-400 focus:outline-0"
          placeholder={"comment"}
        />
        
        
      </div>
      <Buttons label={"Comment"} onclick={()=>{
            toast.success("Comment send...")
            
        }}/>
    </div>
    </div>
    <BlogSidebar/>
    </div>
  );
}
