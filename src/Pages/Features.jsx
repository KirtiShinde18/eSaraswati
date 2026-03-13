
"use client"
import { useState, memo, useRef, useEffect } from "react"
import CursorGlow from "./CursorGlow"
import WhatsAppLogoIntegration from "../assets/whatsAppLogo.png"
import { AppWindowMac, ArrowRight, Bed, BellDotIcon, Book, BookUser, CalendarCheck, CircleUser, Cuboid, Database, Equal, File, FileHeart, FileSymlink, FileUser, FingerprintIcon, FingerprintPattern, Form, ForwardIcon, GraduationCap, HandHeart, Home, Library, LockIcon, MessageCircle, MonitorCheck, NotebookIcon, NotebookPen, NotebookPenIcon, School, Smartphone, TimerIcon, User, UserCheck, UserCog, UserPen, UserRoundX, Users, UserX, Van } from "lucide-react"
import CountUp from "react-countup"

// images from assets 
import Module3D1 from "../assets/module3D-1.png"
import Module3D2 from "../assets/module3D-2.png"
import Module3D3 from "../assets/module3D-3.png"
import Module3D5 from "../assets/module3D-5.png"
import Module3D7 from "../assets/module3D-7.png"

import ai1 from "../assets/ai-1.png"
import ai2 from "../assets/ai-2.png"
import ai3 from "../assets/ai-3.png"
import ai4 from "../assets/ai-4.png"
import ai5 from "../assets/ai-5.png"
import ai8 from "../assets/ai-8.png"

