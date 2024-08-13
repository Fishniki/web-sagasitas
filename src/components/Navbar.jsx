import { IoMdMenu } from "react-icons/io";
import Logo from "../assets/furina.png";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [button, setButton] = useState(true);

  return (
    <>
      <div className={`${button ? 'flex' : 'hidden'} bg-[#184473] flex transition-all fixed duration-500 w-full md:p-7 px-5 p-4 justify-between`}>
        <div className="flex items-center space-x-1">
          <img src={Logo} className="w-11" alt="Logo" />
          <h1 className="judul font-semibold text-xl text-white">SaveLife</h1>
        </div>
        <div className="md:flex hidden items-center">
          <ul className="flex space-x-3 text-[17px] text-white">
            <li>Home</li>
            <li>Tema Sehat</li>
            <li>Upaya Kesehatan</li>
            <li>Tentang Kami</li>
          </ul>
        </div>
        <div onClick={() => setButton(!button)} className="md:hidden flex items-center cursor-pointer">
          <IoMdMenu size={25} color="white" />
        </div>
      </div>

      {/* Sidebar responsive */}
      <div
        className={`${
          button ? "-right-60" : "right-0"
        } w-60 flex-col md:hidden bg-[#184473] flex fixed top-0 h-screen transition-all duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-row-reverse  items-center justify-between p-3 px-9 py-4 ">
          <FaTimes onClick={() => setButton(!button)} color="white" size={25} className="cursor-pointer" />
          <img src={Logo} className="w-11" alt="Logo" />
        </div>
        <ul className="flex flex-col space-y-3 p-4 text-white">
          <li className="p-2 cursor-pointer">Home</li>
          <li className="p-2 cursor-pointer">Tema Sehat</li>
          <li className="p-2 cursor-pointer">Upaya Kesehatan</li>
          <li className="p-2 cursor-pointer">Tentang Kami</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
