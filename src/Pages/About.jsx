"use client"
import { useState } from "react"
import CursorGlow from "./CursorGlow"

export default function About() {

  const [activeTab, setActiveTab] = useState("company")

  return (
    <section id="about" className="py-32 px-6 text-white min-h-screen">
    <CursorGlow/>
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-7xl font-bold mb-10 leading-tight font-display">
          <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
            About Us
          </span>
          
        </h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-10">

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
        {/* <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-left"> */}
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300 card-glow">

          {activeTab === "company" && (
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-green-400"><b>Kuldeep Websoft Pvt. Ltd.</b></span> have driven hundreds of business towards success and still going further with many possible clients. 
              We have well trained professional who are always available to cater your needed things.In this journery we have built a lot of 
              softwares for various fields, e-Sarsawati School Manager is one of them. <span className="text-green-400"><b>e-Saraswati</b></span> is our dream to change the education world.
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
    </section>
  )
}