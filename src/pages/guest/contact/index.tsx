export default function ContactPage() {
  const contacts = [
    {
      title: "Contact Number",
      value: "+63 995 794 3631",
      
      icon: "📱",
    },
    {
      title: "Instagram",
      value: "@mycho_jed",
      link: "https://www.instagram.com/mycho_jed?igsh=aWMxeGI0ZjEyMWgy&utm_source=qr",
      icon: "📸",
    },
    {
      title: "Facebook",
      value: "My Facebook",
      link: "https://www.facebook.com/share/1Bs9YwrjVU/?mibextid=wwXIfr",
      icon: "f",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Contact Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-400 font-semibold">
            Contact
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Get in{" "}
            <span className="text-emerald-400">
              Touch
            </span>
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            You can contact me through my phone number or social media
            accounts.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.link}
              target={contact.title === "Contact Number" ? undefined : "_blank"}
              rel={
                contact.title === "Contact Number"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group rounded-2xl bg-gray-900 border border-gray-700 p-8 text-center shadow-xl hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-emerald-400">
                  {contact.icon}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-white">
                {contact.title}
              </h2>

              {/* Contact Information */}
              <p className="mt-3 text-gray-400 group-hover:text-emerald-400 transition-colors">
                {contact.value}
              </p>

              {/* Click Text */}
              <p className="mt-4 text-sm text-emerald-400">
                Click to connect →
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}