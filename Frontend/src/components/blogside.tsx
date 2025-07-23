import { useState } from "react";
 export function BlogSidebar() {
     const [expanded, setExpanded] = useState(false);

  const shortText =
    "Thanks for stopping by and taking the time to read this blog!";
  const fullText = `Thanks for stopping by and taking the time to read this blog! Your support means the world to me. Whether you're here for inspiration, insights, or just a moment of curiosity — I’m truly glad you’re part of this journey. Stay curious and keep exploring!`;
  return (
    <aside className="w-full max-w-xs p-4 space-y-6 mt-30">
      {/* Welcome Note */}
      <div className="bg-rose-50 p-6 rounded-md shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-2">
        Hi, thanks for dropping by!
      </h2>

      <p className="text-gray-800 mb-4 text-sm leading-relaxed">
        {expanded ? fullText : shortText}
      </p>

      <button
        className="border border-gray-800 px-4 py-2 rounded hover:bg-gray-100 text-sm dark:text-black"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>


      {/* Newsletter Signup */}
      <div className="bg-gray-800 text-white p-6 rounded-md shadow-sm">
        <h3 className="text-lg font-semibold mb-4">
          Let the posts come to you.
        </h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 w-full px-3 py-2 bg-transparent border-b border-white focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input type="checkbox" id="subscribe" className="form-checkbox" />
            <label htmlFor="subscribe">
              Yes, subscribe me to your newsletter. *
            </label>
          </div>

          <button
            
            className="bg-white text-orange-700 font-medium w-full py-2 rounded hover:bg-orange-100"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}
