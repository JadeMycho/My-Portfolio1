import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import profileImage from "../../../assets/head.jpg";

export function HomePageBannerSection() {
  return (
    <Section className="relative overflow-hidden py-16 md:py-28 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 border-b border-gray-700">

      {/* Background Decorations */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-neutral-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* TEXT SECTION */}
          <div className="w-full md:w-3/5 text-center md:text-left space-y-6">

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">

              Hello, I'm{" "}

              <span className="text-white">
                HARVEY LESTER
              </span>

              <br />

              <span className="text-gray-400 font-medium text-3xl md:text-5xl">
                Aspiring Developer & Creative
              </span>

            </h1>


            {/* Description Focused on Experience */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              An IT student balancing work and creative pursuits, focused on building slick, accessible, and high-performance web experiences.
            </p>


            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:justify-start gap-4 pt-3">

              <NavLink to="/about">
                <Button
                  className="
                    w-full sm:w-auto
                    text-base px-8 h-12
                    bg-white
                    text-gray-950
                    hover:bg-gray-200
                    font-semibold
                    shadow-lg
                    shadow-black/30
                    transition-all
                    hover:-translate-y-1
                  "
                >
                  Explore Projects
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
                  Get In Touch
                </Button>
              </NavLink>

            </div>

          </div>


          {/* PROFILE SECTION */}
          <div className="w-full md:w-2/5 flex justify-center">

            {/* Static Image Box */}
            <div className="w-64 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl bg-gray-900">
              <img
                src={profileImage}
                alt="Harvey Lester profile"
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

          </div>

        </div>
      </div>
    </Section>
  );  
}