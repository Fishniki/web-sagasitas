import aos from "aos";
import Logo from "../assets/img/logo.png";
import TenkaImage from "../assets/img/tenka.svg";

const Tenka = () => {
    aos.init({
        once: true
    })
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center mb-8 px-6 py-10"
      style={{ backgroundImage: `url(${TenkaImage})` }}
    >
      <div data-aos="zoom-out" className=" p-8 rounded-lg max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center md:justify-evenly">
          <div className="w-32 mb-6 md:mb-0">
            <img src={Logo} alt="Logo SaveLife" />
          </div>
          <div className="text-center md:text-left md:w-2/3">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-newamsterdam mb-4">
              Apa itu{" "}
              <span className="text-sky-500 underline decoration-sky-500">
                Save
              </span>
              <span className="text-orange-500 underline decoration-orange-500">
                Life
              </span>
            </h1>
            <p className="text-base font-roboto md:text-lg lg:text-xl text-gray-700">
              SaveLife adalah platform yang berkomitmen untuk meningkatkan
              kesadaran dan pengetahuan tentang pentingnya kesehatan fisik,
              mental, imunisasi, lingkungan, dan gizi seimbang. Melalui berbagai
              artikel, panduan, dan sumber daya, kami berupaya membantu Anda
              menjalani gaya hidup sehat dan seimbang. Bersama-sama, mari kita
              ciptakan generasi yang lebih sehat dan berdaya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenka;
