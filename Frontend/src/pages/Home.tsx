import { Appbar } from "@/components/Appbar";
import { Blogs } from "@/components/blogs.tsx";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NotPage } from "./pagenotfound";
import { Createblogbutton } from "@/components/Createblogbutton";

type UserProps = {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  password?: string;
};

async function fetchBlogData() {
  const response = await axios.get("https://blogit-4lvo.onrender.com/api/v1/blog/blog", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });

  return response.data;
}

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogData,
  });

  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <>
        <NotPage />
      </>
    );
  }

  if (isLoading) {
    return (
      <div>
        <Appbar />
        <div className="mt-20 px-6 space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="p-4 border rounded-md ml-20 shadow-sm w-200"
            >
              <Skeleton height={25} width={50} />
              <div>
                <Skeleton height={25} width={20} style={{ opacity: 1.5 }} />
              </div>
              <Skeleton count={3} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <Appbar />
        <p className="text-red-600 mt-20 px-6">
          Error: {(error as any).message}
        </p>
      </div>
    );
  }

  const blogdata = data.blog;
  const userdata: UserProps = data.user;
  if (blogdata.length == 0) {
    return (
      <div>
        <div>
          <Appbar />
        </div>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-md text-center border border-gray-200 dark:border-gray-700">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No Blogs"
              className="w-24 h-24 mx-auto mb-4 opacity-80"
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              No Blogs Yet
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              It looks like you haven't written any blogs yet. Start sharing
              your thoughts and inspire the world!
            </p>
            <div className=" flex justify-center bg-gray-400 w-40 ml-28 rounded-2xl p-1">
              <Createblogbutton/>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="mt-22 space-y-6 px-6 ml-20">
        {blogdata.map((b: any) => (
          <Blogs key={b.id} blog={b} user={userdata} />
        ))}
      </div>
    </div>
  );
}
