import axios from "axios";
import { Buttons } from "./button";
import { useState } from "react";
import { Appbar } from "./Appbar";

interface userdata {
  firstname: string;
  lastname: string;
  username: string;
  password?: string;
}

interface ProfileProps {
  userdata: userdata;
}

export function Profilecomp({ userdata }: ProfileProps) {
  const [firstname, setfirstname] = useState(userdata.firstname);
  const [lasttname, setlastname] = useState(userdata.lastname);
  const [username, setusername] = useState(userdata.username);


  async function Update() {
    const token = localStorage.getItem("token");
    await axios.put(
      "https://blogit-4lvo.onrender.com/api/v1/user/profile",
      {
        firstname,
        lastname: lasttname,
        username,
        
      },
      {
        headers: { authorization: token },
      }
    );
    window.location.href = "/profile";
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <Appbar />
      <div className="m-11">

      </div>
      <div className="flex items-center justify-center px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 flex flex-col items-center text-center">
            <img
              src="https://i.pravatar.cc/150?u={username}
"
              className="w-24 h-24 rounded-full mb-4"
              alt="Profile"
            />
            <h2 className="text-xl font-semibold">{firstname}</h2>
            <p className="text-sm mb-4 text-gray-500 dark:text-gray-300">{username}</p>
            <h3 className="text-blue-600 dark:text-blue-400 font-semibold mb-2">About</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Profile Information</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4">
              Personal Details
            </h3>
            <form className="space-y-4">
              <input
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
                type="text"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-md px-4 py-2"
                placeholder="First Name"
              />
              <input
                value={lasttname}
                onChange={(e) => setlastname(e.target.value)}
                type="text"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-md px-4 py-2"
                placeholder="Last Name"
              />
              <input
                value={username}
                onChange={(e) => setusername(e.target.value)}
                type="text"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-md px-4 py-2"
                placeholder="Username"
              />
              
              <input
                type="text"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-md px-4 py-2"
                placeholder="State"
              />
            </form>

            <div className="mt-4">
              <Buttons label="Update" onclick={Update} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
