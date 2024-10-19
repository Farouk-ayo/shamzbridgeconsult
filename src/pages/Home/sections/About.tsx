import React from "react";
import { FaUserFriends, FaTasks, FaUsers } from "react-icons/fa";
import Stat from "../../../components/StatBlock";

const statsData = [
  {
    icon: <FaUserFriends className="text-primary text-4xl mb-2" />,
    number: "5+",
    label: "Clients",
  },
  {
    icon: <FaTasks className="text-primary text-4xl mb-2" />,
    number: "10+",
    label: "Projects",
  },
  {
    icon: <FaUsers className="text-primary text-4xl mb-2" />,
    number: "10+",
    label: "Communities",
  },
];

const AboutUs: React.FC = () => {
  return (
    <section
      className="bg-white text-slate-800 py-20 px-6 sm:px-12 lg:px-24"
      id="about-us"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Section: Text Content */}
        <div className="flex flex-col justify-center ">
          <h2 className=" text-3xl sm:text-4xl font-extrabold text-primary mb-4">
            About Us
          </h2>
          <p className="text-lg sm:text-xl  text-gray-600 ">
            Our journey began with a simple yet ambitious goal: to provide
            service beyond compare. Over the years, we have evolved and grown,
            expanding our offerings to meet the diverse needs of our clients.
            From tailored solutions to comprehensive consultations, we leverage
            our extensive knowledge and experience to drive transformative
            change and help our clients succeed in today's dynamic business
            environment.
          </p>
          <div className="mt-10 flex gap-5 sm:gap-40 justify-between sm:justify-center text-center">
            {statsData.map((stat, index) => (
              <Stat
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src="https://www.shamzbridgeconsult.org/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1711867102709%2Fc255d758-8bdf-47d2-ba00-0295f22165b1.jpeg%3Fauto%3Dcompress&w=3840&q=75"
            alt="About Us Image"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
