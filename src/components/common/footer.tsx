export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 border-t border-gray-700/70 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex items-center justify-center">

          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-emerald-400 font-medium">
              MyPortfolio
            </span>
            . All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}