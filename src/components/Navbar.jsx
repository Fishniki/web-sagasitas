import { IoMdMenu } from "react-icons/io";
import Logo from "../assets/img/furina.png";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [button, setButton] = useState(true);
  const [navbarBackground, setNavbarBackground] = useState('bg-transparent');

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBackground('bg-white shadow-md');
    } else {
      setNavbarBackground('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 z-50 w-full ${navbarBackground} border-b transition-all duration-500 md:px-7 px-5 py-4 flex justify-between items-center`}>
        <div className="flex items-center space-x-1">
          <img src={Logo} className="w-11" alt="Logo" />
          <h1 className=" text-xl text-black font-medium font-roboto-regular">SaveLife</h1>
        </div>
        <div className="md:flex hidden items-center">
          <ul className="flex space-x-3 text-[17px] text-black">
            <li className="inline-block px-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer transition-all duration-300 ">Home</li>
            <li className="inline-block px-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer transition-all duration-300 ">Tema Sehat</li>
            <li className="inline-block px-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer transition-all duration-300 ">Upaya Kesehatan</li>
            <li className="inline-block px-4 py-1 rounded-full hover:bg-orange-500 cursor-pointer transition-all duration-300 ">Tentang Kami</li>
          </ul>
        </div>
        <div onClick={() => setButton(!button)} className="md:hidden flex items-center cursor-pointer">
          {button ? <IoMdMenu size={25} color="black" /> : <FaTimes size={25} color="black" />}
        </div>
      </div>

      {/* Sidebar responsive */}
      <div
        className={`${
          button ? "-right-60" : "right-0"
        } w-60 md:hidden bg-[#184473] fixed top-0 h-screen transition-all duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-row-reverse items-center justify-between p-4">
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