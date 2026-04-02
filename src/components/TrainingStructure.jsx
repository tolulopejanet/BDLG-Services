import Online from "../assets/online.webp";
import Actual from "../assets/actual.avif";
import Launch from "../assets/launch.webp";

const TrainingStructure = ({ onApplyClick }) => {
  return (
    <section className="primary-container py-10">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-4 rounded-full shadow-2xl">
          <span className="text-2xl">📅</span>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">6-Week Training Structure</h2>
            <p className="text-sm sm:text-base opacity-90">Next Cohort: <span className="font-bold">1st March 2025</span></p>
          </div>
        </div>
        <p className="mt-4 text-gray-700 text-sm sm:text-base">Limited to <span className="font-semibold">15 students per specialization</span>. <button onClick={onApplyClick} className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">Apply Now</button></p>
      </div>

      <div className="space-y-16">
        {/* STEP 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                1
              </span>
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                Online Training
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Weeks 1–4: Build Your Foundation
            </h3>

            <p className="text-gray-600 mb-5">
              Gain deep theoretical knowledge and hands-on virtual experience guided by industry experts.
            </p>

            <ul className="space-y-2 text-gray-600">
              <li>✔ Drone regulations & airspace laws</li>
              <li>✔ Specialization-specific theory</li>
              <li>✔ Virtual flight simulations</li>
              <li>✔ Mission planning tools</li>
              <li>✔ Weekly live mentoring sessions</li>
            </ul>
          </div>

          <div className="relative">
            <img
              src={Online}
              alt="Online training"
              className="w-full h-72 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl" />
          </div>
        </div>

        {/* STEP 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative md:order-1 order-2">
            <img
              src={Actual}
              alt="Physical training"
              className="w-full h-72 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-green-600/10 rounded-2xl" />
          </div>

          <div className="md:order-2 order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold">
                2
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                Physical Training
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Week 5: Real-World Application
            </h3>

            <p className="text-gray-600 mb-5">
              Transition into real flight environments and execute missions under expert supervision.
            </p>

            <ul className="space-y-2 text-gray-600">
              <li>✔ Hands-on flight training (Lekki facility)</li>
              <li>✔ Equipment handling</li>
              <li>✔ Real-world mission scenarios</li>
              <li>✔ Data collection & field work</li>
              <li>✔ Emergency procedures</li>
            </ul>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                3
              </span>
              <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold">
                Assessment
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Week 6: Certification & Launch
            </h3>

            <p className="text-gray-600 mb-5">
              Demonstrate your skills through exams, projects, and portfolio reviews.
            </p>

            <ul className="space-y-2 text-gray-600">
              <li>✔ Written certification exam</li>
              <li>✔ Practical flight test</li>
              <li>✔ Final project submission</li>
              <li>✔ Portfolio review</li>
              <li>✔ Career guidance</li>
            </ul>
          </div>

          <div className="relative">
            <img
              src={Launch}
              alt="Assessment"
              className="w-full h-72 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-purple-600/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingStructure;
