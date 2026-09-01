import { useState } from "react";
import { FaArrowRight, FaCheck, FaChevronDown } from "react-icons/fa";
import Online from "../assets/train.png";
import Actual from "../assets/train1.jpeg";

const courses = [
  { code: "01", title: "Basic RPAS Certificate", detail: "Build a confident foundation in drone safety, systems, and flight principles." },
  { code: "02", title: "VLOS Remote Pilot Licence", detail: "Train for supervised and commercial operations within visual line of sight." },
  { code: "03", title: "BVLOS Advanced Operations", detail: "Move into advanced mission planning and beyond visual line of sight operations." },
];

const audiences = [
  ["Drone enthusiasts & professionals", "Turn your interest in aerial technology into a practical, certified career."],
  ["Engineering & tech students", "Gain hands-on experience and skills that extend far beyond the classroom."],
  ["Defense & security agencies", "Add aerial intelligence, surveillance, and reconnaissance to your capability."],
  ["Oil & gas companies", "Inspect infrastructure and monitor assets with less risk and better visibility."],
];

const journey = [
  ["01", "Enroll", "Start your journey toward becoming a certified drone pilot."],
  ["02", "Train", "Learn with instructors who bring real mission experience to every lesson."],
  ["03", "Simulate", "Practice flight control and decision-making in realistic environments."],
  ["04", "Fly", "Master real-world conditions through supervised field operations."],
  ["05", "Certify", "Complete your assessment and earn the confidence to fly professionally."],
];

const faqs = [
  ["What courses do you offer?", "We offer Basic, Visual Line of Sight (VLOS), and Beyond Visual Line of Sight (BVLOS) drone pilot training."],
  ["Do I need to own a drone?", "No. Drones, equipment, and simulators are provided during practical training."],
  ["Can beginners apply?", "Yes. Our curriculum is designed to take you from beginner to advanced, even without an aviation background."],
  ["Where does training take place?", "Online lessons are paired with supervised field training at our Lekki facility."],
];

const TrainingStructure = ({ onApplyClick }) => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-[#030712] text-white">
      <section className="relative overflow-hidden bg-[#070b14] px-6 pb-20 pt-36 text-white md:pb-28">
        <div className="absolute -right-20 top-28 h-72 w-72 rounded-full border border-blue-500/20 md:h-[30rem] md:w-[30rem]" />
        <div className="relative mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-blue-400">BDLG Aviation Academy</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-tight md:text-7xl lg:text-[88px]">Learn to fly. Build what&apos;s next.</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">Practical drone pilot training for people and teams ready to turn aerial technology into real-world capability.</p>
            <button onClick={onApplyClick} className="mt-9 inline-flex items-center gap-4 bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-700">Start your training <FaArrowRight /></button>
          </div>
          <div className="relative min-h-[300px] overflow-hidden border border-white/10 bg-white/5 p-5">
            <img src={Actual} alt="Drone pilot preparing for field training" className="h-[300px] w-full object-cover opacity-80" />
            <div className="absolute bottom-8 left-8 max-w-[210px] border-l-2 border-blue-400 pl-4 text-sm leading-6 text-white">Nigeria&apos;s practical pathway to confident, professional drone operations.</div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">Our courses</p><h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight md:text-6xl">Choose your route into the sky.</h2></div><p className="max-w-sm text-base leading-7 text-gray-400">Personalized attention, field-ready skills, and a training path that grows with your ambition.</p></div><div className="grid gap-px bg-white/10 md:grid-cols-3">{courses.map((course) => <article key={course.code} className="bg-[#030712] p-7 md:p-9"><span className="text-sm font-bold text-blue-400">{course.code}</span><h3 className="mt-16 text-2xl font-black leading-tight">{course.title}</h3><p className="mt-4 leading-7 text-gray-400">{course.detail}</p></article>)}</div></div></section>

      <section className="bg-[#0c1320] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                Who should enroll?
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                A place for every kind of aviation ambition.
            </h2>
            <div className="mt-14 grid gap-x-10 md:grid-cols-2">
                {audiences.map(([title, text], index) => <div key={title} className="border-t border-white/10 py-7">
                <div className="flex gap-6"><span className="text-sm font-bold text-blue-400">0{index + 1}</span><div><h3 className="text-xl font-black">{title}</h3><p className="mt-2 max-w-md leading-7 text-gray-400">{text}</p></div></div></div>)}</div></div></section>

      <section className="px-6 py-20 md:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">Our flight plan</p><h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">From first lesson to certified pilot.</h2><p className="mt-6 max-w-md leading-7 text-gray-400">A structured route that combines theory, simulation, and supervised flight time.</p></div><div>{journey.map(([number, title, text]) => <div key={number} className="flex gap-6 border-t border-white/10 py-6"><span className="text-sm font-bold text-blue-400">{number}</span><div><h3 className="text-xl font-black">{title}</h3><p className="mt-1 text-gray-400">{text}</p></div></div>)}</div></div></section>

      <section className="bg-[#070b14] px-6 py-20 text-white md:py-28"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><img src={Online} alt="Drone training session" className="h-[360px] w-full object-cover" /><div><p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">Why train with BDLG?</p><h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Real missions. Real instructors. Real momentum.</h2><div className="mt-8 space-y-4">{["Small classes with focused instructor attention", "Hands-on training with real UAV systems", "Safety, regulations, and mission planning built in", "A portfolio-ready project before you graduate"].map((item) => <p key={item} className="flex items-center gap-3 text-gray-300"><FaCheck className="shrink-0 text-blue-400" />{item}</p>)}</div><button onClick={onApplyClick} className="mt-9 inline-flex items-center gap-4 bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-700">Apply for the next cohort <FaArrowRight /></button></div></div></section>

      <section className="px-6 py-20 md:py-28"><div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">Frequently asked</p><h2 className="mt-4 text-4xl font-black md:text-6xl">Questions before takeoff.</h2><div className="mt-10">{faqs.map(([question, answer], index) => <div key={question} className="border-t border-white/10"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-bold">{question}<FaChevronDown className={`shrink-0 text-blue-400 transition ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p className="max-w-2xl pb-6 leading-7 text-gray-400">{answer}</p>}</div>)}</div></div></section>

      <section className="bg-blue-600 px-6 py-20 text-center"><p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100">Ready for takeoff?</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">Your next chapter starts in the cockpit.</h2><button onClick={onApplyClick} className="mt-8 inline-flex items-center gap-4 bg-[#030712] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#0c1320]">Join the next cohort <FaArrowRight /></button></section>
    </main>
  );
};

export default TrainingStructure;
