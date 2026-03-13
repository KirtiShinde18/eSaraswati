import React, { useState } from 'react'
import CursorGlow from './CursorGlow'

// images 
import ContactPng from "../assets/Contact.png"
import { LocationEdit, Mail, Phone, PhoneCall } from 'lucide-react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {

    let newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.body.trim().length < 10) {
      newErrors.body = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const sendMail = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {

      const res = await fetch("http://localhost:8080/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: formData.email,
          email: formData.email,
          name: formData.name,
          subject: formData.subject,
          body: formData.body
        })
      });

      const data = await res.json();
      console.log(data);

      alert("Message Sent Successfully ✅");

      setFormData({
        name: "",
        email: "",
        subject: "",
        body: ""
      });

      setErrors({});

    } catch (error) {
      console.log(error);
      alert("Error sending message ❌");
    }
  };

  return (

  <section className="py-15 md:py-32 px-6 text-white min-h-screen">

    <CursorGlow />

    <div className="max-w-7xl mx-auto text-center">

      <h1 className="sm:text-5xl text-4xl md:text-7xl font-bold leading-tight font-display">
        <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
          Contact
        </span>
      </h1>

      

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row gap-12">

        {/* Left: Image + Form */}
        <div className="md:w-1/2 flex flex-col items-center relative">
          
      
          {/* Image */}
          <div className="w-full flex justify-start relative z-20">
            <img 
              src={ContactPng} 
              alt="Contact Image" 
              className="w-50 sm:w-72 md:w-80 lg:w-96 h-auto object-contain"
            />
          </div>
      
          {/* Form */}
          <div className="w-full bg-zinc-900 border border-green-500/30 p-8 rounded-xl shadow relative z-0  md:-mt-16 -mt-10">
            <form className="space-y-6">
              <h1 className="mt-10 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-display">
                <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
                  Reach out anytime
                </span>
              </h1>
      
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"/>
                <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"/>
              </div>
      
              <input type="text" placeholder="Subject" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"/>
              <textarea rows="5" placeholder="Message" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"/>
      
              <div className="flex justify-center mt-4">
                <button className="bg-gradient-to-r from-green-500 to-indigo-500 px-6 py-3 rounded-lg text-white cursor-pointer">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      
        {/* Right: Contact Details */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
      
          {/* Heading */}
          <div className="text-center md:text-center">
            <h2 className="mb-10 text-4xl sm:text-5xl font-bold font-display bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className=" text-gray-300 text-lg sm:text-xl">
              Always here to answer your questions, feel free to connect 💬
            </p>
          </div>
      
          {/* Contact Info Cards */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
      
            {/* Address Card with Icon */}
            <div className="bg-zinc-900 border border-green-500/30 p-4 rounded-xl shadow hover:shadow-lg transition flex items-start gap-4">
              
              {/* Left: Icon / Logo */}
              <div className="flex-shrink-0">
                <LocationEdit className="w-10 h-10 text-green-400" strokeWidth={1}/>
              </div>
              
              {/* Right: Title + Address */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold font-display bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent mb-1">
                  Address
                </h3>
                <p className="text-gray-300 text-sm">
                  S-22, New Jhulelal Complex, Nagar Nigam Road, Opposite Sanganer Stadium, Sanganer, Jaipur
                </p>
              </div>
            
            </div>

            {/*  Development Center*/}
            <div className="bg-zinc-900 border border-green-500/30 p-4 rounded-xl shadow hover:shadow-lg transition flex items-start gap-4">
              
              {/* Left: Icon / Logo */}
              <div className="flex-shrink-0">
                <LocationEdit className="w-10 h-10 text-green-400" strokeWidth={1}/>
              </div>
              
              {/* Right: Title + Address */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold font-display bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent mb-1">
                  Address
                </h3>
                <p className="text-gray-300 text-sm">
                   C/o Kamal Kishore Chauth Ka, Barawara, Dist-Sawai Madhopur, Sawai Madhopur, Rajasthan, India, 322702
                </p>
              </div>
            
            </div>

            {/*  Mobile */}
            <div className="bg-zinc-900 border border-green-500/30 p-4 rounded-xl shadow hover:shadow-lg transition flex items-start gap-4">
              
              {/* Left: Icon / Logo */}
              <div className="flex-shrink-0">
                <PhoneCall className="w-10 h-10 text-green-400" strokeWidth={1}/>
              </div>
              
              {/* Right: Title + Mobile */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold font-display bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent mb-1">
                  Mobile
                </h3>
                <p className="text-gray-300 text-sm">
                  <a href="tel:+917877813477" className="hover:text-green-400 transition-colors duration-300">+91-7877813477</a> <br />
                  <a href="tel:+918949532885" className="hover:text-green-400 transition-colors duration-300">+91-8949532885</a>
                </p>
              </div>
            
            </div>

            {/*  Email */}
            <div className="bg-zinc-900 border border-green-500/30 p-4 rounded-xl shadow hover:shadow-lg transition flex items-start gap-4">
              
              {/* Left: Icon / Logo */}
              <div className="flex-shrink-0">
                <Mail className="w-10 h-10 text-green-400" strokeWidth={1}/>
              </div>
              
              {/* Right: Title + email */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold font-display bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent mb-1">
                  Email
                </h3>
                <p className="text-gray-300 text-sm">
                  <a href="mailto:sales@kdwebsoft.com" className="block hover:text-green-400 transition-colors duration-300">
                    sales@kdwebsoft.com
                  </a>
                  <a href="mailto:hr@kdwebsoft.com" className="block hover:text-green-400 transition-colors duration-300">
                    hr@kdwebsoft.com
                  </a>
                </p>
              </div>
            
            </div>
      
          </div>
        </div>
      
      </div>

      
    </div>

  </section>
  )
}

export default Contact