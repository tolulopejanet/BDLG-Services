import React, { useEffect, useRef, useState } from "react";

const FeaturesSection = () => {
  const features = [
    {
      id: "ai-1",
      title: "Manufacturing Capability Drones & UAV Equipment",
      description:
        "BDLG specializes in the design and production of advanced drone and UAV systems tailored for both commercial and defense applications. Our manufacturing process integrates precision engineering, lightweight materials, and cu ing-edge avionics to ensure optimal performance and durability. ",
      video:
        "https://res.cloudinary.com/dtpz7bztd/video/upload/v1745478420/Ctronics_PTZ_CCTV_Camera_Surveillance_-2K_HD_Security_Camera_Outdoo_f6wkd9.mp4",
      poster:
        "https://res.cloudinary.com/dtpz7bztd/image/upload/v1745564549/drones_csljhu.jpg",
    },
    {
      id: "ai-2",
      title: "Security Measures & Installation Process",
      description:
        "BDLG prioritizes security at every stage of drone deployment. Our systems come equipped with encrypted communication channels, GPS shielding, and anti-jamming technologies to protect sensitive data and ensure operational integrity. ",
      video:
        "https://res.cloudinary.com/dtpz7bztd/video/upload/v1745478420/Ctronics_PTZ_CCTV_Camera_Surveillance_-2K_HD_Security_Camera_Outdoo_f6wkd9.mp4",
      poster:
        "https://res.cloudinary.com/dtpz7bztd/image/upload/v1745564549/drones_csljhu.jpg",
    },
    {
      id: "ai-3",
      title: "Health, Safety, Security & Environment",
      description:
        "At BDLG, safety is our top priority. We strictly adhere to all regulatory requirements and industry standards to ensure our security, fire safety, and entertainment solutions comply with local and international guidelines. Our team follows best practices in installation, maintenance, and operations, providing our clients with secure and reliable systems that meet legal and safety regulations. Through continuous training and adherence to safety protocols, we strive to maintain the highest standards of compliance and operational ",
      video:
        "https://res.cloudinary.com/dtpz7bztd/video/upload/v1745478420/Ctronics_PTZ_CCTV_Camera_Surveillance_-2K_HD_Security_Camera_Outdoo_f6wkd9.mp4",
      poster:
        "https://res.cloudinary.com/dtpz7bztd/image/upload/v1745564549/drones_csljhu.jpg",
    },
    {
      id: "ai-4",
      title: "Quality Assurance",
      description:
        "BDLG is dedicated to delivering superior quality services through a well-structured and continuously improving Quality Management System (QMS). Our compliance framework aligns with ISO standards, industry best practices, and regulatory guidelines to ensure our operations meet the highest standards. ",
      video:
        "https://res.cloudinary.com/dtpz7bztd/video/upload/v1745478420/Ctronics_PTZ_CCTV_Camera_Surveillance_-2K_HD_Security_Camera_Outdoo_f6wkd9.mp4",
      poster:
        "https://res.cloudinary.com/dtpz7bztd/image/upload/v1745564549/drones_csljhu.jpg",
    },
  ];

  const [activeFeature, setActiveFeature] = useState(0);
  const featuresRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const index = features.findIndex((feature) => feature.id === id);

          if (index !== -1) {
            setActiveFeature(index);
            const video = document.querySelector(`video[data-feature="${id}"]`);
            if (video) video.play();
          }
        }
      });
    }, options);

    const featuresElement = document.querySelectorAll(".feature-item");
    featuresElement.forEach((feature) => observerRef.current.observe(feature));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="py-24 text-gray-900">
      <div className="primary-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-32 gap-8">
          <div className="md:mb-24">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 max-w-[50rem]">
              Our Training Program
            </h2>
          </div>
          <div className="mb-24">
            <p className="text-xl text-gray-600 mb-8 max-w-[35rem]">
              Our comprehensive training programs combine in-person hands-on
              workshops, expert led online modules, and real-world
              scenario-based training to ensure participants gain in depth
              technical knowledge and practical expertise.
            </p>
          </div>
        </div>

        {/* image and content */}

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-32 gap-8">
          {/* image */}
          <div>
            <div className="sticky top-24">
              <div className="aspect-square rounded-lg overflow-clip border border-white/20">
                <video
                  src={features[activeFeature].video}
                  key={features[activeFeature].id}
                  poster={features[activeFeature].poster}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                  autoPlay
                ></video>
              </div>
            </div>
          </div>

          {/* content */}
          <div>
            {/* intro text */}
            <div className="md:mb-28 mb-16 md:h-72 border-b border-black/10 pb-16">
              <div className="max-w-[35ch] mb-4">
                <h3 className="text-2xl font-semibold">
                  Health, Safety, Security & Environment
                </h3>
              </div>
              <p className="text-xl text-gray-500 mb-8 max-w-[35rem]">
                We strictly adhere to all regulatory requirements and industry
                standards to ensure our security, fire safety, and entertainment
                solutions comply with local and international guidelines.
              </p>
            </div>

            {/* features text */}
            <div ref={featuresRef} className="space-y-24">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  id={feature.id}
                  className="feature-item scroll-mt-24 md:h-72 border-b border-black/10 pb-16"
                >
                  <div className="max-w-[35ch] mb-4">
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-xl text-gray-500 mb-8 max-w-[35rem]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
