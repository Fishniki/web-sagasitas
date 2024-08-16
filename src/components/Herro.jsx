import { FaLongArrowAltRight } from "react-icons/fa";
import Hero from "../assets/img/hero2.png";

const Herro = () => {
  return (
    <div className="relative w-full h-screen"> {/* Adjust mt-20 based on navbar height */}
      <div className="w-full h-full">
        <img src={Hero} className="object-cover w-full h-screen" alt="Hero Image" />
        <div className="absolute space-y-2 top-0 lg:ml-40 max-w-[90%] md:max-w-[600px] h-full flex flex-col items-start justify-center px-5 md:px-10">
          <p className="text-lg md:text-xl lg:text-6xl font-bold text-orange-500 font-signika">TUBUH SEHAT AWAL SUKSESMU</p>
          <h1 className="text-slate-700 text-2xl md:text-4xl  font-newamsterdam">Mari menjaga kesahatan hingga hari tua</h1>
          <button className="px-3 py-2 flex items-center gap-4 bg-red-300 rounded-lg font-roboto">Pelajari Selengkapnya <FaLongArrowAltRight size={20} /></button>
        </div>
      </div>
    </div>
  );
};

export default Herro