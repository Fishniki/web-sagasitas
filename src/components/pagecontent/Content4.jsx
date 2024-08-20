import { FaArrowRight } from "react-icons/fa6";
import Imunisasi from "/src/assets/img/sehati.png";
import Imunisasi2 from "/src/assets/img/sehati2.png";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import aos from "aos";
import "aos/dist/aos.css";

const Content4 = () => {
  const [visibleSections, setVisibleSections] = useState(Array(5).fill(false));

  // Content for each section
  const sectionContents = [
    "Masyarakat harus mendaftar untuk mengikuti program imunisasi, Pendaftaran ini penting untuk mengetahui jumlah vaksin yang diperlukan dan memastikan bahwa setiap individu mendapatkan vaksin yang mereka butuhkan.",
    "Tim kesehatan masyarakat akan mengumpulkan informasi tentang masyarakat yang akan divaksinasi, seperti usia, riwayat kesehatan, dan kondisi khusus. Informasi ini penting untuk menentukan vaksin yang sesuai dan mengidentifikasi individu yang mungkin membutuhkan perhatian khusus.",
    "Tim kesehatan masyarakat akan memberikan penyuluhan kepada masyarakat tentang manfaat imunisasi, proses pelaksanaan, dan jadwal pemberian vaksin. Penyuluhan ini penting untuk memastikan bahwa masyarakat memahami pentingnya imunisasi dan merasa nyaman untuk mengikuti program tersebut.",
    "Setelah masyarakat siap, tim kesehatan masyarakat akan memberikan vaksin sesuai dengan jadwal yang telah ditentukan. Pemberian vaksin dilakukan dengan hati-hati dan harus mematuhi prosedur kebersihan yang ketat.",
    " Setelah pemberian vaksin selesai, tim kesehatan masyarakat akan melakukan pemantauan dan evaluasi untuk memastikan bahwa vaksin bereaksi dengan baik dan tidak ada efek samping yang serius.",
  ];

  const sectionTitles = [
    "Pendaftaran",
    "Pengumpulan Informasi",
    "Penyuluhan Masyarakat",
    "Pemberian Vaksin",
    "Pemantauan dan Evaluasi",
  ];

  const toggleSection = (index) => {
    const newVisibility = [...visibleSections];
    newVisibility[index] = !newVisibility[index];
    setVisibleSections(newVisibility);
  };

  aos.init({
    once: true,
  });

  return (
    <div className="mt-20 ">
      <div className="relative container px-6 py-20 md:py-40 font-inter max-w-md sm:max-w-xl md:max-w-5xl lg:max-w-full xl:px-64 mx-auto">
        <h3 className="text-4xl font-bold font-signika mb-5 text-slate-800 sm:text-5xl md:text-5xl text-center">
          Sehat <span className="text-sky-500">Imunisasi</span>
        </h3>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
          <div
            data-aos="fade-right"
            className="lg:w-1/2 h-full justify-center flex"
          >
            <img src={Imunisasi} alt="Sehat Fisik" className="w-72 lg:w-96" />
          </div>
          <div
            data-aos="fade-left"
            className="lg:w-1/2 max-w-full xl:max-w-full text-start lg:text-left"
          >
            <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:text-3xl font-signika">
              Mengapa <span className="text-sky-500">imunisasi</span>{" "}
              sangatlah penting?
            </h2>
            <p className="mt-2 text-slate-600 sm:text-xl">
              Imunisasi adalah cara pencegahan penyakit yang paling efektif dan
              hemat biaya. Dengan memberikan vaksin kepada individu, tubuh
              mereka akan mengembangkan kekebalan terhadap penyakit.
              Ini membantu mencegah penyebaran penyakit di antara populasi dan
              melindungi individu yang tidak dapat divaksinasi, seperti bayi dan
              orang tua.
            </p>
            <div className="mt-4 sm:mt-6 group flex justify-center lg:justify-start">
              <a
                href="#pembahasan"
                className="inline-flex items-center px-5 py-3 bg-sky-500 text-white rounded-md shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base transition-all duration-300 hover:bg-sky-600"
              >
                Lanjut
                <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 lg:py-56 py-20 w-full -my-2 flex justify-center backdrop-blur-sm">
        <div className="absolute right-0 left-0 top-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              d="M0,96L80,85.3C160,75,320,53,480,48C640,43,800,53,960,74.7C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              d="M0,256L80,250.7C160,245,320,235,480,234.7C640,235,800,245,960,256C1120,267,1280,277,1360,282.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        {/* Kontainer untuk kedua halaman */}
        <div
          id="pembahasan"
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 z-50"
        >
          {/* page1 */}
          <div data-aos="fade-up-right" className="p-10 w-full  ">
            <h2 className=" text-2xl font-semibold mb-3  text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
            Peran Kesehatan Masyarakat dalam <span className="text-sky-500">imunisasi</span>
            </h2>
            <div>
              <ul className="max-w-[500px] space-y-2 font-roboto text-[15px] md:text-xl list-decimal">
                <li>
                Bertanggung jawab untuk memastikan bahwa informasi tentang imunisasi tersedia bagi seluruh masyarakat
                </li>
                <li>Mengoordinasikan pelaksanaan program imunisasi</li>
                <li>Memastikan bahwa vaksin tersedia dan diatur dengan baik</li>
              </ul>
            </div>
          </div>

          {/* page2 */}
          <div data-aos="fade-up-left" className="p-4">
            <h2 className="mt-6 text-2xl mb-5 font-semibold text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
              jenis-jenis <span className="text-sky-500"> vaksin serta KIPI </span>
            </h2>
            <div className="h-96 overflow-y-auto ">
              {[
                {
                  title: " KIPI yang dapat terjadi pada vaksin hepatitis B",
                  items: [
                    "Nyeri di area suntikan",
                    "Mudah lelah",
                    "Demam",
                    "Kulit gatal-gatal dan kemerahan",

                  ],
                },
                {
                  title: "Reaksi KIPI imunisasi polio ",
                  items: [
                    "Demam",
                    "Mudah lelah",
                    "Ruam merah dan gatal-gatal di kulit",
                    "Hilang nafsu makan",
                  ],
                },
                {
                  title:
                    "KIPI pada vaksin BCG adalah",
                  items: [
                    "Ruam merah di area suntikan",
                    "Demam",
                    "Sakit ketika buang air kecil",
                    "Sakit perut",
                  ],
                },
              ].map((section, index) => (
                <div key={index} className="inline-block mb-1">
                  <div className="flex py-5 gap-2 px-5 rounded-lg border">
                    <div className="w-2 min-w-[5px] rounded-md bg-sky-500"></div>
                    <div>
                      <h1 className="font-medium font-signika">
                        {section.title}
                      </h1>
                      <ul className="list-disc pl-5 space-y-1">
                        {section.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="p-6 -mt-8">
          <div className="absolute right-0 left-0 w-full -z-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0099ff"
                d="M0,160L80,149.3C160,139,320,117,480,90.7C640,64,800,32,960,37.3C1120,43,1280,85,1360,106.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              ></path>
            </svg>
          </div>
          <h1 className="md:text-center mt-20 md:mt-40 text-start mb-10 font-signika text-2xl md:text-3xl lg:text-4xl">
            Tahapan Pemberian{" "}
            <span className="text-sky-500">Imunisasi</span>
          </h1>

          <div className="flex flex-col xl:px-72 w-full lg:flex-row-reverse items-center justify-evenly">
            <img
              src={Imunisasi2}
              alt="image"
              data-aos="zoom-out-left"
              className="md:w-[50%] w-full h-auto"
            />

            <div data-aos="zoom-out-right" className="w-full">
              {sectionContents.map((content, index) => (
                <div
                  key={index}
                  className=" border py-3 px-5 w-full max-w-[500px] mx-auto lg:mx-0 shadow-lg rounded-md mt-4"
                >
                  <div className="flex lg:text-xl items-center gap-2 font-signika justify-between">
                    {sectionTitles[index]}
                    <button onClick={() => toggleSection(index)}>
                      {visibleSections[index] ? (
                        <FiMinus size={20} />
                      ) : (
                        <MdAdd size={20} />
                      )}
                    </button>
                  </div>
                  <div
                    className={`${
                      visibleSections[index] ? "block" : "hidden"
                    } `}
                  >
                    <p className="text-start mt-5 font-roboto">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content4;
