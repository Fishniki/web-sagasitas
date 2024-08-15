import { FaCarrot } from "react-icons/fa6";
import { GiArmBandage, GiLoveInjection } from "react-icons/gi";
import { PiParkBold } from "react-icons/pi";
import { RiMentalHealthFill } from "react-icons/ri";

const Type = () => {
  return (
    <div className="flex flex-col items-center py-5 px-5 md:py-20 md:px-20">
      <h1 className="font-newamsterdam text-2xl md:text-3xl py-3">Tema Utama</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
        {/* Type 1 */}
        <div className="w-screen sm:w-52 md:w-64 p-6 border h-24 sm:h-40 md:h-64 flex flex-row md:flex-col items-center gap-4 justify-center cursor-pointer group hover:bg-[#6EACDA] shadow-lg bg-white rounded-md">
          <GiArmBandage className="text-4xl md:text-6xl text-[#6EACDA] group-hover:text-white group-hover:animate-bounce" />
          <div className="text-start md:text-center">
            <h1 className="text-xl sm:text-[17px] md:text-2xl font-oswald">Sehat Fisik</h1>
          </div>
        </div>

        {/* Type 2 */}
        <div className="w-screen sm:w-52 md:w-64 p-6 border h-24 sm:h-40 md:h-64 flex flex-row md:flex-col items-center gap-4 justify-center cursor-pointer group hover:bg-[#6EACDA] shadow-lg bg-white rounded-md">
          <RiMentalHealthFill className="text-4xl md:text-6xl text-[#6EACDA] group-hover:text-white group-hover:animate-bounce" />
          <div className="text-start md:text-center">
            <h1 className="text-xl sm:text-[17px] md:text-2xl font-oswald">Sehat Jiwa</h1>
          </div>
        </div>

        {/* Type 3 */}
        <div className="w-screen sm:w-52 md:w-64 p-6 border h-24 sm:h-40 md:h-64 flex flex-row md:flex-col items-center gap-4 justify-center cursor-pointer group hover:bg-[#FFB200] shadow-lg bg-white rounded-md">
          <GiLoveInjection className="text-4xl md:text-6xl text-[#FFB200] group-hover:text-white group-hover:animate-bounce" />
          <div className="text-start md:text-center">
            <h1 className="text-xl sm:text-[17px] md:text-2xl font-oswald">Sehat imunisasi</h1>
          </div>
        </div>

        {/* Type 4 */}
        <div className="w-screen sm:w-52 md:w-64 p-6 border h-24 sm:h-40 md:h-64 flex flex-row md:flex-col items-center gap-4 justify-center cursor-pointer group hover:bg-[#FFB200] shadow-lg bg-white rounded-md">
          <FaCarrot className="text-4xl md:text-6xl text-[#FFB200] group-hover:text-white group-hover:animate-bounce" />
          <div className="text-start md:text-center">
            <h1 className="text-xl sm:text-[17px] md:text-2xl font-oswald">Sehat Bergizi</h1>
          </div>
        </div>

        {/* Type 5 */}
        <div className="w-screen sm:w-52 md:w-64 p-6 border h-24 sm:h-40 md:h-64 flex flex-row md:flex-col items-center gap-4 justify-center cursor-pointer group hover:bg-[#FFB200] shadow-lg bg-white rounded-md">
          <PiParkBold className="text-4xl md:text-6xl text-[#FFB200] group-hover:text-white group-hover:animate-bounce" />
          <div className="text-start md:text-center">
            <h1 className="text-xl sm:text-[17px] md:text-2xl font-oswald">Sehat Lingkungan</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Type;
