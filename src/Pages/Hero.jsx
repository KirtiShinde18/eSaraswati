
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

      {/* Floating Orbs */}
      <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float top-20 left-20"></div>

      <div className="absolute w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-float bottom-20 right-20"></div>

      <div className="max-w-4xl relative z-10 animate-float font-display">

        <span className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm ">
          Now in Public Beta
        </span>

        <h1 className="text-7xl font-bold mt-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
            {/* Build the Future */}
            Bridging Tradition ,
          </span>
          <br />
          {/* with AI Power */}
          Empowering Tomorrow
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          Transform your ideas into reality with our next-generation AI platform.
        </p>

        <div className="flex gap-4 justify-center mt-8 text-xl">

          <button className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 transition">
            Get Started <ArrowRight size={18}/>
          </button>

        </div>

      </div>


    </section>
  );
}