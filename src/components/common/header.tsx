import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700/70 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800/95 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            My{" "}
            <span className="text-emerald-400">
              Portfolio
            </span>
          </NavLink>


          {/* Navigation */}
          <nav className="flex items-center gap-2">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`
              }
            >
              Home
            </NavLink>


            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`
              }
            >
              About
            </NavLink>


            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `ml-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                    : "bg-emerald-600 text-white hover:bg-emerald-500 hover:-translate-y-0.5 shadow-md shadow-emerald-500/10"
                }`
              }
            >
              Contact
            </NavLink>

          </nav>

        </div>
      </div>
    </header>
  );
}