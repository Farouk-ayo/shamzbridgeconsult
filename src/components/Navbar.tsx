import { useState } from "react";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-50 top-0 w-full flex justify-between items-center py-6 px-6 sm:px-20 bg-opacity-100 backdrop-blur-3xl transition duration-500 uppercase">
      <ul className="hidden space-x-10 text-white items-center font-semibold  lg:flex">
        <li
          className={`text-black font-semibold border-b-2 border-b-transparent hover:border-b hover:border-primary transition pb-2`}
        >
          <a href="#about-us">About Us</a>
        </li>
        <li
          className={`text-black font-semibold border-b-2 border-b-transparent hover:border-b hover:border-primary transition pb-2`}
        >
          <a href="#mission-vision">Mission & Vision</a>
        </li>
      </ul>
      <div className="text-primary font-bold text-2xl w-40  ">
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1724055539467/36a4b661-bd4f-488c-88d9-7109189330e5.png"
          alt="Logo"
          className="w-full h-full object-cover scale-[1.3] sm:scale-[2]"
        />
      </div>
      <ul className=" hidden lg:flex space-x-10 text-primary items-center font-semibold">
        <li
          className={`text-black font-semibold border-b-2 border-b-transparent hover:border-b hover:border-primary transition pb-2`}
        >
          <a href="#services">Services</a>
        </li>
        <li
          className={`text-black font-semibold border-b-2 border-b-transparent hover:border-b hover:border-primary transition pb-2`}
        >
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>

      <div className="lg:hidden">
        <button
          className={`hamburger ${
            isOpen ? "open" : ""
          } relative z-30 w-8 h-6 flex flex-col justify-between items-center`}
          onClick={toggleMenu}
        >
          <span
            className={`line block w-full h-1 ${"bg-primary"}  transition-transform duration-300 ease-in-out origin-center`}
          ></span>
          <span
            className={`line block w-full h-1  ${"bg-primary"}  transition-opacity duration-300 ease-in-out`}
          ></span>
          <span
            className={`line block w-full h-1 ${"bg-primary"}  transition-transform duration-300 ease-in-out origin-center`}
          ></span>
        </button>
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-0 w-full h-lvh bg-black bg-opacity-50`}
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-0 h-full z-50 w-3/4 bg-light shadow-lg p-4"
        >
          <MobileNav setIsOpen={setIsOpen} />
        </motion.div>
      </motion.div>
    </nav>
  );
};
export default Navbar;
