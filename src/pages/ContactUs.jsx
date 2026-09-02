import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ContactUs = () => {
  const [searchParams] = useSearchParams();
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    const subject = searchParams.get("subject") || "";
    setFormData((prev) => ({ ...prev, subject }));
  }, [searchParams]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "2349114448021"; // WhatsApp format without + symbol
    const message = `CONTACT REQUEST\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    
    setSuccessMessage("Opening WhatsApp to send your message...");
    setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
    setTimeout(() => setSuccessMessage(""), 5000);
  };
  return (
    <div className="bg-[#030712] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start p-10">
          <div className="space-y-8 rounded-[32px] border border-white/10 bg-[#0B0F1A]/90 p-10 shadow-2xl shadow-black/30">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Contact details</p>
              <h2 className="mt-4 text-3xl font-bold text-white">We’re here to help</h2>
              <p className="mt-4 text-gray-400 leading-8">
                Whether you need a quote, want to book a demo, or have a question about our services, drop us a line and our team will get back to you quickly.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Phone</p>
                <p className="mt-3 text-lg font-semibold text-white">+234 911 444 8021</p>
              </div>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Email</p>
                <p className="mt-3 text-lg font-semibold text-white">info@bdlgservices.com</p>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-xl font-semibold text-white">Ready to talk?</h3>
              <p className="mt-3 text-gray-400 leading-7">
                Use the form to share what you need and choose the best time for our team to follow up. We will handle the rest.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] bg-white p-8 shadow-2xl shadow-black/15"
          >
            <h2 className="text-3xl font-bold text-slate-900">Send a message</h2>
            <p className="mt-3 text-sm text-slate-600">
              Fill in your details and we will respond within one business day.
            </p>

            {successMessage && (
              <div className="mt-6 rounded-3xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-700">
                {successMessage}
              </div>
            )}

            <div className="mt-8 space-y-4">
              <label className="block text-sm font-medium text-slate-700">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-blue-500/20"
                  required
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Phone
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-blue-500/20"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-blue-500/20"
                  required
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Subject
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-blue-500/20"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                How can we help?
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or question"
                  rows={5}
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-blue-500/20"
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-3xl bg-[#0D4C92] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0A3D75]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
