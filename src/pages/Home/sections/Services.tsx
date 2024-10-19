import React from "react";
import {
  FaUsers,
  FaGlobe,
  FaRocket,
  FaComments,
  FaBalanceScale,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    title: "Programs/Projects Management",
    description: "Partner with us for seamless project execution.",
    icon: <FaRocket size={24} color="#FFA500" />,
  },
  {
    title: "Capacity Building",
    description:
      "Nurture talent and skills with our capacity building services.",
    icon: <FaUsers size={24} color="#1E90FF" />,
  },
  {
    title: "Consultancy Services",
    description: "Elevate your strategy with our consultancy services.",
    icon: <FaComments size={24} color="#8A2BE2" />,
  },
  {
    title: "Event Host/Management",
    description: "Let us handle the details while you enjoy the moment.",
    icon: <FaGlobe size={24} color="#32CD32" />,
  },
  {
    title: "Community Development",
    description: "Championing development where it matters most.",
    icon: <FaBalanceScale size={24} color="#696969" />,
  },
  {
    title: "Content Development",
    description:
      "Unleash your creativity and transform ideas into impactful stories.",
    icon: <FaBullhorn size={24} color="#FF4500" />,
  },
];

const Services: React.FC = () => {
  return (
    <section
      className="timeline-section py-16 bg-light text-primary overflow-x-hidden"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center mb-10">Services </h2>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical Line */}
          <div
            className="absolute w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 transition-all duration-300"
            style={{ height: "100%" }} // Dynamic height based on scroll
          ></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {services.map((highlight, index) => (
              <div
                key={index}
                className={`flex flex-col items-center  ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 p-4 bg-white rounded-full shadow-lg">
                  {highlight.icon}
                </div>

                {/* Content */}
                <div className="relative lg:w-1/2 w-full mt-4 lg:mt-0 p-6 bg-white rounded-lg shadow-lg flex flex-col ">
                  <h3 className="text-xl font-semibold mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
