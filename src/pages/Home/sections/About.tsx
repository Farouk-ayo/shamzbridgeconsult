import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white text-slate-800 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Section: Text Content */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-5xl font-extrabold text-primary mb-4">
              About Us
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
              Our journey began with a simple yet ambitious goal: to provide
              service beyond compare. Over the years, we have evolved and grown,
              expanding our offerings to meet the diverse needs of our clients.
              From tailored solutions to comprehensive consultations, we
              leverage our extensive knowledge and experience to drive
              transformative change and help our clients succeed in today's
              dynamic business environment.
            </p>
          </div>

          <div className="bg-slate-100 p-8 rounded-lg shadow-lg">
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
              What sets us apart is our commitment to understanding our clients'
              unique challenges and goals. We take a collaborative approach,
              working closely with each client to develop customized strategies
              that address their specific needs and objectives. Our team of
              seasoned professionals brings together a wealth of expertise from
              various industries, ensuring that we can provide insights and
              solutions that are both innovative and effective.
            </p>
          </div>
        </div>

        {/* Right Section: Image/Visual Element */}
        <div className="hidden lg:block">
          <img
            src="https://via.placeholder.com/500x600"
            alt="About Us Image"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        {/* Clients Stat */}
        <div className="group relative overflow-hidden p-6 bg-blue-50 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          <div className="absolute inset-0 w-full h-full bg-blue-600 opacity-10 transition-all duration-300 group-hover:opacity-20"></div>
          <h3 className="text-5xl font-bold text-blue-600">5+</h3>
          <p className="text-lg text-gray-600 mt-2">Clients</p>
        </div>

        {/* Projects Stat */}
        <div className="group relative overflow-hidden p-6 bg-blue-50 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          <div className="absolute inset-0 w-full h-full bg-blue-600 opacity-10 transition-all duration-300 group-hover:opacity-20"></div>
          <h3 className="text-5xl font-bold text-blue-600">10+</h3>
          <p className="text-lg text-gray-600 mt-2">Projects</p>
        </div>

        {/* Communities Stat */}
        <div className="group relative overflow-hidden p-6 bg-blue-50 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          <div className="absolute inset-0 w-full h-full bg-blue-600 opacity-10 transition-all duration-300 group-hover:opacity-20"></div>
          <h3 className="text-5xl font-bold text-blue-600">10+</h3>
          <p className="text-lg text-gray-600 mt-2">Communities</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
