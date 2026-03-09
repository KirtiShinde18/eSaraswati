
"use client"
import { useState, memo } from "react"
import CursorGlow from "./CursorGlow"
import { Eye, Target, TrendingUpIcon, } from "lucide-react"
import WhatsAppLogoIntegration from "../assets/whatsAppLogo.png"

function About() {

  const [activeTab, setActiveTab] = useState("company")
  const [selectedFeature, setSelectedFeature] = useState(null)

  const features = [
    {
      title: "Our Mission",
      desc: "To be the best ally globally in the area of education institute management through quality product, innovation, 24*7 customer service , professional expertise and continous improvement. Help educational Institutions around the world to gain efficiency, increase performance and cut the cost through innovative software services.",
      icon: <Target />,
      image: "/images/image-1.jpg"
    },
    {
      title: "Our Vision",
      desc: "Our Vision to change the education world using the technology. We are Burning the mid night oil to fulfil our vision. we have traveled a lot of milies to achive this vision and we have to travel lot more.",
      icon: <Eye />,
      image: "/images/image-2.jpg"
    },
    {
      title: "Our Values",
      desc: "Making the client’s success a priority. Making only those promises we can keep. Identifying our clients’ real needs, not just delivering a product.",
      icon: <TrendingUpIcon />,
      image: "/images/image-3.jpg"
    },
  ]


  return (
    <section id="about" className="py-32 px-6 text-white min-h-screen">

      {/* Cursor Glow */}
      <CursorGlow />
      <div className="max-w-7xl mx-auto text-center">

        <h1 className="sm:text-5xl text-4xl md:text-7xl font-bold mb-10 leading-tight font-display">
          <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
            About Us
          </span>
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">

          {["company","e-saraswati","OurSkills"].map((tab)=>(
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg border ${
                activeTab === tab
                  ? "bg-green-500 text-black"
                  : "border-white/30 hover:bg-white/10"
              }`}
            >
              {tab === "company" ? "Company" :
               tab === "e-saraswati" ? "e-Saraswati" :
               "Our Skills"}
            </button>
          ))}

        </div>

        

        <div className="p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300 card-glow">
          {/* COMPANY TAB */}
          {activeTab === "company" && (
            <div className="text-xl text-gray-300 leading-relaxed text-center">

              <p>
                <span className="text-green-400"><b>Kuldeep Websoft Pvt. Ltd.</b></span> have driven hundreds of business towards success and still going further with many possible clients.
                We have well trained professional who are always available to cater your needed things.
                <span className="text-green-400"><b> e-Saraswati</b></span> is our dream to change the education world.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-7">

                {features.map((f,i)=>(
                  <div
                    key={i}
                    onClick={()=>setSelectedFeature(f)}
                    className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300 card-glow cursor-pointer"
                  >

                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={f.image}
                        alt={f.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-8 flex justify-between gap-2 items-center">
                      <div className="w-12 h-12 flex items-center justify-center bg-green-500/20 rounded-xl">
                        {f.icon}
                      </div>

                      <h3 className="text-xl font-semibold font-display">
                        {f.title} 
                      </h3>

                      <span class="px-4 py-1 text-sm bg-green-500/10 border border-green-500/30 text-green-400 rounded-full">
                          View Details
                      </span>

                      
                    </div>

                    

                  </div>
                ))}

              </div>
            </div>
          )}

          {/* eSARASWATI TAB */}
          {activeTab === "e-saraswati" && (
            <div className="text-xl space-y-4 text-gray-300">

              <p className="text-2xl font-semibold py-2">
                What is e-Saraswati ?
              </p>

              <ul className="text-start space-y-3 list-disc pl-6">
                <li><b className="text-green-400">AI Assistant :</b> Auto extracts & uploads marks from images.</li>
                <li>Digital learning platform</li>
                <li><b className="text-green-400">Smart Connect :</b> WhatsApp, SMS, Email & Notification.</li>
                <li><b className="text-green-400">Access :</b> Anytime on web and mobile</li>
              </ul>

              <p className="text-2xl font-semibold py-2">
                How eSaraswati Benefits Educators ?
              </p>

              <ul className="text-start space-y-3 list-disc pl-6">
                <li><b className="text-green-400">Save Valuable Time :</b> Automated grading, attendance tracking, and report generation free up hours for what matters most—teaching and student interaction.</li>
                <li><b className="text-green-400">Enhanced Communication : </b>Built-in messaging and notification systems facilitate seamless communication with parents and students, keeping everyone informed.</li>
                <li><b className="text-green-400">Student & Account Tracking :</b> Easily monitor student progress, academic records, and financial accounts at your fingertips, ensuring comprehensive oversight.</li>
                <li><b className="text-green-400">AI-Powered Assessment :</b> AI scans score lists, saving almost 95% time on mark entry. We're continuously working on new AI innovations to further streamline tasks.</li>
                <li><b className="text-green-400">Automated ID Card Generation :</b> Generate professional ID cards effortlessly, saving schools almost 88% in time and cost compared to traditional methods.</li>
              </ul>

            </div>
          )}

          {/* OurSkills TAB */}
          {activeTab === "OurSkills" && (
            <div className="space-y-3 text-gray-300 text-xl">
              <p>
                <span className="text-green-400"><b>Kuldeep Websoft Pvt. Ltd.</b></span> has a dedicated team of hardworking and committed skilled professional. 
                The people at Kuldeep Websoft continuously strive to attain knowledge and increase their talent to provide the best quality solutions to our valued customers.We keep our self updated with latest Trends so our clients, can take rest and concentrate on business. 
                We had an array of multidisciplinary skilled employees forming the core of our capability.
              </p>

              

            </div>
          )}

        </div>

      </div>

      {/* Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-gradient-to-r from-green-400 to-green-600 border border-white/30 rounded-2xl p-8 max-w-md w-full relative">

            <button
              onClick={()=>setSelectedFeature(null)}
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

            <div className="flex justify-end mt-5">
              <button
                onClick={()=>setSelectedFeature(null)}
                className="px-5 py-2 bg-black text-white rounded-lg hover:bg-zinc-800 transition"
              >
                Cancel
              </button>
            </div>

          </div>

        </div>
      )}

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

    </section>
  )
}

export default memo(About)