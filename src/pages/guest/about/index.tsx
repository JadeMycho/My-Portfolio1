import { useState } from "react";

// Placeholder imports for your photo slots
import imageSlot1 from "@/assets/model.jpg"; 
import imageSlot2 from "@/assets/mcdo.jpg"; 

export default function AboutPage() {
  // 2 Photo Slots updated with BSIT Basketball & McDo Service Crew details
  const photos = [
    {
      id: 1,
      image: imageSlot1,
      tag: "Athletics & Leadership",
      title: "BSIT Basketball Player",
      description: "Representing the BSIT department with teamwork, athletic discipline, and drive on the court.",
    },
    {
      id: 2,
      image: imageSlot2,
      tag: "Workplace & Experience",
      title: "Working Student as McDo Service Crew",
      description: "Building strong work ethics, resilience, and time management while balancing academics and job responsibilities.",
    },
  ];

  const projects = [
    {
      title: "SIAPwFIGMA",
      subtitle: "UI/UX & Web Prototype",
      description: "A sleek, responsive web design framework engineered using Figma and transformed into an interactive web interface.",
      link: "https://jademycho.github.io/SIAPwFIGMA/",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0b1120] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Glow (Matches Homepage Depth) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-20 relative z-10">

        {/* ========================= */}
        {/* HERO INTRO SECTION        */}
        {/* ========================= */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#111827]/70 border border-slate-800/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-slate-800/80 text-slate-300 border border-slate-700/50">
              Beyond The Code
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Driven by <span className="text-slate-300">Passion</span>, Built on <span className="text-slate-300">Discipline</span>.
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              From balancing studies and work commitments to stepping in front of the camera, my goal is continuous personal evolution. Here is a glimpse into my journey.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-8">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Focus Area</p>
              <p className="text-white font-semibold mt-1">Web Dev & Tech</p>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Activities</p>
              <p className="text-white font-semibold mt-1">Sports & Service</p>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* 2 PHOTO SLOTS SECTION     */}
        {/* ========================= */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Personal Highlights</h2>
              <p className="text-slate-400 text-sm mt-1">Key moments shaping my lifestyle and creative direction</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative h-[460px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-slate-600/80 transition-all duration-300 shadow-lg"
              >
                {/* Photo */}
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-300">
                  <span className="text-xs font-bold text-slate-300 tracking-wider uppercase mb-1">
                    {photo.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-300 mt-2 opacity-90 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/* FEATURED PROJECT SECTION  */}
        {/* ========================= */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Work</h2>
            <p className="text-slate-400 text-sm mt-1">Selected UI design and front-end development project</p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="relative overflow-hidden rounded-2xl bg-[#111827]/70 border border-slate-800/80 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-slate-600/80 transition-all shadow-lg"
              >
                <div className="space-y-3 max-w-xl">
                  <span className="text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/50 px-3 py-1 rounded-md">
                    {project.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all hover:scale-105 shadow-md whitespace-nowrap"
                >
                  Explore Demo
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}