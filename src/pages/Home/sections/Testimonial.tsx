import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = [
  {
    name: "Akanbi Muhammad Shitta",
    business: "One Drug",
    cohort: "2018 President, Students’ Union",
    img: "https://www.shamzbridgeconsult.org/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1718031345182%2F4e2d79a8-bd09-447b-b5d6-9d7b63a371e5.png&w=96&q=75",
    quote:
      "During my tenure as President of the Student Union of Kwara State College of Education, Ilorin, I had the privilege of witnessing an extraordinary transformation, which was made possible by the collective efforts of our team, the supportive administration, and the innovative ideas of a remarkable individual, Mr. Shamsudeen, and his dynamic team, the Leadership Revitalization Concept's, who not only developed our members' soft and hard skills but also inspired us to believe that nothing is impossible, resulting in numerous achievements that were thought impossible, many of which still stand today, since 2019",
  },
  {
    name: "Habeeb Mumeen Olalekan",
    business: "University of Ilorin (2018-2019)",
    cohort: "POGSASS President",
    img: "https://www.shamzbridgeconsult.org/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1718031412946%2F35e07de9-8f4e-48ec-b2c2-098694da29e4.png&w=96&q=75",
    quote:
      "Your last record in program management and project coordinator is a source of inspiration to the upcoming generation, as a friend that worked with you in the most difficult time during my administration as Postgraduate president University of Ilorin, your commitment towards a successful landmark project cannot be underestimated from the maiden confirmation of Late MM Akanbi as the grand-patron of POGSASS unilorin chapters, post-graduate student's International conference, personality lectures in Honour of Ambassador Nimata Niniola Akanbi (Former Nigeria Ambassador to the Netherlands) and Leadership training for both the students and legislative representative",
  },
  {
    name: "Mrs Esther",
    business: "National Productivity Centre, Abuja.",
    description:
      "Igbagbo expanded her team, product offerings, and brand presence through the Smart Start Program. She interviewed senior HR professionals and over 60 employees in a process to refine CompCrafter. She hired new team members and developed the first iteration of CompCrafter. She also attended the Startupfest, where she pitched her startup and won $ 4,000.",
    img: "https://www.shamzbridgeconsult.org/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1717471652976%2Fb4499095-ad09-45b9-9033-4d6435f75f1d.png&w=96&q=75",
    quote:
      "We have learned so much and you have challenged our thoughts to bring customers to and increase the brand visibility of the National Productivity Centre. We won’t sleep on this. We will act and ensure all efforts you have put into this training are not a waste. Thank you for staying true and true. We hope to have you and your organization in class for advanced training. Thank you.",
  },
  {
    name: "Rasheed Awonuga",
    business: "Beans 'N' Bread",
    cohort: "Chief Executive Office",
    description: "",
    img: "https://www.shamzbridgeconsult.org/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1718784510113%2F05e66041-3836-410e-92ce-fb366366aa54.jpeg&w=96&q=75",
    quote:
      "Thank you Shamzbridge for the well detailed job done. We really don’t have anything to add here again cos you have finished work here. We would be glad to call on you soon to assist in our stag training and even recruitment process. Thank you for being dependable",
  },
  {
    name: "Fisayo Olabisi",
    business: "Tukio Konsult",
    cohort: "Founder and Chief Executive Officer",
    img: "https://www.shamzbridgeconsult.org/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1717471878239%2F62f783f9-1b91-4487-9d6e-daea5f425311.png&w=96&q=75",
    quote:
      "Working with Shamz Consult has been amazing so far, aside from the company’s wonderful content creation skills, they pay attention to details and ensure their clients are adequately satisfied when given an assignment. We trust them at Tuklio konsult",
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="py-16 bg-lighter text-primary" id="testimonials">
      <div className="max-w-7xl mx-auto ">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay
          scrollbar={{ draggable: true }}
        >
          {Testimonials.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-0">
                {/* Image */}
                <div className="lg:w-1/3 w-full flex justify-center">
                  <img
                    src={story.img} // Placeholder for the image
                    alt={`${story.name} testimonial`}
                    className="w-64 h-64 object-cover rounded-full"
                  />
                </div>

                {/* Founder Story Content */}
                <div className="lg:w-2/3 w-full pb-5 sm:px-10">
                  <h3 className=" text-xl sm:text-2xl font-medium mb-2">
                    {story.name}{" "}
                    <span className="text-xl sm:text-2xl text-primary font-bold">
                      –@{story.business}
                    </span>
                  </h3>
                  <p className=" text-gray-500 text-sm italic mb-2">
                    {story.cohort}
                  </p>
                  {/* Quote with Background */}
                  <blockquote className="quote-bg italic text-primary2 relative z-10 sm:px-10 py-4 text-base sm:text-lg ">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
