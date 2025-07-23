
import { Appbar } from "@/components/Appbar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Blogscom } from "@/components/blogscommunity";
import { NotPage } from "./pagenotfound";


async function fetchBlogData() {
  const response = await axios.get("http://localhost:3001/api/v1/blog/blogss", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });

  return response.data;
}

export default function Community() {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogData,
  });
  const token=localStorage.getItem("token");
  if(!token){
    return(<>
    <NotPage/>
    </>)
  }

  if (isLoading) {
  return (
    <div>
      <Appbar />
      <div className="mt-20 px-6 space-y-6 animate-pulse">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="ml-20 w-[90%] max-w-4xl p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"
          >
            {/* Title + Avatar row */}
            <div className="flex items-center space-x-4 mb-4">
              <Skeleton circle width={40} height={40} />
              <div className="flex-1 space-y-2">
                <Skeleton width={120} height={16} />
                <Skeleton width={80} height={12} />
              </div>
            </div>

            {/* Blog title */}
            <Skeleton height={24} width={`80%`} className="mb-4 rounded" />

            {/* Blog content lines */}
            <div className="space-y-2">
              <Skeleton count={3} height={14} />
              <Skeleton width={`60%`} height={14} />
            </div>
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
        <p className="text-red-600 mt-20 px-6">Error: {(error as any).message}</p>
      </div>
    );
  }

  const blogdata = data.blog;


  return (
    <div>
      <Appbar />
      <div className="mt-22 space-y-6 px-6 ml-20"> 
        {blogdata.map((b: any) => (
          <Blogscom key={b.id} blog={b} user={b.user}  />
        ))}
      </div>
    </div>
  );
}
