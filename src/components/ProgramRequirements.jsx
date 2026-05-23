const ProgramRequirements = () => {
  return (
    <section className="pb-16 px-4 md:px-0">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Basic Requirements
          </h2>
          <p className="text-gray-300 mt-3">
            Before enrolling, ensure you meet the requirements below
          </p>
        </div>

        {/* CARD */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-8">

          <div className="grid md:grid-cols-2 gap-6 text-gray-200">

            <div className="flex gap-3">
              <span className="text-blue-500 font-bold">✔</span>
              <span>18 years or older</span>
            </div>

            <div className="flex gap-3">
              <span className="text-blue-500 font-bold">✔</span>
              <span>Computer with internet access</span>
            </div>

            <div className="flex gap-3">
              <span className="text-blue-500 font-bold">✔</span>
              <span>High school diploma or equivalent</span>
            </div>

            <div className="flex gap-3">
              <span className="text-blue-500 font-bold">✔</span>
              <span>Government-issued ID</span>
            </div>

            <div className="flex gap-3">
              <span className="text-blue-500 font-bold">✔</span>
              <span>Willingness to participate in outdoor training</span>
            </div>

            <div className="flex gap-3">
              <span className="text-blue-500 font-bold">✔</span>
              <span>Commitment to full program participation</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProgramRequirements;