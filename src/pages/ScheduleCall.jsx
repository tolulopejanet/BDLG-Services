import { useState } from "react";

const ScheduleCallPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    topic: "",
    notes: ""
  });
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneNumber = "2349114448021"; // WhatsApp format without + symbol

    const message = `SCHEDULE CALL REQUEST\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Preferred Date:* ${formData.date}\n*Preferred Time:* ${formData.time}\n*Topic:* ${formData.topic}\n\n*Notes:*\n${formData.notes}`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    setSuccess("Redirecting to WhatsApp. Please send the message to confirm your request!");
  };

  return (
    <div className="bg-[#030712] text-white min-h-screen py-20 px-6">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-[#0B0F1A]/90 p-8 shadow-2xl shadow-black/20">
        <div className="mb-10 text-center">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm">Schedule a Call</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-black">Pick a date and time to talk with our team.</h1>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto leading-8">
            Choose a convenient slot and share your goals. 
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {success && (
            <div className="rounded-3xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-200">
              {success}
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-sm text-gray-300">
              Full Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm text-gray-300">
              Email Address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-sm text-gray-300">
              Phone Number
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
                placeholder="+234 800 000 0000"
              />
            </label>
            <label className="block text-sm text-gray-300">
              Preferred Date
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-sm text-gray-300">
              Preferred Time
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
              />
            </label>
            <label className="block text-sm text-gray-300">
              Topic
              <input
                type="text"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="mt-2 w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
                placeholder="What would you like to discuss?"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm text-gray-300">
              Additional Notes
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={5}
                className="mt-2 w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
                placeholder="Share any details or targets for the call"
              />
            </label>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="w-full sm:w-auto rounded-3xl bg-blue-600 px-8 py-4 text-white font-semibold transition hover:bg-blue-700"
            >
              Schedule Call
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleCallPage;
