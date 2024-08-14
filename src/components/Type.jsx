import { FaViruses } from "react-icons/fa";
import { FaVirusCovid } from "react-icons/fa6";
import type from "../assets/img/type.png";

const Type = () => {
  return (
    <div className="flex flex-col items-center md:py-20 py-5 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-items-center">
        {/* Type 1 */}
        <div className="md:w-64 p-6 border md:h-64 h-40 gap-4 justify-center cursor-pointer group hover:bg-[#6EACDA] shadow-lg bg-white flex flex-row md:flex-col items-center rounded-md">
          <FaViruses size={100} className="group-hover:text-white group-hover:animate-bounce text-[#6EACDA]" />
          <div className="text-start md:text-center">
            <h1 className=" text-[17px] font-oswald">HIV</h1> 
            <p className="font-medium max-w-60 font-roboto">Human Immunodeficiency Virus</p>
          </div>
        </div>
        {/* Image */}
        <img src={type} alt="Dokter Image" className="w-[80%] md:w-[400px] mx-auto hidden md:block" />
        {/* Type 2 */}
        <div className="md:w-64 p-6 border md:h-64 h-40 gap-4 justify-center cursor-pointer group hover:bg-[#FFB200] shadow-lg bg-white flex flex-row md:flex-col items-center rounded-md">
          <FaVirusCovid size={80} className="text-[#FFB200] group-hover:animate-bounce group-hover:text-white"  />
          <div className="md:text-center text-start">
            <h1 className=" text-[17px] font-oswald">AIDS</h1> 
            <p className="font-medium max-w-60 font-roboto">Acquired Immune Deficiency Syndrome</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Type;
