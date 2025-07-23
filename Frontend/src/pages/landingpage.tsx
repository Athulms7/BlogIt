import { useNavigate } from "react-router-dom";

export default function BlogitLandingPage() {
    const navigate=useNavigate();
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="text-center py-24 bg-white">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Create, collaborate, and <br /> scale your blogs with BlogIt
        </h1>
        <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto">
          Start writing, sharing, and building your dev community with ease.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={()=>{
            navigate("/signup")
          }} className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800">
            Start Writing
          </button>
          <button className="border border-black px-6 py-3 rounded-full font-medium hover:bg-gray-100">
            Explore Blogs
          </button>
        </div>
        <img
          src="..\Screenshot 2025-07-06 023733.png"
          alt="Hero Preview"
          className="mt-16 mx-auto max-w-4xl"
        />
      </section>

      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Powerful Blogging Tools</h2>
            <p className="text-gray-600 mb-6">
              From markdown editing to custom domains, BlogIt helps you publish with confidence.
            </p>
            <button onClick={()=>{
            navigate("/signin")
          }} className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
              Start Publishing
            </button>
          </div>
          <img
            src="..\Screenshot 2025-07-06 024433.png"
            alt="Feature"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Purple Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white py-24 text-center">
        <h3 className="text-lg font-medium uppercase text-indigo-300 mb-4">Your Team's Blog Engine</h3>
        <h2 className="text-4xl font-bold mb-4">Blogging platform for everyone on your team</h2>
        <p className="max-w-xl mx-auto text-indigo-100 text-lg">
          BlogIt empowers individuals and teams with the modern content stack built for developer communities.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            <img
            src="..\Screenshot 2025-07-06 024359.png"
            alt="Feature"
            className="rounded-lg shadow-md"
          />
          {["Collaboration","Easy Interface"].map((title, i) => (
            <div key={i} className="bg-indigo-800/60 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-indigo-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, temporibus.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-20 text-center">
        <h3 className="text-xl font-medium mb-6">We're the most loved developer blogging platform</h3>
        <div className="flex flex-wrap justify-center gap-10 text-3xl font-bold">
          <div>
            <span className="text-blue-400">600,000+</span>
            <p className="text-sm mt-1 font-normal text-gray-400">Total Users</p>
          </div>
          <div>
            <span className="text-blue-400">3.5M+</span>
            <p className="text-sm mt-1 font-normal text-gray-400">Monthly Readers</p>
          </div>
          <div>
            <span className="text-blue-400">1B+</span>
            <p className="text-sm mt-1 font-normal text-gray-400">Words Written</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-blue-100 to-white py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Give your team a modern content engine</h2>
        <p className="text-gray-600 mb-6">Start creating blogs, docs, and everything in between.</p>
        <button onClick={()=>{
            navigate("/signin")
          }} className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
          Get Started for Free
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BlogIt. All rights reserved.
      </footer>
    </div>
  );
}
