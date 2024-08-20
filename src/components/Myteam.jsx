import { FaGithub, FaInstagram } from "react-icons/fa6";
import Aldi from "../assets/tim/aldi.png";
import Niki from "../assets/tim/niki.png";
import Irfan from "../assets/tim/irfan.png";
import Evan from "../assets/tim/evan.png";
import Lintang from "../assets/tim/lintang.png";

const MyTeam = () => {
  return (
    <section id="timkami">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-signika text-5xl text-center font-bold text-gray-900">
            Tim Kami
          </h2>
        </div>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
          {/* Member 1 */}
          <div className="block group md:col-span-2 lg:col-span-1">
            <div className="relative mb-6 transition-transform transform-gpu group-hover:-translate-y-2 group-hover:scale-110 group-hover:translate-z-2">
              <img
                src={Aldi}
                alt="Aldi Kurniawan image"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600 shadow-2xl"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              Aldi Kurniawan
            </h4>
            <div className="w-full px-8 sm:px-20 flex justify-evenly">
              <a href="https://github.com/Aldi672" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              <a href="https://www.instagram.com/alta.break/?igsh=ZGUzMzM3NWJiOQ%3D%3D" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={25} />
              </a>
            </div>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              Design
            </span>
          </div>

          {/* Member 2 */}
          <div className="block group md:col-span-2 lg:col-span-1">
            <div className="relative mb-6 transition-transform transform-gpu group-hover:-translate-y-2 group-hover:scale-110 group-hover:translate-z-2">
              <img
                src={Niki}
                alt="Niki Ahmad Hamdani image"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600 shadow-2xl"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              Niki Ahmad Hamdani
            </h4>
            <div className="w-full px-8 sm:px-20 flex justify-evenly">
              <a href="https://github.com/Fishniki/" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              <a href="https://www.instagram.com/fishniki_/?igsh=MWdrY2t3YWM3bmJiOA%3D%3D" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={25} />
              </a>
            </div>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              Programmer
            </span>
          </div>

          {/* Member 3 */}
          <div className="block group md:col-span-2 lg:col-span-1">
            <div className="relative mb-6 transition-transform transform-gpu group-hover:-translate-y-2 group-hover:scale-110 group-hover:translate-z-2">
              <img
                src={Irfan}
                alt="Muhammad Irfan M. image"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600 shadow-2xl"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              Muhammad Irfan M.
            </h4>
            <div className="w-full px-8 sm:px-20 flex justify-evenly">
              <a href="https://github.com/muhammad-irfan" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              <a href="https://www.instagram.com/_ifnnmll/?igsh=MTRvZzI3ZTdhajZ3aQ%3D%3D" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={25} />
              </a>
            </div>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              Programmer
            </span>
          </div>

          {/* Member 4 */}
          <div className="block group md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-4">
            <div className="relative mb-6 transition-transform transform-gpu group-hover:-translate-y-2 group-hover:scale-110 group-hover:translate-z-2">
              <img
                src={Evan}
                alt="Evan Destian Saputra image"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600 shadow-2xl"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              Evan Destian Saputra
            </h4>
            <div className="w-full px-8 sm:px-20 flex justify-evenly">
              <a href="https://github.com/vaneedestian" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              <a href="https://www.instagram.com/epandstian/?igsh=MTI3NGExa3kzM2o0YQ%3D%3D" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={25} />
              </a>
            </div>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              Searcher
            </span>
          </div>

          {/* Member 5 */}
          <div className="block group min-[500px]:col-span-2 mx-auto md:col-span-2 lg:col-span-1">
            <div className="relative mb-6 transition-transform transform-gpu group-hover:-translate-y-2 group-hover:scale-110 group-hover:translate-z-2">
              <img
                src={Lintang}
                alt="Muhammad Lintang A. image"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600 shadow-2xl"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              Muhammad Lintang A.
            </h4>
            <div className="w-full px-8 sm:px-20 flex justify-evenly">
              <a href="https://github.com/lintang34" target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} />
              </a>
              <a href="https://www.instagram.com/muh.lintang21/?igsh=dm51NjFmNnZxbnpu" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={25} />
              </a>
            </div>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              Design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyTeam;
