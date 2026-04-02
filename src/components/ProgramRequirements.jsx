const ProgramRequirements = () => {
  return (
    <section className="primary-container py-10">
      <div className="mt-20 bg-white border border-gray-200 rounded-3xl shadow-lg p-10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Program Requirements
        </h3>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <div>✔ 18 years or older</div>
          <div>✔ Computer with internet access</div>
          <div>✔ High school diploma or equivalent</div>
          <div>✔ Government-issued ID</div>
          <div>✔ Ability for outdoor activity</div>
          <div>✔ Full attendance commitment</div>
        </div>
      </div>
    </section>
  );
};

export default ProgramRequirements;
