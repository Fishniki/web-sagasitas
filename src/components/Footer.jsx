import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-800 text-white py-12 mt-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: About SaveLife */}
          <div>
            <h2 className="text-3xl font-bold font-signika mb-4 ">Save <span className="text-orange-400">Life</span></h2>
            <p className="text-sm font-roboto">
              SaveLife adalah platform yang didedikasikan untuk memberikan informasi tentang kesehatan, nutrisi, dan gaya hidup sehat. Kami berkomitmen untuk membantu Anda mencapai hidup yang lebih sehat dan berkualitas.
            </p>
            <div className="mt-6 flex space-x-5">
              <a href="#" className="text-white hover:text-sky-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-sky-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-sky-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-sky-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navbar</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-sky-300">
                  beranda
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-sky-300">
                  Tema Sehat
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-sky-300">
                  Upaya Kesehatan
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-sky-300">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
            <p className="text-sm font-roboto mb-4">
              Dapatkan update terbaru mengenai tips kesehatan dan nutrisi langsung ke email Anda.
            </p>
            <form>
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-2 rounded-md mb-2 text-slate-800 focus:outline-none"
              />
              <button className="w-full px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors">
                Komentar
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-sky-700 pt-6 text-center">
          <p className="text-sm font-roboto">
            © {new Date().getFullYear()} SaveLife. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
