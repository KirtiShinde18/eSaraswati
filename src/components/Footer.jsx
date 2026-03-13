import React from 'react'

const Footer = () => {

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Features", href: "/#features" },
  { name: "Contact", href: "/#contact" },
];

  return <>
      <footer className="border-t border-white/10 py-12 text-center text-gray-500">

      <div className="my-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

  {/* Brand */}
  <div className="flex flex-col md:w-1/3">
    <h1 className="sm:text-4xl text-3xl md:text-2xl font-bold mb-4 leading-tight font-display">
      <span className="bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
        E-Saraswati
      </span>
    </h1>
    <p className="text-gray-400 text-sm">
      Thank You For Visiting our website. Please submit your suggestion & query using the contact form or connect with sales team.
    </p>
  </div>

 

  {/* Useful Links */}
<div className="flex flex-col md:w-1/3">
  <h3 className="text-lg font-semibold font-display mb-2">Useful Links</h3>
  <ul className="text-gray-300 space-y-1">
    {navLinks.map((link) => (
      <li key={link.name}>
        <a 
          href={link.href} 
          className="hover:text-green-400 transition-colors"
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</div>

  {/* Contact Us */}
  <div className="flex flex-col md:w-1/3">
    <h3 className="text-lg font-semibold font-display mb-2">Contact Us</h3>
    <p><a href="tel:+917877813477" className="hover:text-green-400 transition-colors duration-300">+91-7877813477</a></p>
    <p> 
      <a href="mailto:sales@kdwebsoft.com" className="block hover:text-green-400 transition-colors duration-300">
        sales@kdwebsoft.com
      </a></p>
    <p className="text-gray-300 text-sm">Sanganer, Jaipur</p>
  </div>

</div>

      <hr className="border border-white/10  text-center text-gray-500 mb-10"/>
      © 2026 copyright e-Saraswati School Manager.  All rights Reserved. Design by <p className="text-green-400"><b>Kuldeep Websoft Pvt.Ltd.</b></p>
    </footer>
  </>
}

export default Footer