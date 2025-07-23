import { useState } from "react";

export function BasicDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-full bg-blue-900 hover:bg-blue-700 text-white text-sm font-bold flex items-center justify-center"
      >
        A
      </button>

      {open && (
        <div className="absolute right-1 top-full mt-2 z-50">
          {/* Arrow on top right corner of menu pointing up */}
          <div className="absolute right-3 -top-1 w-2 h-2 rotate-45 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 z-10"></div>

          <div className="w-48 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 relative z-20">
            <div className="py-2">
              <button
                onClick={() =>{
                  window.location.href="/profile"
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                Profile
              </button>
              <button
                onClick={() =>{
                  window.location.href="/signin"
                }}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-500  hover:bg-red-50 dark:hover:bg-gray-400 rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
