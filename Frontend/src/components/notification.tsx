import { useState } from "react";
import { BellIcon, XIcon } from "lucide-react";

export function NotificationPanel() {
  const [open, setOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Welcome to BlogZee 🎉",
      content: `Thanks for joining the platform! We're excited to have you.`,
    },
    {
      id: 2,
      title: "New Feature Update 🚀",
      content: "Dark mode is now available. Check it out in settings!",
    },
  ];

  return (
    <div className="relative">
      {/* Notification Icon Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative rounded-full bg-gray-100 dark:bg-gray-800 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <BellIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      </button>

      {/* Notification Panel */}
      {open && (
        <div className="absolute right-0 mt-4 w-[24rem] max-w-sm rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 z-50 overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Notifications
            </h3>
            <button onClick={() => setOpen(false)}>
              <XIcon className="w-5 h-5 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition" />
            </button>
          </div>

          {/* Tabs (fake for UI only) */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            {["All", "Comments", "Likes", "Mentions"].map((tab) => (
              <button
                key={tab}
                className="flex-1 text-sm py-2 text-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Body */}
          <div className="max-h-72 overflow-y-auto px-4 py-3 space-y-4">
            {notifications.map((n) => (
              <div key={n.id} className="text-sm text-gray-800 dark:text-gray-100">
                <h4 className="font-medium">{n.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {n.content}
                </p>
              </div>
            ))}
            {notifications.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400">No notifications</p>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <button className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
              Mark all as read
            </button>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              See all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
