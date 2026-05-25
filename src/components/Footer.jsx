import React from "react";
import { Link } from "react-router-dom";
import {
 FaFacebookF,
 FaInstagram,
 FaLinkedin,
 FaTwitter
} from "react-icons/fa";

import {motion} from "framer-motion";
import {fadeIn} from "../utils/motion";

import BDLG from "../assets/bdlg-icon.png";

const Footer=()=>{

return(

<footer className="bg-[#0B0F1A] border-t border-white/5">

<div className="max-w-7xl mx-auto px-6 py-20">

<motion.div

variants={fadeIn("up",0.2)}
initial="hidden"
whileInView="show"
viewport={{once:true}}

className="grid lg:grid-cols-12 gap-12"
>

{/* left */}

<div className="lg:col-span-4">

<div className="flex items-center gap-3">

<img
src={BDLG}
className="w-12"
/>

<div>

<h2 className="text-white font-bold text-xl">
BDLG
</h2>

<p className="text-gray-500 text-sm">
By BDLG Services
</p>

</div>

</div>

<p className="text-gray-400 mt-6 leading-8">

We specialize in UAV systems,
security infrastructure,
fire safety technologies and
advanced drone solutions.

</p>

<div className="flex gap-4 mt-8">

<a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white transition">
  <FaFacebookF />
</a>

<a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white transition">
  <FaTwitter />
</a>

<a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white transition">
  <FaInstagram />
</a>

<a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111827] flex items-center justify-center text-gray-400 hover:text-white transition">
  <FaLinkedin />
</a>

</div>

</div>

{/* right */}

<div className="lg:col-span-8">

<div className="grid grid-cols-2 md:grid-cols-4 gap-10">

<div>

<h3 className="text-white mb-6">
Who We Serve
</h3>

<ul className="space-y-4 text-gray-400">

<li>Law Enforcement</li>
<li>Fire Rescue</li>
<li>Emergency</li>

</ul>

</div>

<div>

<h3 className="text-white mb-6">
Products
</h3>

<ul className="space-y-4 text-gray-400">

<li>Tactical</li>
<li>Operations</li>
<li>Response Team</li>

</ul>

</div>

<div>

<h3 className="text-white mb-6">
Company
</h3>

<ul className="space-y-4 text-gray-400">

<li>
  <Link to="/aboutus" className="hover:text-white transition">
    About Us
  </Link>
</li>
<li>
  <Link to="/career" className="hover:text-white transition">
    Career & Partners
  </Link>
</li>
<li>
  <Link to="/services" className="hover:text-white transition">
    Services
  </Link>
</li>

</ul>

</div>

<div>

<h3 className="text-white mb-6">
Resources
</h3>

<ul className="space-y-4 text-gray-400">

<li>
  <Link to="/blog" className="hover:text-white transition">
    Knowledge Hub
  </Link>
</li>
<li>
  <Link to="/contactus" className="hover:text-white transition">
    Support
  </Link>
</li>
<li>
  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
    LinkedIn
  </a>
</li>

</ul>

</div>

</div>

</div>

</motion.div>

<div className="
border-t
border-white/5
mt-16
pt-8
flex
flex-col
md:flex-row
justify-between
text-gray-500
text-sm
">

<p>
©2026 BDLG Services
</p>

<p>
Privacy Policy
</p>

</div>

</div>

</footer>

)

}

export default Footer