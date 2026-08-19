import modelImage from "@/assets/model.jfif";
import boholImage from "@/assets/bohol.jfif";
import gymImage from "@/assets/gym.jfif";
import mcdoImage from "@/assets/mcdo.jfif";

export default function AboutPage() {
  const photos = [
    {
      image: modelImage,
      title: "Model",
      description: "A little introduction about myself.",
    },
    {
      image: boholImage,
      title: "ALCU Bohol",
      description: "One of my memorable places and experiences.",
    },
    {
      image: gymImage,
      title: "Gym",
      description: "One of the activities I enjoy.",
    },
    {
      image: mcdoImage,
      title: "McDonald's",
      description: "A place where I work as a working student.",
    },
  ];

  const projects = [
    {
      title: "SIAPwFIGMA",
      description: "A recent web design project created using Figma.",
      link: "https://jademycho.github.io/SIAPwFIGMA/",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ========================= */}
        {/* ABOUT ME */}
        {/* ========================= */}

        <div className="text-center mb-12">
          <span className="text-emerald-400 font-semibold">
            About Me
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Get to Know{" "}
            <span className="text-emerald-400">
              Me
            </span>
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Here are some photos that represent my interests,
            experiences, and memories.
          </p>
        </div>

        {/* ========================= */}
        {/* PHOTO CARDS */}
        {/* ========================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.title}
              className="group overflow-hidden rounded-2xl bg-gray-900 border border-gray-700 shadow-xl hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Photo */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-white">
                  {photo.title}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================= */}
        {/* PROJECTS SECTION */}
        {/* ========================= */}

        <div className="mt-24">

          {/* Projects Header */}
          <div className="text-center mb-12">
            <span className="text-emerald-400 font-semibold">
              My Work
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              Recent{" "}
              <span className="text-emerald-400">
                Projects
              </span>
            </h2>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects and designs.
            </p>
          </div>

          {/* ========================= */}
          {/* CENTERED PROJECT CARD */}
          {/* ========================= */}

          <div className="flex justify-center">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group w-full max-w-md rounded-2xl bg-gray-900 border border-gray-700 p-6 shadow-xl text-center hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Icon */}
                <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-emerald-400">
                    F
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="mt-3 text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 px-5 py-3 rounded-xl bg-emerald-500 text-gray-950 font-semibold hover:bg-emerald-400 hover:scale-105 transition-all duration-200"
                >
                  View Project
                  <span className="ml-2 text-lg">
                    →
                  </span>
                </a>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}