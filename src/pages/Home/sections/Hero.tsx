import React, { useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "../../../components/Navbar";
import Animation from "../../../components/Animation";
import ScrollingText from "../../../components/ScrollingText";
import Button from "../../../components/Button";

const Hero: React.FC = () => {
  useEffect(() => {
    // GSAP Animations for the hero text
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 }, // Start further down
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
    gsap.fromTo(
      ".tagline",
      { opacity: 0, y: 30 }, // Start a bit lower
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.8 }
    );

    // Bounce effect for scroll indicator
    gsap.to(".scroll-indicator", {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.2,
    });
  }, []);

  return (
    <div>
      <div className="absolute inset-0 bg-light bg-opacity-60 z-10"></div>

      <Navbar />

      <section className="z-20 relative w-full h-screen flex flex-col justify-center px-6 sm:px-12 pt-40 hero-section leading-tight sm:leading-normal gap-5 overflow-hidden ">
        <Animation />

        {/* Center Text */}
        <div className="text-center hero-text space-y-4 self-center">
          <h1 className="text-5xl sm:text-7xl font-bold uppercase  flex-col flex font-tradegothic ">
            Build an Organization of High Repute <br />
            Immerse yourself in{" "}
            <span className="relative -skew-y-1 bg-[#00295c6e] transform perspective-300">
              <span className="block -skew-y-1 px-1">
                <ScrollingText />

                <span className="absolute -bottom-1 left-0 w-full h-2 bg-white opacity-40 rotate-1"></span>
              </span>
            </span>{" "}
            <span className="mt-2 sm:mt-0 font-tradegothic">
              for Self Sustenance
            </span>
          </h1>
        </div>
        <Button>Let's Talk!</Button>
        <div className="info">
          <div className="circles">
            <span className="g">G</span>
            <span className="o">O</span>
            <span className="u">U</span>
            <span className="m">M</span>
          </div>
          <div>
            <p className="text-black">+57 Joined</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className=" self-center">
          <div className="scroll-indicator animate-bounce hover:scale-110 transition duration-300">
            <svg
              className="w-10 h-10 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
