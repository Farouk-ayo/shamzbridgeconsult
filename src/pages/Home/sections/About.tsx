import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white text-slate-800 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* About Us Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">
            About Us
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Our journey began with a simple yet ambitious goal: to provide
            service beyond compare. Over the years, we have evolved and grown,
            expanding our offerings to meet the diverse needs of our clients.
            From tailored solutions to comprehensive consultations, we leverage
            our extensive knowledge and experience to drive transformative
            change and help our clients succeed in today's dynamic business
            environment.
          </p>
        </div>

        {/* What Sets Us Apart */}
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

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Clients Stat */}
          <div className="border-t-4 border-blue-600 pt-6">
            <h3 className="text-4xl font-bold text-slate-800">5+</h3>
            <p className="text-lg text-gray-600">Clients</p>
          </div>

          {/* Projects Stat */}
          <div className="border-t-4 border-blue-600 pt-6">
            <h3 className="text-4xl font-bold text-slate-800">10+</h3>
            <p className="text-lg text-gray-600">Projects</p>
          </div>

          {/* Communities Stat */}
          <div className="border-t-4 border-blue-600 pt-6">
            <h3 className="text-4xl font-bold text-slate-800">10+</h3>
            <p className="text-lg text-gray-600">Communities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
