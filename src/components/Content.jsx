import { FaArrowRight } from "react-icons/fa6";
import Food from "../assets/img/food.png";
import Konten from "../assets/img/conten.png";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";

const Content = () => {

  const [visibleSections, setVisibleSections] = useState(Array(5).fill(false));

  // Content for each section
  const sectionContents = [
    "Tubuh yang tidak mendapatkan asupan nutrisi yang cukup akan lebih rentan terhadap infeksi dan penyakit. Sistem kekebalan tubuh memerlukan nutrisi yang tepat untuk berfungsi secara optimal.",
    "Pada anak-anak dan remaja, kekurangan nutrisi dapat menghambat pertumbuhan fisik dan perkembangan mental. Ini bisa berakibat pada tinggi badan yang tidak optimal, penurunan kemampuan belajar, dan gangguan perkembangan otak.",
    "Tanpa nutrisi yang cukup, tubuh tidak memiliki bahan bakar yang diperlukan untuk menghasilkan energi. Ini bisa menyebabkan kelelahan kronis, kurangnya konsentrasi, dan produktivitas yang menurun.",
    "Kekurangan nutrisi tertentu, seperti vitamin B, asam lemak omega-3, dan mineral, dapat berkontribusi pada masalah kesehatan mental seperti depresi, kecemasan, dan gangguan suasana hati.",
    "Tidak mengonsumsi makanan bergizi dapat menyebabkan masalah berat badan, baik kelebihan berat badan maupun kekurangan berat badan. Diet yang tidak seimbang bisa menyebabkan penumpukan lemak yang berlebihan atau, sebaliknya, penurunan berat badan yang tidak sehat."
  ];

  const sectionTitles = [
    "Penurunan Sistem Imun",
    "Pertumbuhan Terhambat",
    "Kelelahan dan Penurunan Energi",
    "Gangguan Kesehatan Mental",
    "Masalah Berat Badan"
  ];

  const toggleSection = (index) => {
    const newVisibility = [...visibleSections];
    newVisibility[index] = !newVisibility[index];
    setVisibleSections(newVisibility);
  };

return (
    <div className="mt-20 ">
        <div className="relative container px-6 py-20 md:py-40 font-inter max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:max-w-full xl:px-64">
      {/* <div className="absolute left-0 top-0 bottom-0 w-full -z-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#0099ff" d="M0,192L60,160C120,128,240,64,360,69.3C480,75,600,149,720,149.3C840,149,960,75,1080,74.7C1200,75,1320,149,1380,186.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>
      </div> */}
      <div className="absolute left-0 right-0 bottom-0 w-full -z-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#0099ff"  d="M0,96L60,122.7C120,149,240,203,360,229.3C480,256,600,256,720,245.3C840,235,960,213,1080,202.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
      </div>
  <h3 className="text-4xl font-bold font-signika mb-5 text-slate-800 sm:text-5xl md:text-5xl text-center">
    Sehat <span className="text-sky-500">Bergizi</span>
  </h3>
  <div className="lg:flex lg:items-center lg:gap-10">
    <div className="lg:w-1/2 h-full justify-center flex">
      <img
        src={Food}
        alt="Sehat Fisik"
        className="w-72 lg:w-96"
      />
    </div>
    <div className="lg:w-1/2 max-w-full xl:max-w-full">
      <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:text-3xl font-signika">
        Mengapa sehat <span className="text-sky-500">bergizi</span> sangatlah penting?
      </h2>
      <p className="mt-2 text-slate-600 text-start sm:text-xl">
        Karena gizi adalah zat makanan pokok yang diperlukan bagi pertumbuhan dan kesehatan tubuh. 
        Gizi seimbang adalah susunan makanan sehari-hari yang mengandung zat gizi dalam jenis dan 
        jumlah yang sesuai dengan kebutuhan tubuh yaitu jenis kelamin, umur dan status kesehatan. 
      </p>
      <div className="mt-4 sm:mt-6 group">
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


        <div className="p-6 lg:py-56 py-20 w-full -my-2 flex justify-center backdrop-blur-lg">
        <div className="absolute right-0 left-0 top-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" d="M0,0L60,16C120,32,240,64,360,90.7C480,117,600,139,720,122.7C840,107,960,53,1080,42.7C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
        <div className="absolute bottom-0 right-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff"  d="M0,288L60,261.3C120,235,240,181,360,176C480,171,600,213,720,229.3C840,245,960,235,1080,218.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
        {/* Kontainer untuk kedua halaman */}
          <div id="pembahasan" className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 z-50">
            
            {/* page1 */}
            <div className="p-10 w-full  ">
              <h2 className=" text-2xl font-semibold mb-3  text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
                Empat pillar <span className="text-sky-500">gizi</span> seimbang
              </h2>
              <div>
                <ul className="max-w-[500px] space-y-2 font-roboto text-[15px] md:text-xl list-decimal">
                  <li>Mengonsumsi anekaragam pangan dengan proporsi makanan yang seimbang 
                    (karbohidrat, lemak, protein, mineral dan vitamin)</li>
                  <li>Membiasakan perilaku hidup bersih</li>
                  <li>Melakukan aktivitas fisik yang teratur</li>
                  <li>Memantau Berat Badan (BB) secara teratur untuk mempertahankan berat badan normal</li>
                </ul>
              </div>
            </div>

              {/* page2 */}
              <div className="p-4">
              <h2 className="mt-6 text-2xl mb-5 font-semibold text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
                Tips hidup sehat <span className="text-sky-500">bergizi</span>
              </h2>
              <div className="h-96 overflow-y-auto ">
                  {[
                    {
                      title: 'Sistem tubuh berfungsi dengan baik',
                      items: [
                        'Pilih makanan yang seimbang sesuai dengan kebutuhan seperti Nutrisi dan Gizinya',
                        'Tubuh harus harus mendapatkan makanan yang seimbang seperti karbohidrat, protein, serat dan buah yang mengandung bnayaknya vitamin'
                      ]
                    },
                    {
                      title: 'Sistem tubuh berfungsi dengan baik',
                      items: [
                        'Sajikan makanan dalam bentuk yang sesuai dengan kebutuhan tubuh',
                        'Siapkan makanan sesuai dengan kapasitas makanan yang baik dan menyehatkan'
                      ]
                    },
                    {
                      title: 'Sistem tubuh berfungsi dengan baik',
                      items: [
                        'Makanlah makanan yang tidak mengandung perasa, pewarna dan pengawet buatan',
                        'Makanan yang mengandung gula, garam dan lemak yang berlebihan dianjurkan untuk dikurangin'
                      ]
                    },
                  ].map((section, index) => (
                    <div key={index} className="inline-block mb-1">
                      <div className="flex py-5 gap-2 px-5 rounded-lg border">
                        <div className="w-2 min-w-[5px] rounded-md bg-sky-500"></div>
                        <div>
                          <h1 className="font-medium font-signika">{section.title}</h1>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" d="M0,128L60,138.7C120,149,240,171,360,160C480,149,600,107,720,106.7C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      </div>
        <h1 className="md:text-center mt-20 md:mt-40 text-start mb-10 font-signika text-2xl md:text-3xl lg:text-4xl">
          Dampak apabila tidak mengonsumsi makanan <span className="text-sky-500">bergizi</span>
        </h1>

        <div className="flex flex-col xl:px-72 w-full lg:flex-row-reverse items-center justify-evenly">
            <img src={Konten} alt="image" className="md:w-[50%] w-full h-auto" />

          <div className="w-full">
            {sectionContents.map((content, index) => (
              <div
                key={index}
                className=" border py-3 px-5 w-full max-w-[500px]  mx-auto lg:mx-0 shadow-lg rounded-md mt-4"
              >
                <div className="flex lg:text-xl items-center gap-2 font-signika justify-between">
                  {sectionTitles[index]}
                  <button onClick={() => toggleSection(index)}>
                    {visibleSections[index] ? <FiMinus size={20} /> : <MdAdd size={20} />}
                  </button>
                </div>
                <div className={`${visibleSections[index] ? 'block' : 'hidden'} `}>
                  <p className="text-start mt-5 font-roboto">
                    {content}
                  </p>
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

export default Content;
