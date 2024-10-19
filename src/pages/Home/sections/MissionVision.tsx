import React from "react";

const MissionVision: React.FC = () => {
  return (
    <div className="mt-20 px-6 mb-20" id="mission-vision">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
        Our Mission & Vision
      </h2>
      <p className="text-lg text-gray-700 text-center mb-12 w-full sm:w-[70%] m-auto">
        Redefining industry standards through consultation, our innovative
        approach integrates cutting-edge technology with expert insights,
        driving transformative change and setting new benchmarks for excellence.
      </p>

      <div className="flex flex-col gap-8 sm:mx-20 md:flex-row">
        {/* Vision Card */}
        <div className="flex-1 p-8 bg-[#f5f5f5e6] text-black rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-black mb-2">Vision</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            To become a premier organization dedicated to enhancing both
            personal and professional capacities of individuals and businesses,
            fostering efficiency, heightened productivity, and innovation.
          </p>
        </div>

        {/* Mission Card */}
        <div className="flex-1 p-8 bg-[#f5f5f5e6] text-black rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-black mb-2">Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to cultivate an empowering atmosphere for skill
            acquisition and capacity enhancement that heralds a holistic growth
            and development for individuals and organizations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
