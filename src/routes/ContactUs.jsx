import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import contact from "../assets/contact.json";

const ContactUs = () => {
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("Message Sent!");
  };
  return (
    <div className="py-32 px-12 mb-16 mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
          <h1 className="text-3xl font-bold text-black text-center mb-3">
            Get in Touch
          </h1>
          <p className="mb-4 text-center">
            You are at the right place! Just take a step further by sending an
            email us to the information provided. Thank you!
          </p>

          <Lottie
            animationData={contact}
            loop={true}
            autoplay={true}
            className="w-[350px] h-[350px] mx-auto"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg:gray-100 rounded-lg border border-red-300 shadow-lg shadow-blue-500 p-10"
        >
          <h1 className="text-4xl font-bold mb-7 text-center">Contact Us</h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black/80"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="mt-1 p-2 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black/80"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="mt-1 p-2 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black/80"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="mt-1 p-2 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button className="bg-red-800 px-3 py-2 rounded-xl text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