function Features() {
  const [activeTab, setActiveTab] = useState("Academics")
  const [selectedModule, setSelectedModule] = useState(null);

const AcademicsModules = [
  { 
    img : Module3D1,
    width : 90,
    title: "Core Academic Modules", 
    link : "#",
    count: 3,
    modules : [
      { 
          icon : <MonitorCheck size={50} className="text-green-400 my-3" strokeWidth={1}/>,
          title: "Front Desk/Administration", 
          desc: [
            "Admission Enquiry/Form with Form Fee Facility",
            "Follow Up",
            "Advertisement Performance Index with Graphs & charts",
            "Visitor Management",
            "Parcel Management",
            "Student Early Leave Management"
          ] 
      },
      { 
        icon : <GraduationCap size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        title: "Student Management", 
        desc: [
          "Student Management",
          "Document Management",
          "ID Card Generator",
          "Student Bulk Import Through Excel",
          "TC & CC with Customized templates",
          "SR Report",
          "Income & birth certificate",
          "Bulk Image Upload",
          "Auto Roll NO Generator",
          "Bulk Edit using Table & Excel",
          "Parent–staff conversation tracking",
        ] 
      },
      { 
        icon : <CircleUser size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        title: "Account", 
        desc: [
          "Dashboard with Account States Total & Day Wise with Graphs & charts",
          "Account Reports",
          "Income & Expense Management",
          "Fee Management with Discount Facilities",
          "One-Tip Payment",
          "Challan Generator (pro)",
          "Transaction Auto Info to Parents/Head of Institute",
      
        ] 
      },
    ]
    
  },
  { 
    img : Module3D2,
    width : 95,
    title: "Academic Operations", 
    link : "#",
    count: 6,
    modules : [
      { 
        icon : <UserCheck size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        title: "Attendance", 
        desc: [
          "Student Attendance Management",
          "Auto Info to Parents",
          "Month/Year Wise Attendance Report",
        ] 
      },
      { 
        icon : <NotebookPen size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        title: "Exam Management", 
        desc: [
          "Grade Management",
          "Enter Marks in Simple Way",
          "Mark Sheets for Individual or Group of Exam",
          "Rank & Mark List",
          "Send marks on SMS/Whatsapp",
          "Exam Time Table & Hall Ticket",
          "Customized marksheet on demand ( Having 28+ design Already)",
        ] 
      },
      { 
        icon : <MessageCircle size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        title: "Communication", 
        desc: [
          "SMS, Email, Notice, WhatsApp Message",
          "No Template approval required for whatsapp ",
          "Auto SMS/Email Management",
          "Notification (pro)",
        ] 
      },
      { 
        icon : <Van size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        title: "Transport", 
        desc: [
          "Manage Route",
          "Student Report Route Wise",
          "GPS Tracking(pro)",
        ] 
      },

      { 
        icon : <User size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        title: "HR", 
        desc: [
          "Staff Management",
          "Staff ID Card Generator",
          "Staff Bulk Add",
          "Staff attendance",
          "Staff Leave",
          "Salary Management",
        ] 
      },
       { 
        icon : <File size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        title: "Integrated Printing & Document Solutions", 
        desc: [
          "One-click generation for Staff ID Cards",
          "Print Staff Visiting Cards",
          "Generate Student ID Cards",
          "Automated Experience Letters for Staff",
          "Bonafide and various Academic Certificates",
          "Customized document printing on demand",
        ] 
      },

    ]
    
  },
  { 
    img : Module3D3,
    width : 95,
    title: "Additional Academic Operations", 
    link : "#",
    count: 8,
    modules: [
    {
      icon: <UserPen size={50} className="text-green-400 my-3" strokeWidth={1} />,
      title: "Holiday",
      desc: [
        "Plan and track academic calendar, public holidays, and school-specific breaks"
      ]

    },
    {
      icon: <BookUser size={50} className="text-green-400 my-3" strokeWidth={1}/>,
      title: "Event Management",
      desc: [
        "Organize school events, competitions, cultural programs, and parent meetings"
      ],

    },
    {
      icon: <NotebookPen size={50} className="text-green-400 my-3" strokeWidth={1}/>,
      title: "Feedback",
      desc: [
        "Enables anyone to share feedback or suggestions via a public link."
      ],

    },
    {
      icon: <UserX size={50} className="text-green-400 my-3" strokeWidth={1}/>,
      title: "Complain",
      desc: [
        "Enables anyone to submit complaints or issues via a public link."
      ],

    },
    {
      icon: <Users size={50} className="text-green-400 my-3" strokeWidth={1}/>,
      title: "PTM (Parent-Teacher Meeting)",
      desc: [
        "Schedule meetings, track attendance, and manage feedback"
      ],

    },
    {
      icon: <TimerIcon size={50} className="text-green-400 my-3" strokeWidth={1}/>,
      title: "Appointment",
      desc: [
        "Enables anyone to book appointments with the school via a public link."
      ],
    },
    {
      icon: <AppWindowMac size={50} className="text-green-400 my-3" strokeWidth={1}/>,
      title: "Intergation to Website",
      desc: [
        "Seamlessly connects all portals and features directly with the school’s website."
      ],
    },
    {
      icon: <FileHeart size={50} className="text-green-400 my-3" strokeWidth={1}/>,
      title: "Certificate Management ",
      desc: [
        "Certificate Management System with Customizable Certificate Categories."
      ],
    }
  ]
    
  },
  { 
    img : Module3D5,
    width : 95,
    title: "Additional Management Modules", 
    link : "#",
    count: 6,
    modules: [
      {
        icon: <UserCheck size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        text: "Class/Batch Management",
        desc: [ "Efficiently organize students into classes and batches, simplifying academic administration and tracking." ]
      },
      {
        icon: <Book size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        text: "Subject Management",
        desc:[  "EManage all academic subjects, assign teachers, and track curriculum details with ease." ]
      },
      {
        icon: <NotebookPenIcon size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        text: "Home Work & Notes Management",
        desc: [ "Assign, collect, and track homework efficiently, providing students and parents with clear visibility." ]
      },
      {
        icon: <Home size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        text: "House , Locality , Club & Section Management",
        desc: [  "Categorize students into houses and sections , Locality , Club for streamlined co-curricular activities and administrative divisions." ]
      },
      {
        icon: <CalendarCheck size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        text: "Routine Management",
        desc: [ "Create and manage daily class schedules, ensuring optimal utilization of resources and time."]
      },
      {
        icon: <UserRoundX size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        text: "Users Right Management",
        desc: ["Define and control user access levels, ensuring data security and proper authorization for each role within the system."]
      },
    ]
    
  },
  { 
    img : ai8,
    width : 95,
    title: "Pro Features", 
    link : "#",
    count: 6,
    modules : [
      {
        icon: <FingerprintPattern size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        text: "Biometric Attendance",
        desc: [ "Teacher attendance management powered by biometric and geo-fencing technologies to ensure precision, security, and accountability" ]
      },
      {
        icon: <Smartphone size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        text: "Mobile APP",
        desc: [
          "For Staff & Admin",
          "Track Attendance & Tasks",
          "Receive Instant Notifications",
          "Access Reports Anytime"
        ]
      },
      
      {
        icon: <Library size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        text: "Library",
        desc: [ 
          "Manage Book Stock",
          "Barcode",
          "Manage Lib Members Class Wise / All with book & time limit ",
          "Issue / Return"
        ]
      },
      {
        icon: <Cuboid size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        text: "Inventory",
        desc: [ 
          "Manage Supplier",
          "Manage Store",
          "Manage Items ",
          "Issue & Return Item"
        ]
      },
      {
        icon: <Bed size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        text: "Hostel",
        desc: [ 
          "Manage Hostel",
          "Student Leave Management ",
          "Manage Room ",
          "Issue students in hostel"
        ]
      },
      {
        icon: <Form size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        text: "Session Registration Form",
        desc: [
          "Register for upcoming sessions",
          "Provide accurate personal details",
          "Secure your spot quickly",
          "Receive session updates via email"
        ]
        
      },
      
    ]
 
  },
  { 
    img : Module3D7,
    width : 95,
    title: "Complete E-Saraswati Module Suite", 
    link : "#",
    count: 8,
    modules: [
        {
          title: "Security",
          desc: ["Authentication token & OTP login, Cloud Securities, Latest Technology, User Password Change, Admin Control Rights"],
          icon: <LockIcon size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        },
          {
          title: "Extensive Pre-Built Templates",
          desc: ["Includes TC, CC, Marksheet, ID & Admit Cards, Score List, Salary Slip, Invoice, and Admission Form."],
          icon: <FileUser size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        },
        {
          title: "Data Export",
          desc: ["Excel & PDF in one Click"],
          icon: <FileSymlink size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        },
    
        {
          title: "Auto Notifications",
          desc: ["SMS/Email/App/WhatsApp"],
          icon: <BellDotIcon size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        },
        {
          title: "Multi-Branch Management",
          icon: <Users size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        },
        {
          title: "Multiple Session Management",
          icon: <Database size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        },
        {
          title: "Mobile Responsive & User Friendly UI",
          icon: <Smartphone size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        },
       
         {
          title: "Payment Gateway Integration",
          icon: <HandHeart size={50} className="text-green-400 my-3" strokeWidth={1}/>,
        },
    
    ]
    
  },
]
  // ========== AI Modules ==========
  const AiModules = [
    { 
      img: ai1,
      width: 95,
      title: "Ai-Powered Exam Management",
      count: 4,
      modules: [
        { img: ai5, desc: ["AI-assisted data entry for exam results & Admission Form"] },
        { img: ai2, desc: ["Automated mark calculation and grade assignment"] },
        { img: ai3, desc: ["Excel bulk import with intelligent validation & Auto Creation of Class, Section etc."] },
        { img: ai4, desc: ["Smart error detection and correction suggestions"] },
      ]
    },

    { 
    img : Module3D7,
    width : 95,
    title: "Reporting & Finance", 
    link : "#",
    count: 3,
    modules: [
        { title: "Extensive Reports", desc: ["12+ different report types available & along with customized  report from each page of app. "] },
        { title: "Customization", desc: ["Custom report generation on demand" ]},
        { title: "Financial Tracking", desc: ["Financial reports and fee tracking"] },
       
    ]
    
  },
  ]

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

  return (
      <section id="feature" className="py-15 md:py-32 px-6 text-white min-h-screen">

      {/* Cursor Glow */}
      <CursorGlow />


      <div className="max-w-7xl mx-auto text-center">

        {/* heading  */}
        <h1 className="sm:text-5xl text-4xl md:text-7xl font-bold mb-10 leading-tight font-display">
          <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
             Features 
          </span>
        </h1>


        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">

          {/* Tabs */}
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            {["Academics", "Ai & Advance"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 sm:px-6 sm:py-2 text-sm sm:text-base rounded-lg border transition ${
                  activeTab === tab
                    ? "bg-green-500 text-black"
                    : "border-white/30 hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        
          {/* Module Count Button */}
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs sm:text-sm">
            <CountUp end={45} duration={1.5} /> Modules
          </button>


        </div>
        
        {/* Academics TAB */}
        {activeTab === "Academics" && (
          <div className="space-y-4 text-gray-300 ">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-10 ">
              {AcademicsModules.map((item, i) => (
                <div 
                key={i} 
                // className="flex flex-col items-center">
                className="text-start p-8 rounded-2xl bg-white/[0.02] border border-green-500/30 transition-all duration-300 flex flex-col">

                  <div className="flex items-center gap-6 mb-6">

                    <img
                      src={item.img}
                      width={item.width}
                      alt=""
                      ref={(el) => (imageRefs.current[i] = el)}
                      className="animate-on-scroll"
                    />
                  
                    <h1 className="text-xl font-bold leading-tight font-display">
                      <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
                        {item.title}
                      </span>
                    </h1>

                  </div>

                  <div className="flex items-center justify-center gap-7 mt-4">

                    {/* Modules Count Bubble */}
                    {/* <span className="px-3 py-1 text-sm rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400"> */}
                    <span className="px-3 py-1 text-sm rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 animate-pulse">
                      <CountUp end={item.count} duration={1.5} /> Modules
                    </span>
                  
                    {/* View Button */}
   
                    <button
                      onClick={() => setSelectedModule(item)}
                      className="inline-flex items-center gap-1 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-green-500/10 border border-green-500/30 text-green-400 rounded-full hover:bg-green-500/20 transition"
                    >
                      View Details <ArrowRight size={16} className="sm:size-[20px]" />
                    </button>

                  </div>
        
                </div>
              ))}
            </div>
            
        
          </div>
        )}
        
        {/* AI & Advance TAB */}
        {activeTab === "Ai & Advance" && (
          <div className="space-y-4 text-gray-300">

            <p className="text-start text-xl">These features save significant time and imporove efficient across various school operations </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-10">
              {AiModules.map((item, i) => (
                <div 
                key={i} 
                // className="flex flex-col items-center">
                className="text-start p-8 rounded-2xl bg-white/[0.02] border border-green-500/30 transition-all duration-300 flex flex-col">

                  <div className="flex items-center gap-6 mb-6">

                    <img
                      src={item.img}
                      width={item.width}
                      alt=""
                      ref={(el) => (imageRefs.current[i] = el)}
                      className="animate-on-scroll"
                    />
                  
                    <h1 className="text-xl font-bold leading-tight font-display">
                      <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
                        {item.title}
                      </span>
                    </h1>

                  </div>

                  <div className="flex items-center justify-center gap-7 mt-4">

                    {/* Modules Count Bubble */}
                    {/* <span className="px-3 py-1 text-sm rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400"> */}
                    <span className="px-3 py-1 text-sm rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 animate-pulse">
                      <CountUp end={item.count} duration={1.5} /> Modules
                    </span>
                  
                    {/* View Button */}
   
                    <button
                      onClick={() => setSelectedModule(item)}
                      className="inline-flex items-center gap-1 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-green-500/10 border border-green-500/30 text-green-400 rounded-full hover:bg-green-500/20 transition"
                    >
                      View Details <ArrowRight size={16} className="sm:size-[20px]" />
                    </button>

                  </div>
        
                </div>
              ))}
            </div>


        
          </div>
        )}


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

      {/* modal start  */}
      {selectedModule && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6 ">
    <div className="bg-zinc-900 border border-green-500/30 rounded-2xl p-10 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
      
      <button
        onClick={() => setSelectedModule(null)}
        className="absolute top-5 right-6 text-gray-400 hover:text-white text-xl"
      >
        ✕
      </button>

      <div className="flex items-center justify-center gap-3 sm:flex-col">

        <img src={selectedModule.img} className="w-20 sm:w-[120px]" />
        
        <h2 className="text-sm sm:text-3xl font-bold text-left sm:text-center font-display">
          <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
            {selectedModule.title}
          </span>

          <p className="text-center text-indigo-400 mb-8">
            {selectedModule.count} Modules
          </p>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {selectedModule.modules?.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/[0.02] flex flex-col"
          >
            {/* Icon / Image */}
            <div className="flex justify-center mb-4">
              {f.icon ? f.icon : f.img ? <img src={f.img} width={80} alt="" /> : null}
            </div>

            {/* Title or Text */}
            <h3 className="text-lg font-semibold mb-4 text-center">
              {f.title || f.text || "No Title"}
            </h3>

            {/* Description list */}
            <ul className="space-y-2 text-gray-400 text-sm">
              {(f.desc || []).map((point, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

          </div>
        )) || <p className="text-center text-gray-500">No Modules Available</p>}

      </div>

      <div className="flex justify-end mt-5">
        <button 
          onClick={() => setSelectedModule(null)}
          className="bg-gradient-to-r from-green-500 to-indigo-500 px-4 py-2 rounded-lg text-white cursor-pointer"
        >
          Cancel
        </button>
      </div>

    </div>
  </div>
)}
      {/* modal end */}


    </section>
  )
}

export default memo(Features)