import React, { useEffect, useRef } from 'react'
import CursorGlow from './CursorGlow'
import privacyPng from "../assets/privacy.png"

const Privacy = () => {

  const imageRefs = useRef([]);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    imageRefs.current.forEach(img => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();

  }, []); // ✅ fixed

  return (
    <>
      <section id="feature" className="py-25 md:py-32 px-6 text-white min-h-screen">


        {/* <CursorGlow /> */}

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="sm:text-5xl text-4xl md:text-7xl font-bold mb-10 leading-tight font-display">
            <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-4">

            <p className="text-center md:text-left">
              We’re deeply committed to creating a safe and secure online environment for all of our users. We do not sell your personal information to third parties. 
              We strive to provide you with access to and control over the information you give us, and we take the protection of your information 
              very seriously. We take extra precautions for our youngest learners. Specifically, we have designed the app registration process to 
              minimize the collection and use of personally identifiable information. We do not display advertising on app. Our mission is to 
              provide you with a better learning experience, not to sell you products.
            </p>

            <img
              src={privacyPng}
              alt="privacy"
              className="w-full md:w-[600px] h-auto animate-on-scroll"
              ref={(el) => (imageRefs.current[0] = el)}
            />

          </div>
        </div>
      </section>
    </>
  )
}

export default Privacy