import { Link } from "react-router-dom";


export function NotPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
        <div className="text-center">
          <div className="text-[100px] font-bold flex justify-center items-center space-x-4">
            <span className="text-gray-700">4</span>
            <div className="w-20 h-20 border-4 border-black rounded-full flex items-center justify-center relative">
              <div className="absolute w-6 h-6 bg-blue-500 rounded-full bottom-2"></div>
              <div className="absolute w-2 h-2 bg-black rounded-full top-4 left-4 text-2xl"></div>
            </div>
            <span className="text-gray-700">4</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 mt-4">
            Sorry, we can’t find that page
          </h1>
          <p className="text-gray-500 mt-2">
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 text-blue-600 hover:underline transition"
          >
            Go Back to Home →
          </Link>
        </div>
      </div>
    </div>
  );
}
