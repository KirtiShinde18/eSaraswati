
"use client"
import { useState, memo, useEffect, useRef } from "react"
import CursorGlow from "./CursorGlow"
import { Eye, Target, TrendingUpIcon, } from "lucide-react"
import WhatsAppLogoIntegration from "../assets/whatsAppLogo.png"

// image 
import future1 from "../assets/future-1.png"
import future2 from "../assets/future-2.png"
import future3 from "../assets/future-3.png"
import future4 from "../assets/future-4.png"
import future5 from "../assets/future-5.png"
import Footer from "../components/Footer"

function About() {

  const [activeTab, setActiveTab] = useState("company")
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [startAnim, setStartAnim] = useState(false);
  const imageRefs = useRef([])

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
  ];

  const products = [
    {
      title: "LABPLEX",
      desc: "To be the best ally globally in the area of education institute management through quality product, innovation, 24*7 customer service , professional expertise and continous improvement. Help educational Institutions around the world to gain efficiency, increase performance and cut the cost through innovative software services.",
      image: "/images/labplex.png",
      link : "https://www.kdwebsoft.com/index.php/labplex/"
    },
    {
      title: "INTELLITEST",
      desc: "Our Vision to change the education world using the technology. We are Burning the mid night oil to fulfil our vision. we have traveled a lot of milies to achive this vision and we have to travel lot more.",
      image: "/images/intellitest.png",
      link : "https://www.kdwebsoft.com/index.php/intellitest/"
    },
    {
      title: "TRANSACTIPRO",
      desc: "Making the client’s success a priority. Making only those promises we can keep. Identifying our clients’ real needs, not just delivering a product.",
      image: "/images/transactipro.png",
      link : "https://www.kdwebsoft.com/index.php/transactipro/"
    },
  ];

  const futureTechnology = [
    {
      img: future1,
      width: 90,
      title: "Innovation-Driven",
      text: "Our agile development approach constantly pushes boundaries to deliver cutting-edge digital solutions."
    },
    {
      img: future2,
      width: 90,
      title: "Unwavering Quality",
      text: "We ensure meticulous quality assurance at every stage, guaranteeing robust and reliable software."
    },
    {
      img: future3,
      width: 90,
      title: "Client Success First",
      text: "Your objectives are our mission; we prioritize building lasting partnerships for mutual success."
    },

    {
      img: future4,
      width: 90,
      title: "Diverse Industry Acumen",
      text: "Our broad experience spans various sectors, providing versatile and adaptable technological insights."
    },

    {
      img: future5,
      width: 90,
      title: "Continuous Evolution",
      text: "We offer ongoing support and embrace iterative improvement, ensuring your solutions remain future-proof."
    },
  ]

  // progress bar animation 
  useEffect(() => {
  if (activeTab === "Our Products") {
    setTimeout(() => {
      setStartAnim(true)
    }, 200)
  }
}, [activeTab])

    //=========================== Image Animation start =========================== 

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
    
    }, [activeTab]);


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
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
        
          {["company","e-saraswati","Our Products"].map((tab)=>(
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base rounded-lg border transition ${
                activeTab === tab
                  ? "bg-green-500 text-black"
                  : "border-white/30 hover:bg-white/10"
              }`}
            >
              {tab === "company" ? "Company" :
               tab === "e-saraswati" ? "e-Saraswati" :
               "Our Products"}
            </button>
          ))}
        
        </div>

        <div className="p-10  rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300 card-glow">
          {/* COMPANY TAB */}
          {activeTab === "company" && (
            <div className=" text-gray-300 leading-relaxed text-start sm:text-center">
              {/* heading  */}
              <h1 className="mt-10 sm:text-3xl text-2xl md:text-4xl font-bold mb-10 leading-tight font-display">
                <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
                  KD Websoft: Forging the Future of Technology
                </span>
              </h1>

              <p>As a pioneering web and software development company, KD Websoft stands at the forefront of digital innovation. 
                We leverage our deep expertise to craft bespoke solutions, specializing in transformative education technology and powerful 
                business applications that drive progress and inspire growth. Discover more at <span className="text-green-400"><b>kdwebsoft.com.</b></span> </p>            

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-10">
                    {futureTechnology.map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <img
                          src={item.img}
                          width={item.width}
                          alt=""
                          ref={(el) => (imageRefs.current[i] = el)}
                          className="animate-on-scroll mb-3"
                        />
                        <p className="text-lg text-green-400"><b>{item.title}</b></p>
                        <p className="text-gray-300">{item.text}</p>
                      </div>
                    ))}
                </div>
            </div>
          )}

          {/* eSARASWATI TAB */}
          {activeTab === "e-saraswati" && (
            <div className=" space-y-4 text-gray-300">

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
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center bg-green-500/20 rounded-xl">
                        {f.icon}
                      </div>

                      <h3 className="text-xl font-semibold font-display">
                        {f.title} 
                      </h3>

                      <span class="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm bg-green-500/10 border border-green-500/30 text-green-400 rounded-full whitespace-nowrap">
                        View Details
                      </span>

                      
                    </div>

                    

                  </div>
                ))}

              </div>

              <h1 className="mt-10 sm:text-3xl text-2xl md:text-4xl font-bold mb-10 leading-tight font-display">
                <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
                  What is e-Saraswati ?
                </span>
              </h1>

              <ul className="text-start space-y-3 list-disc pl-6">
                <li><b className="text-green-400">AI Assistant :</b> Auto extracts & uploads marks from images.</li>
                <li>Digital learning platform</li>
                <li><b className="text-green-400">Smart Connect :</b> WhatsApp, SMS, Email & Notification.</li>
                <li><b className="text-green-400">Access :</b> Anytime on web and mobile</li>
              </ul>


              <h1 className="mt-10 sm:text-3xl text-2xl md:text-4xl font-bold mb-10 leading-tight font-display">
                <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
                  How eSaraswati Benefits Educators ?
                </span>
              </h1>

              <ul className="text-start space-y-3 list-disc pl-6">
                <li><b className="text-green-400">Save Valuable Time :</b> Automated grading, attendance tracking, and report generation free up hours for what matters most—teaching and student interaction.</li>
                <li><b className="text-green-400">Enhanced Communication : </b>Built-in messaging and notification systems facilitate seamless communication with parents and students, keeping everyone informed.</li>
                <li><b className="text-green-400">Student & Account Tracking :</b> Easily monitor student progress, academic records, and financial accounts at your fingertips, ensuring comprehensive oversight.</li>
                <li><b className="text-green-400">AI-Powered Assessment :</b> AI scans score lists, saving almost 95% time on mark entry. We're continuously working on new AI innovations to further streamline tasks.</li>
                <li><b className="text-green-400">Automated ID Card Generation :</b> Generate professional ID cards effortlessly, saving schools almost 88% in time and cost compared to traditional methods.</li>
              </ul>

            </div>
          )}

          {/* Our Products TAB */}
            {activeTab === "Our Products" && (
              <div className="space-y-8 text-gray-300 text-start sm:text-center">
            
                <p>
                  Explore our range of high-quality products designed to deliver reliability, performance, and innovation for your needs.
                </p>

                {/* Products Grid */}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-7">

                {products.map((f,i)=>(
                  <div
                    key={i}
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

                      <h3 className="text-xl font-semibold font-display">
                        {f.title} 
                      </h3>

                      <a href={f.link} target="_blank" rel="noopener noreferrer">
                        <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm bg-green-500/10 border border-green-500/30 text-green-400 rounded-full whitespace-nowrap">
                          View
                        </span>
                      </a>

                      
                    </div>

                    

                  </div>
                ))}

              </div>

            
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

      <Footer/>
    </section>
    
  )
}

export default memo(About)