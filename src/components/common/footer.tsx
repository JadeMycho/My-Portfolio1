export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 border-t border-gray-700 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}