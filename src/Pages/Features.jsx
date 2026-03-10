
"use client"
import { useState, memo, useRef, useEffect } from "react"
import CursorGlow from "./CursorGlow"
import WhatsAppLogoIntegration from "../assets/whatsAppLogo.png"
import { AppWindowMac, BellDotIcon, BookUser, ChevronLeft, ChevronRight, Database, FileHeart, FileSymlink, FileUser, Globe, HandHeart, Handshake, LockIcon, NotebookPen, ShieldCheck, Smartphone, Sparkles, TimerIcon, TrendingUp, User, UserPen, Users, UserX, Zap } from "lucide-react"

// images 
import ai1 from "../assets/ai-1.png"
import ai2 from "../assets/ai-2.png"
import ai3 from "../assets/ai-3.png"
import ai4 from "../assets/ai-4.png"


function Features() {

    const [activeTab, setActiveTab] = useState("Academics")
    // const [selectedFeature, setSelectedFeature] = useState(null)
    const [activeIndex, setActiveIndex] = useState(-1);
    const itemRefs = useRef([]);

    const carouselRef = useRef(null);
    const [index, setIndex] = useState(0);


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
    
    ];

    const reportingSystem = [
        { title: "Extensive Reports", desc: "12+ different report types available & along with customized  report from each page of app. " },
        { title: "Customization", desc: "Custom report generation on demand" },
        { title: "Financial Tracking", desc: "Financial reports and fee tracking" },
       
    ];

    const aiFeatures = [
        {
          img: ai1,
          width: 90,
          text: "AI-assisted data entry for exam results & Admission Form"
        },
        {
          img: ai2,
          width: 80,
          text: "Automated mark calculation and grade assignment"
        },
        {
          img: ai3,
          width: 80,
          text: "Excel bulk import with intelligent validation & Auto Creation of Class, Section etc."
        },
        {
          img: ai4,
          width: 50,
          text: "Smart error detection and correction suggestions"
        }
    ]

    const UserRole = [
      {
        img: ai1,
        width: 90,
        text: "AI-assisted data entry for exam results & Admission Form"
      },
    ]

    const additionModule = [
      {
        img: ai1,
        width: 90,
        text: "AI-assisted data entry for exam results & Admission Form"
      },
    ]

    const cards = [
    {
      icon: <UserPen className="w-8 h-8 text-white" />,
      title: "Holiday",
      desc: "Plan and track academic calendar, public holidays, and school-specific breaks",
      gradient: "from-emerald-500 to-emerald-700"
    },
    {
      icon: <BookUser className="w-8 h-8 text-white" />,
      title: "Event Management",
      desc: "Organize school events, competitions, cultural programs, and parent meetings",
      gradient: "from-violet-500 to-violet-700"
    },
    {
      icon: <NotebookPen className="w-8 h-8 text-white" />,
      title: "Feedback",
      desc: "Enables anyone to share feedback or suggestions via a public link.",
      gradient: "from-yellow-500 to-yellow-700"
    },
    {
      icon: <UserX className="w-8 h-8 text-white" />,
      title: "Complain",
      desc: "Enables anyone to submit complaints or issues via a public link.",
      gradient: "from-red-500 to-red-700"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "PTM (Parent-Teacher Meeting)",
      desc: "Schedule meetings, track attendance, and manage feedback",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <TimerIcon className="w-8 h-8 text-white" />,
      title: "Appointment",
      desc: "Enables anyone to book appointments with the school via a public link.",
      gradient: "from-pink-500 to-pink-700"
    },
    {
      icon: <AppWindowMac className="w-8 h-8 text-white" />,
      title: "Intergation to Website",
      desc: "Seamlessly connects all portals and features directly with the school’s website.",
      gradient: "from-gray-500 to-gray-700"
    },
    {
      icon: <FileHeart className="w-8 h-8 text-white" />,
      title: "Certificate Management ",
      desc: "Certificate Management System with Customizable Certificate Categories.",
      gradient: "from-amber-500 to-amber-700"
    }
  ]


    // timeline 
    useEffect(() => {

      if (activeTab !== "Ai & Advance") return;
    
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number(entry.target.dataset.index);
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: "-80px 0px"
        }
      );
    
      itemRefs.current.forEach((el) => {
        if (el) observer.observe(el);
      });
    
      return () => observer.disconnect();

    }, [activeTab]);

    //=========================== Image Animation start =========================== 
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
    
    }, [activeTab]);

  // carousel start 

    const scrollToCard = (i) => {
      const cardWidth = 320 + 24;
      carouselRef.current.scrollTo({
        left: i * cardWidth,
        behavior: "smooth"
      });
      setIndex(i);
    };
  
    const next = () => {
      const newIndex = index < cards.length - 1 ? index + 1 : 0;
      scrollToCard(newIndex);
    };
  
    const prev = () => {
      const newIndex = index > 0 ? index - 1 : cards.length - 1;
      scrollToCard(newIndex);
    };
  
    // auto scroll
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     const newIndex = index < cards.length - 1 ? index + 1 : 0;
    //     scrollToCard(newIndex);
    //   }, 4000);
  
    //   return () => clearInterval(interval);
    // }, [index]);
    // carousel end

  return (
      <section id="feature" className="py-32 px-6 text-white min-h-screen">

      {/* Cursor Glow */}
      <CursorGlow />
      <div className="max-w-7xl mx-auto text-center">

        <h1 className="sm:text-5xl text-4xl md:text-7xl font-bold mb-10 leading-tight font-display">
          <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
             Features 
          </span>
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
        
          {["Academics","Management","Ai & Advance"].map((tab)=>(
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base rounded-lg border transition ${
                activeTab === tab
                  ? "bg-green-500 text-black"
                  : "border-white/30 hover:bg-white/10"
              }`}
            >
              {tab === "Academics" ? "Academics" :
               tab === "Management" ? "Management" :
               "Ai & Advance"}
            </button>
          ))}
        
        </div>

        {/* <div className="p-10  rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300 card-glow"> */}
          {/* Academics TAB */}
          {activeTab === "Academics" && (
            <div className=" text-gray-300 leading-relaxed text-start sm:text-center">

              <h1 className="text-3xl my-10 font-bold  leading-tight font-display text-center mb-5">
                <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
                    User Roles & Dashboard
                </span>
          
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">
                    {UserRole.map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <img
                          src={item.img}
                          width={item.width}
                          alt=""
                          ref={(el) => (imageRefs.current[i] = el)}
                          className="animate-on-scroll mb-3"
                        />
                        <p className="text-gray-300">{item.text}</p>
                      </div>
                    ))}
              </div>

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
          )}

          {/* Management TAB */}
          {activeTab === "Management" && (
            <div className=" space-y-4 text-gray-300">

                <h1 className="text-3xl my-10 font-bold  leading-tight font-display text-center mb-5">
                    <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
                        Additional Academic Operations
                    </span>
          
                </h1>

                {/* carousel start  */}
                <div className="relative max-w-5xl mx-auto">

                  {/* Buttons */}
                  <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center"
                  >
                    <ChevronLeft className="text-white"/>
                  </button>
            
                  <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center"
                  >
                    <ChevronRight className="text-white"/>
                  </button>
            
                  {/* Carousel */}
                  <div
                    ref={carouselRef}
                    className="flex gap-6 overflow-x-auto px-4 py-8 scroll-smooth no-scrollbar"
                  >
                    {cards.map((card, i) => (
                      <div
                  key={i}
                  className="flex-shrink-0 w-80 rounded-2xl p-6 bg-gradient-to-r from-green-300 to-green-400"
                >
                  {/* Icon + Title in one line */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${card.gradient}`}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black">
                      {card.title}
                    </h3>
                  </div>
                
                  {/* Description */}
                  <p className="text-black text-sm">
                    {card.desc}
                  </p>
                </div>
                    ))}
                  </div>
            
                  {/* dots */}
                  <div className="flex justify-center gap-3">
                    {cards.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToCard(i)}
                        className={`w-3 h-3 rounded-full ${
                          i === index ? "bg-green-500" : "bg-slate-600"
                        }`}
                      />
                    ))}
                  </div>

                </div>
                {/* carousel end */}

                <h1 className="mt-20 text-3xl my-10 font-bold  leading-tight font-display text-center mb-5">
                    <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
                        Addition Management Modules
                    </span>
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">
                    {additionModule.map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <img
                          src={item.img}
                          width={item.width}
                          alt=""
                          ref={(el) => (imageRefs.current[i] = el)}
                          className="animate-on-scroll mb-3"
                        />
                        <p className="text-gray-300">{item.text}</p>
                      </div>
                    ))}
                </div>


            </div>
          )}

          {/* Ai & Advance TAB */}
          {activeTab === "Ai & Advance" && (
            <div className="space-y-3 text-gray-300 text-start sm:text-center">
                <p className="text-lg">These features save significant time and improve efficiency across various school operations.</p>

                <h1 className="text-3xl my-10 font-bold  leading-tight font-display text-center mb-5">
                    <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
                        AI-Powered Exam Management
                    </span>
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">
                    {aiFeatures.map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <img
                          src={item.img}
                          width={item.width}
                          alt=""
                          ref={(el) => (imageRefs.current[i] = el)}
                          className="animate-on-scroll mb-3"
                        />
                        <p className="text-gray-300">{item.text}</p>
                      </div>
                    ))}
                </div>

                <h1 className=" mt-36 text-3xl my-10 font-bold  leading-tight font-display text-center mb-5">
                    <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
                        Comprehensive Reporting System
                    </span>
                </h1>

                {/* card start */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {reportingSystem.map((f, i) => (
                      <div
                        key={i}
                        // className="bg-zinc-900 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 ease-out card-glow"
                        className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300 card-glow"
                      >
       
                        <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                        <p className="text-gray-400">{f.desc}</p>
                      </div>
                    ))}

                </div>
                {/* card end  */}

                <h1 className="mt-36 text-3xl my-10 font-bold  leading-tight font-display text-center mb-5">
                    <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
                     Complete eSaraswati Module Suite
                    </span>
          
                </h1>

                {/* timeline  */}
                <div className=" mt-10 max-w-3xl mx-auto  relative border-l border-green-500/30 pl-8 space-y-10">
        
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
          )}

        {/* </div> */}

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

    </section>
  )
}

export default memo(Features)