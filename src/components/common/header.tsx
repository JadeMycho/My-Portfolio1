import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 border-b border-gray-700/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <NavLink to="/" className="text-xl font-bold tracking-tight text-white hover:text-gray-300 transition">
          My Portfolio
        </NavLink>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition-all ${
                isActive
                  ? "bg-gray-800 text-white font-semibold border border-gray-700"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition-all ${
                isActive
                  ? "bg-gray-800 text-white font-semibold border border-gray-700"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            About
          </NavLink>

          <NavLink to="/contact">
            <Button className="bg-white text-gray-950 hover:bg-gray-200 font-semibold px-5 h-9 rounded-md transition shadow">
              Contact
            </Button>
          </NavLink>
        </nav>

      </div>
    </header>
  );
}