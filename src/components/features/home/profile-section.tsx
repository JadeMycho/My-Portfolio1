export function ProfileSection() {
  const profile = {
    name: "Harvey Lester Baguio",
    email: "bajeharvey@gmail.com",
  };

  return (
    <section className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 border-t border-gray-700/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-gray-300">
          My Profile:{" "}
          <span className="text-white font-medium">
            {profile.name}
          </span>{" "}
          -{" "}
          <span className="text-gray-400">
            {profile.email}
          </span>
        </p>
      </div>
    </section>
  );
}