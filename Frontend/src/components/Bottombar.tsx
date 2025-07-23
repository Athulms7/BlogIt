import { Link } from "react-router-dom";

export function Bottombar() {
  return (
    <footer className="bg-gray-300 text-gray-600 text-center shadow-4xl p-3">
      <div className="text-gray-700 ">
        <Link className="p-2" to="/dashboard">Home</Link>
        <Link  className="p-2" to="/about">About</Link>
        <Link  className="p-2" to="/contact">Contact</Link>
      </div>
      <p>© 2025 PaYMe</p>
    </footer>
  );
}
