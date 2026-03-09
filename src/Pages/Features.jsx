import { Zap, Brain, ShieldCheck, Globe, TrendingUp, HandCoins, Handshake, User } from "lucide-react";

const features = [
  { icon: <Zap size={24} />, title: "Intuitive Interface", desc: "Seamless navigation with user-friendly design. Clean layouts ensure quick adoption by all users, reducing training time significantly." },
  { icon: <TrendingUp size={24} />, title: "Real-Time Analytics", desc: "Powerful dashboard providing instant insights. Track student performance, attendance patterns, and engagement metrics at a glance." },
  { icon: <Handshake size={24} />, title: "Dedicated Support", desc: "Our team offers personalized assistance, ensuring smooth operation and quick resolution to any queries." },
  { icon: <Globe size={24} />, title: "Customisable Modules", desc: "Flexible course creation tailored to diverse curricula, allowing adaptation to various educational boards or custom syllabi." },
  { icon: <ShieldCheck size={24} />, title: "Secure Infrastructure", desc: "Cloud-based platform with enterprise-grade security. Your data remains private, encrypted, and compliant with data protection standards." },
  { icon: <User size={24} />, title: "Client-Driven Devlopment", desc: "Built from real client experiences, our features evolve based on practical needs, not closed-room assumptions." },
];

export default function Features() {
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
      </div>
      
    </section>
  );
}