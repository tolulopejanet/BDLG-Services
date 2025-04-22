import React from "react";
import { features } from "../assets/data";
import { BiCheckCircle } from "react-icons/bi";

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* heading txt */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How can we help you?</h2>
        <p className="text-gray-600">We offer varieties of services</p>
      </div>

      {/* feature box */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center justify-center"
          >
            <div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
            >
              <div className="text-3xl">{feature.icon}</div>
            </div>

            <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>

            <div>
              {feature.featureLists.map((featureList, index) => (
                <p
                  key={index}
                  className="mt-2 flex items-center justify-center"
                >
                  <span className="ml-2">{featureList}</span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
