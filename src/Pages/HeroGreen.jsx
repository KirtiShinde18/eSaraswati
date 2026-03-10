import {  DownloadIcon, } from "lucide-react";
import { useEffect, useState } from "react";
import WhatsAppLogoIntegration from "../assets/whatsAppLogo.png"

export default function Hero() {

  const [showSpline, setShowSpline] = useState(false);

  // Load spline after UI render
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSpline(true);
  //   }, 500); 

  //   return () => clearTimeout(timer);
  // }, []);


useEffect(() => {
  const isMobile = window.innerWidth < 768;

  if (!isMobile) {
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 500);

    return () => clearTimeout(timer);
  }
}, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Spline Background */}
      {/* {showSpline && (
        <spline-viewer
          loading="lazy"
          url="https://prod.spline.design/ZvI8X-TY1NLfzFOA/scene.splinecode"
          className="absolute top-0 left-0 w-full h-full"
        ></spline-viewer>
      )} */}

      {/* Floating Orbs */}
      <div className="absolute w-72 h-72 bg-green-500/30 rounded-full blur-3xl animate-float top-20 left-20 will-change-transform"></div>
      <div className="absolute w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-float bottom-20 right-20 will-change-transform"></div>

      <div className="max-w-4xl relative z-10 font-display text-center">
        <span className="px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 text-sm">
          Now in Public
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mt-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
            Bridging Tradition ,
          </span>
          <br />
          Empowering Tomorrow
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          From KD Websoft, eSaraswati is igniting a digital education revolution across India. 
          We seamlessly blend cutting-edge technology with accessibility, transforming how 
          institutions deliver world-class learning experiences. Witness the future of education unfold.
        </p>

        <div className="flex gap-4 justify-center mt-8 text-xl">
          <a href="/e-Saraswati.pdf" download>
            <button className="flex items-center gap-2 px-4 py-2 md:px-8 md:py-4 text-lg md:text-xl rounded-xl bg-gradient-to-r from-green-500 to-indigo-500 hover:scale-105 transition">
              Download Pdf <DownloadIcon size={24}/>
            </button>
          </a>
        </div>

      </div>

      {/* WhatsApp */}
        <div className="absolute bottom-10 right-5 z-10">
          <a href="http://wa.me/918949532885">
            <img
              src={WhatsAppLogoIntegration}
              width={80}
              loading="lazy"
              alt=""
              className="fixed bottom-10 right-6 z-10"
            />
          </a>
        </div>
      {/* <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent backdrop-blur-md hover:scale-105 transition">
          Lets Connect <MessageCircleHeartIcon/>
        </button> */}

    </section>
  );
}