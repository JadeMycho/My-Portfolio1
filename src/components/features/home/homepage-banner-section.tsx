import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import profileImage from "@/assets/head.jpg";

export function HomePageBannerSection() {
  return (
    <Section className="relative overflow-hidden py-16 md:py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 border-b border-gray-700">

      {/* Background Decorations */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* PROFILE SECTION */}
          <div className="w-full md:w-2/5 flex justify-center">

            <div className="relative w-72 h-72 md:w-96 md:h-96">

              {/* Outer Glow */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-emerald-500/20 blur-2xl" />

              {/* Decorative Back Shape */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-emerald-400 via-emerald-600 to-gray-700 rotate-3 opacity-80" />

              {/* Main Profile Frame */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gray-950 p-2 shadow-2xl">

                {/* Image Container */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">

                  <img
                    src={profileImage}
                    alt="Mycho profile"
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                </div>
              </div>

              {/* Small Decorative Circle */}
              <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-md" />

              {/* Bottom Accent */}
              <div className="absolute -bottom-4 -left-4 px-5 py-2 rounded-full bg-gray-900/90 border border-emerald-500/40 backdrop-blur-md shadow-lg">
                <span className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>

            </div>
          </div>


          {/* TEXT SECTION */}
          <div className="w-full md:w-3/5 text-center md:text-left space-y-6">

            {/* Welcome Badge */}
            

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">

              Hi, I'm{" "}

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                MYCHO
              </span>

              <br />

              <span className="text-gray-100">
               BUILDING MYSELF
              </span>

            </h1>


            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
             Working Student, Model, IT student crafting clean, responsive, and modern
              websites & applications using{" "}
              <span className="text-gray-200">React</span>,{" "}
              <span className="text-gray-200">TypeScript</span>, and{" "}
              <span className="text-emerald-400">Tailwind CSS</span>.
            </p>


            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:justify-start gap-4 pt-3">

              <NavLink to="/about">
                <Button
                  className="
                    w-full sm:w-auto
                    text-base px-8 h-12
                    bg-emerald-600
                    text-white
                    hover:bg-emerald-500
                    shadow-lg
                    shadow-emerald-500/20
                    transition-all
                    hover:-translate-y-1
                  "
                >
                  View My Work
                </Button>
              </NavLink>

              <NavLink to="/contact">
                <Button
                  variant="secondary"
                  className="
                    w-full sm:w-auto
                    text-base px-8 h-12
                    bg-gray-800
                    hover:bg-gray-700
                    border border-gray-600
                    text-gray-200
                    transition-all
                    hover:-translate-y-1
                  "
                >
                  Contact Me
                </Button>
              </NavLink>

            </div>

          </div>

        </div>
      </div>
    </Section>
  );
}