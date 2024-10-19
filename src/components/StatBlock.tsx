import { ReactNode } from "react";

interface StatProps {
  icon: ReactNode;
  number: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ icon, number, label }) => {
  return (
    <div className="flex flex-col items-center transition transform hover:scale-105 ">
      {icon}
      <h3 className=" text-2xl sm:text-4xl font-semibold text-black">
        {number}
      </h3>
      <p className=" text-base sm:text-md text-black mt-1">{label}</p>
    </div>
  );
};

export default Stat;
