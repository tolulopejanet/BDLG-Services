import Kid2 from "../assets/fly.webp";
import Discovery from "../assets/discovery.webp";
import Kid3 from "../assets/kid3.png";
import Kid4 from "../assets/fun.jpg";

const learnCards = [
  {
    title: "Learn to Fly Safely",
    img: Kid2,
    desc: "Master the controls, understand the flight rules, and earn your junior pilot's wings in our safe, indoor/outdoor practice zones."
  },
  {
    title: "Drone Discovery",
    img: Discovery,
    desc: "Peek inside a drone! Learn about propellers, motors, cameras, and how they all work together."
  },
  {
    title: "Creative Missions",
    img: Kid3,
    desc: "Go beyond flying! Tackle fun challenges like obstacle courses, aerial photography scavenger hunts, and precision landing contests."
  },
  {
    title: "Fun & Friends",
    img: Kid4,
    desc: "Be part of a team, share the thrill of flight, and make new friends who love tech as much as you do!"
  }
];

const JuniorDroneClub = () => {
  return (
    <section className="primary-container py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Junior Drone Club: Where Kids Take Flight! 🚀
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {learnCards.map((card, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="w-full h-64 md:h-60 lg:h-64">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover block"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JuniorDroneClub;
