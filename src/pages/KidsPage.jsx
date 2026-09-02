import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import kid from "../assets/kid.png";
import Drone2 from "../assets/kid-fun.jpg";
import Train from "../assets/kid4.webp";
import DroneInt from "../assets/kid2.jpeg";

const KidsPage = () => {
  return (
    <div className="bg-[#0C1320] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:py-32 pt-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              JUNIOR DRONE CLUB
            </p>
            <h1 className="text-5xl md:text-6xl font-black mb-8">
              THE SKY STARTS HERE
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              BDLG offers specialized drone training for kids ages 8-16
            </p>
            <Link to="/kids/register" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              REGISTER NOW
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-12 text-center">REQUIREMENTS</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                src={Train}
                alt="Training"
                className="rounded-2xl w-full h-80 object-cover"
              />
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8">
                  <p className="text-3xl font-bold mb-4">Ages 8 - 16</p>
                  <p className="text-lg text-gray-300 leading-8">
                    Perfect for students of all experience levels. No prior drone experience needed — just enthusiasm and a willingness to learn!
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">What's Provided:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-400 text-2xl">✓</span>
                      <span>Training drones & simulators</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-400 text-2xl">✓</span>
                      <span>Safety gear & equipment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-400 text-2xl">✓</span>
                      <span>Tablets & programming software</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-6 bg-white/5 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-12 text-center">WHAT YOU'LL LEARN</h2>
            
            {/* Activity 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                src={kid}
                alt="Flight Training"
                className="rounded-2xl w-full h-80 object-cover order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">🛂 Learn to Fly Safely</h3>
                <p className="text-gray-300 leading-8 text-lg">
                  Master the controls, understand flight rules, and earn your junior pilot's wings in our safe indoor/outdoor practice zones.
                </p>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                src={DroneInt}
                alt="Drone Discovery"
                className="rounded-2xl w-full h-80 object-cover"
              />
              <div>
                <h3 className="text-3xl font-bold mb-4">🔍 Drone Discovery</h3>
                <p className="text-gray-300 leading-8 text-lg">
                  Peek inside a drone! Learn about propellers, motors, cameras, and how they all work together to create incredible flight.
                </p>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                src={Drone2}
                alt="Creative Missions"
                className="rounded-2xl w-full h-80 object-cover order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">🎯 Creative Missions & Fun</h3>
                <p className="text-gray-300 leading-8 text-lg">
                  Go beyond flying! Tackle fun challenges like obstacle courses, aerial photography scavenger hunts, precision landing contests, and make friends with fellow tech enthusiasts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Structure */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-12 text-center">EVERY SESSION INCLUDES</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { percentage: "20%", title: "Theory & Demonstration" },
                { percentage: "60%", title: "Hands-on Practice" },
                { percentage: "20%", title: "Project Work & Collaboration" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8 text-center"
                >
                  <p className="text-5xl font-black text-blue-400 mb-3">{item.percentage}</p>
                  <p className="text-xl font-semibold">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-8">Ready to Take Flight?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the Junior Drone Club and start your adventure into the world of aerospace technology!
            </p>
            <Link
              to="/kids/register"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              REGISTER NOW
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm mb-2">EMAIL</p>
              <p className="text-lg">info@bdlgservices.com.ng</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm mb-2">PHONE</p>
              <p className="text-lg">+234 911 444 8021</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm mb-2">LOCATION</p>
              <p className="text-lg">Lekki, Phase One, Lagos Nigeria</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsPage;
