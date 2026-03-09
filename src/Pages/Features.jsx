import { Zap, ShieldCheck, Globe, TrendingUp, Handshake, User, LockIcon, FileSymlink, Users, BellDotIcon, Database, Smartphone, FileUser, HandHeart } from "lucide-react";
import WhatsAppLogoIntegration from "../assets/whatsAppLogo.png"
  import { useEffect, useRef, useState } from "react";

const features = [
  { icon: <Zap size={24} />, title: "Intuitive Interface", desc: "Seamless navigation with user-friendly design. Clean layouts ensure quick adoption by all users, reducing training time significantly." },
  { icon: <TrendingUp size={24} />, title: "Real-Time Analytics", desc: "Powerful dashboard providing instant insights. Track student performance, attendance patterns, and engagement metrics at a glance." },
  { icon: <Handshake size={24} />, title: "Dedicated Support", desc: "Our team offers personalized assistance, ensuring smooth operation and quick resolution to any queries." },
  { icon: <Globe size={24} />, title: "Customisable Modules", desc: "Flexible course creation tailored to diverse curricula, allowing adaptation to various educational boards or custom syllabi." },
  { icon: <ShieldCheck size={24} />, title: "Secure Infrastructure", desc: "Cloud-based platform with enterprise-grade security. Your data remains private, encrypted, and compliant with data protection standards." },
  { icon: <User size={24} />, title: "Client-Driven Devlopment", desc: "Built from real client experiences, our features evolve based on practical needs, not closed-room assumptions." },
];

  const eSaraswatiModule = [
    {
      title: "Security",
      desc: "Authentication token & OTP login, Cloud Securities, Latest Technology, User Password Change, Admin Control Rights",
      icon: <LockIcon />,
    },
    {
      title: "Data Export",
      desc: "Excel & PDF in one Click",
      icon: <FileSymlink />,
    },
    {
      title: "Multi-Branch Management",
      desc: "",
      icon: <Users />,
    },
    {
      title: "Auto Notifications",
      desc: "SMS/Email/App/WhatsApp",
      icon: <BellDotIcon />,
    },
    {
      title: "Multiple Session Management",
      desc: "",
      icon: <Database />,
    },
    {
      title: "Mobile Responsive & User Friendly UI",
      desc: "",
      icon: <Smartphone />,
    },
     {
      title: "Extensive Pre-Built Templates",
      desc: "Includes TC, CC, Marksheet, ID & Admit Cards, Score List, Salary Slip, Invoice, and Admission Form.",
      icon: <FileUser />,
    },
     {
      title: "Payment Gateway Integration",
      desc: "",
      icon: <HandHeart />,
    },

  ]



export default function Features() {
    // timeline 

  const [activeIndex, setActiveIndex] = useState(-1);
  const itemRefs = useRef([]);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveIndex(index);
        }
      });
    },
    { threshold: 0.5 }
  );

  itemRefs.current.forEach((el) => el && observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <section id="features" className="py-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* <h2 className="text-5xl text-center font-bold mb-16">
          Powerful Features
        </h2>
         */}

         <h1 className="text-7xl font-bold  leading-tight font-display text-center mb-5">
          <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
            Powerful Features
          </span>
          
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((f, i) => (
            <div
              key={i}
              // className="bg-zinc-900 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 ease-out card-glow"
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300 card-glow"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-green-500/20 rounded-xl mb-4">
                {f.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}

        </div>

        <h1 className="text-3xl my-10 font-bold  leading-tight font-display text-center mb-5">
          <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
           Complete eSaraswati Module Suite
          </span>
          
        </h1>

        {/* timeline  */}
        <div className=" mt-10 max-w-3xl mx-auto relative border-l border-green-500/30 pl-8 space-y-10">

          {eSaraswatiModule.map((f, i) => (
            <div
              key={i}
              data-index={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="relative"
            >
        
              {/* Timeline Dot */}
            <div
                className={`absolute -left-[34px] top-2 w-8 h-8 rounded-full flex items-center justify-center text-black transition-all duration-500
                ${
                  activeIndex === i
                    ? "bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.9)] scale-110"
                    : "bg-green-500/40"
                }`}
            >
                {f.icon}
            </div>

              {/* Content */}
            <div
                className={`p-6 ms-5 rounded-xl border transition-all duration-500
                ${
                  activeIndex >= i
                    ? "bg-white/[0.04] border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    : "bg-white/[0.02] border-white/5"
                }`}
            >
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
            </div>

            </div>
          ))}

        </div>


      </div>

      {/* Bottom Left Button */}
        <div className="absolute bottom-10 right-5 z-10">
          <a href="http://wa.me/918949532885">
            <img src={WhatsAppLogoIntegration} width={80} alt="" className="ms-14 fixed bottom-10 right-6 z-10"/>
          </a>
        </div>
      
    </section>
  );
}