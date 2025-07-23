

import { Link } from "react-router-dom";
import { DarkButton } from "./darkbutton";
import { BasicDropdown } from "./userdropdown";
import { NotificationPanel } from "./notification";
import { Createblogbutton } from "@/components/Createblogbutton";


export function Appbartrans() {
 
  return (
    <header
      className={`fixed top-0 left-0 right-0 m-2 px-6 py-4 border-b z-50 backdrop-transparent rounded-4xl
        bg-white/50 dark:bg-black/30 border-gray-300 dark:border-gray-700 transition-all duration-300`}
    >
      <div className="flex justify-between items-center w-full">
        <div>
       
          <div className="font-bold text-2xl text-dark-blue-800">BlogZee</div>
        </div>
        
        <nav className="text-gray-700 text-lg flex items-center gap-4 dark:text-gray-300">
          <Link className="hover:text-gray-500" to="/blogs">Home</Link>
          <Createblogbutton />
          <DarkButton />
          <BasicDropdown />
          <NotificationPanel />
          <Link className="hover:text-gray-500" to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}