import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const ScrollingText: React.FC = () => {
  const [index, setIndex] = useState(0);

  const texts = [
    "Transferable skills",
    "In-Demand skills",
    "Marketable skillset",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    gsap.fromTo(
      ".scrolling-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  }, [index]);

  return (
    <div className="text-center">
      <p className="">{texts[index]}</p>
    </div>
  );
};

export default ScrollingText;
