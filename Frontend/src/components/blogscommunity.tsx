import { useState } from "react";
import  { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";

type BlogProps = {
  blog: {
    title: string;
    id:string;
descprition: string;
    date: string;
    imageurl?: string;
  };
  user: {
    firstname: string;
    lastname: string;
    username: string;
  } | null;
};

export function Blogscom({ blog, user }: BlogProps) {
  if (!user) return null;
  const navigate=useNavigate();


  const [count,setcount]=useState(10)
  
const imageurl="https://kickervideo.com/wp-content/themes/kickervideoTheme/images/blog_default.png"
  return (
    <div className="flex justify-between items-start w-100 p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f0f0f] shadow-sm hover:shadow-md transition-all mb-6 md:w-200">
      {/* Left section */}
      <div className="flex-1 pr-4">
        {/* Author */}
        <div className="flex items-center gap-3 mb-2">
          <div className="h-9 w-9 rounded-full bg-indigo-500 text-white flex items-center justify-center font-semibold text-sm uppercase">
            {user.firstname[0]}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
              {user.firstname} {user.lastname}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
  {user.username}.blogzee.dev • {formatDistanceToNow(new Date(blog.date), { addSuffix: true })}
</p>
          </div>
        </div>

        {/* Title */}
        <button onClick={()=>{
          navigate("/blog?id="+blog.id+"&name="+user.username);
        }
        } className="text-lg text-left md:text-xl font-bold text-gray-900 dark:text-white mb-1 hover:text-indigo-600 cursor-pointer">
          {blog.title}
        </button>

        {/* Content preview */}
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
          {blog.descprition}
        </p>

        {/* Likes and Tag */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <button onClick={() => setcount((c)=>c+1)}>❤︎</button>

          <span>{count} likes</span>
          <span className="px-2 py-1 rounded-full text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
            virtual assistant
          </span>
          <button className="ml-auto hover:text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Image */}
      
        <div className="w-28 h-28 min-w-[112px]">
          <img
            src={blog.imageurl?blog.imageurl:imageurl}
            alt="cover"
            className="object-center rounded-lg w-full h-full border border-gray-200 dark:border-gray-700"
          />
          
        </div>
      
    </div>
  );
}

