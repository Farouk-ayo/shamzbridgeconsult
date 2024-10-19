import React from "react";

interface MobileNavProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<MobileNavProps> = ({ setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };
  return (
    <nav className="sticky z-30 top-0  justify-center items-center px-2 sm:p-6 bg-opacity-100 backdrop-blur-md transition duration-500 flex flex-col  ">
      <ul className=" space-y-8 text-black sm:text-xl flex flex-col items-center justify-center sm:mt-[20%] mt-[90%]  text-lg">
        <li
          className="hover:text-primary border-b pb-1 border-b-transparent transition hover:border-b-primary "
          onClick={handleClick}
        >
          <a href="#about-us">About us</a>
        </li>
        <li
          className="hover:text-primary border-b pb-1 border-b-transparent transition hover:border-b-primary "
          onClick={handleClick}
        >
          <a href="#mission-vision">Mission & Vision</a>
        </li>
        <li
          className="hover:text-primary border-b pb-1 border-b-transparent transition hover:border-b-primary"
          onClick={handleClick}
        >
          <a href="#services">Services</a>
        </li>
        <li
          className="hover:text-primary border-b pb-1 border-b-transparent transition hover:border-b-primary"
          onClick={handleClick}
        >
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
    </nav>
  );
};
export default MobileNav;
