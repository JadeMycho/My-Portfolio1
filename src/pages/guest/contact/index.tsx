export default function ContactPage() {
  const contacts = [
    {
      title: "Contact Number",
      value: "0926 238 1426",
      link: "tel:09262381426",
      tag: "Direct Line",
      icon: (
        <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: "Instagram",
      value: "@Harvey.Baje",
      link: "https://www.instagram.com/Harvey.Baje/",
      tag: "Social Media",
      icon: (
        <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Facebook",
      value: "Harvey Baje",
      link: "https://web.facebook.com/xharvsgt",
      tag: "Social Profile",
      icon: (
        <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-[#0b1120] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Soft Midnight Blue Glow (Matches Homepage Depth) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">

        {/* ========================= */}
        {/* HERO BANNER SECTION       */}
        {/* ========================= */}
        <div className="bg-[#111827]/70 border border-slate-800/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-slate-800/80 text-slate-300 border border-slate-700/50">
              Let's Connect
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Get in <span className="text-slate-300">Touch</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Have a project in mind, a collaboration proposal, or just want to chat? Reach out through any of these platforms.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2.5 bg-slate-900/90 px-4 py-2.5 rounded-xl border border-slate-800">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">Available for inquiries</span>
          </div>
        </div>

        {/* ========================= */}
        {/* MATCHED CONTACT CARDS     */}
        {/* ========================= */}
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.link}
              target={contact.title === "Contact Number" ? undefined : "_blank"}
              rel={contact.title === "Contact Number" ? undefined : "noopener noreferrer"}
              className="group relative bg-[#111827]/70 border border-slate-800/80 hover:border-slate-600/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:bg-slate-700/60 transition-colors">
                    {contact.icon}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-900/80 border border-slate-800 px-2.5 py-1 rounded-md">
                    {contact.tag}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-white tracking-wide">
                  {contact.title}
                </h2>
                
                <p className="mt-1.5 text-sm text-slate-400 font-medium group-hover:text-slate-200 transition-colors">
                  {contact.value}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                <span>Connect Now</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}