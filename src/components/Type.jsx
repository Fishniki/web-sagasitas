import { FaViruses } from "react-icons/fa"
import { FaVirusCovid } from "react-icons/fa6"
import type from "../assets/type.png"

const Type = () => {
  return (
    <div className="w-full items-center flex justify-evenly py-36 p-10">
        {/* type1 */}
      <div className="w-64 p-6 border h-64 gap-4 justify-center cursor-pointer group hover:bg-[#6EACDA] shadow-lg bg-white flex flex-col items-center rounded-md">
        <FaViruses size={100} className="group-hover:text-white animate-bounce text-[#6EACDA]" />
        <div className="text-center">
            <h1 className="font-bold text-[17px]">HIV</h1> 
            <p className="font-semibold">Human Immunodeficiency Virus</p> 
        </div>
      </div>
      <img src={type} alt="Dokter Image" className="w-[400px]" />
      {/* type2 */}
      <div className="w-64 p-6 border justify-center gap-4 h-64 cursor-pointer hover:bg-[#FFB200] group shadow-lg bg-white flex flex-col items-center rounded-md">
        <FaVirusCovid size={80} className="text-[#FFB200] animate-bounce group-hover:text-white"  />
        <div className="text-center">
            <h1 className="font-bold text-[17px]">AIDS</h1> 
            <p className="font-semibold">Acquired Immune Deficiency Syndrome</p> 
        </div>
      </div>
    </div>
  )
}

export default Type
