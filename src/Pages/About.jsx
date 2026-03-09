"use client"
import { useState } from "react"
import CursorGlow from "./CursorGlow"
import { Bot, Eye, Target, TrendingUpIcon } from "lucide-react";
import WhatsAppLogoIntegration from "../assets/whatsAppLogo.png"

export default function About() {

  const [activeTab, setActiveTab] = useState("company")
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
  {
    title: "Our Mission",
    desc: "To be the best ally globally in the area of education institute management through quality product, innovation, 24*7 customer service , professional expertise and continous improvement. Help educational Institutions around the world to gain efficiency, increase performance and cut the cost through innovative software services.",
    icon: <Target />,
    image: "/images/image-1.jpg"
  },
  {
    title: "Our Vision",
    desc: "Our Vision to change the education world using the technology. We are Burning the mid night oil to fulfil our vision. we have traveled a lot of milies to achive this vision and we have to travel lot more.We want to you join this journey and help us to achive the dream we all have, to change the our education world completely so that we can create world leaders.",
    icon: <Eye />,
    image: "/images/image-2.jpg"
  },
  {
    title: "Our Values",
    desc: "Making the client’s success a priority.Making only those promises we can keep.Identifying our clients’ real needs, not just delivering a product.Candidly and respectfully sharing our objective findings with clients, even those that may be unpopular.We love what we do.Leading clients to take action & execute their business strategies in new ways.",
    icon: <TrendingUpIcon />,
    image: "/images/image-3.jpg"
  },
];

  return (
    <section id="about" className="py-32 px-6 text-white min-h-screen">
    <CursorGlow/>
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-7xl font-bold mb-10 leading-tight font-display">
          <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
            About Us
          </span>
          
        </h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-10 ">

          <button
            onClick={() => setActiveTab("company")}
            className={`px-6 py-2 rounded-lg border ${
              activeTab === "company"
                ? "bg-green-500 text-black"
                : "border-white/30 hover:bg-white/10"
            }`}
          >
            Company
          </button>

          <button
            onClick={() => setActiveTab("e-saraswati")}
            className={`px-6 py-2 rounded-lg border ${
              activeTab === "e-saraswati"
                ? "bg-green-500 text-black"
                : "border-white/30 hover:bg-white/10"
            }`}
          >
            e-Saraswati
          </button>

          <button
            onClick={() => setActiveTab("personal")}
            className={`px-6 py-2 rounded-lg border ${
              activeTab === "personal"
                ? "bg-green-500 text-black"
                : "border-white/30 hover:bg-white/10"
            }`}
          >
            Personal
          </button>

        </div>

        {/* Content */}
        <div className=" p-10  rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300 card-glow">

          {activeTab === "company" && (
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-green-400"><b>Kuldeep Websoft Pvt. Ltd.</b></span> have driven hundreds of business towards success and still going further with many possible clients. 
              We have well trained professional who are always available to cater your needed things.In this journery we have built a lot of 
              softwares for various fields, e-Sarsawati School Manager is one of them. <span className="text-green-400"><b>e-Saraswati</b></span> is our dream to change the education world.

              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-7">

                {features.map((f, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedFeature(f)}
                    className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300 card-glow"
                  >
              
                    {/* Upper Image Section */}
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={f.image}
                        alt={f.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
              
                    {/* Bottom Text Section */}
                    <div className="p-8 flex justify-evenly items-center">
                      <div className="w-12 h-12 flex items-center justify-center bg-green-500/20 rounded-xl ">
                        {f.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-display">{f.title}</h3>
                      </div>
                    
                      
                    </div>
                    {/* <p className="mb-8 text-start px-8">{f.desc}</p> */}
              
                  </div>
                ))}
              
              </div>

              {/* modal start  */}
              {selectedFeature && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                  
                  {/* <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-md w-full relative"> */}
                  <div className="bg-gradient-to-r from-green-400 to-green-600 border border-white/30 rounded-2xl p-8 max-w-md w-full relative">
                    
                    <button
                      onClick={() => setSelectedFeature(null)}
                      className="absolute top-4 right-4 text-gray-700 hover:text-black"
                    >
                      ✕
                    </button>
              
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-black rounded-xl text-white">
                        {selectedFeature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-black">
                        {selectedFeature.title}
                      </h3>
                    </div>
              
                    <p className="text-black text-start">
                      {selectedFeature.desc}
                    </p>


                    {/* cacel btn  */}
                    <div className="flex justify-end">
                      <button
                        onClick={() => setSelectedFeature(null)}
                        type="button"
                        className="px-5 py-2 bg-black text-white rounded-lg hover:bg-zinc-800 transition-colors duration-300 mt-5"
                        >
                        Cancel
                      </button>
                    </div>
                    {/* cacel btn  */}

                  </div>
              
                </div>
              )}

              {/* modal end  */}

            </p>

            
          )}

          {activeTab === "e-saraswati" && (
            <div className="space-y-4 text-gray-300 ">
                <p className="text-2xl font-semibold py-2">
                  What is e-Saraswati ?
                </p>
          
                <div className="text-start space-y-3">
                    <li><b className="text-green-400">AI Assistant : </b>  Auto extracts & uploads marks from images.</li>
                    <li>Digital learning platform</li>
                    <li><b className="text-green-400">Smart Connect : </b>  WhatsApp (No Template Approval Required), SMS, Email & Notification.</li>
                    <li><b className="text-green-400">Access To anyone : </b>  Anytime on web and mobile</li>

                </div>
            
            </div>
          )}

          {activeTab === "personal" && (
            <div className="space-y-3 text-gray-300">
              <p><span className="font-semibold">Name:</span> Kirti Shinde</p>
              <p><span className="font-semibold">Location:</span> Maharashtra, India</p>
              <p><span className="font-semibold">Interest:</span> Web Development, AI, UI Design</p>
            </div>
          )}

        </div>

      </div>


      {/* Bottom Left Button */}
        <div className="absolute bottom-10 right-5 z-10">
          <a href="http://wa.me/919209123023">
            <img src={WhatsAppLogoIntegration} width={80} alt="" className="ms-14 fixed bottom-10 right-6 z-10"/>
          </a>
        </div>

    </section>
  )
}