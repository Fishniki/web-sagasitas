import { FaArrowRight } from "react-icons/fa6";
import Fisik from "../assets/img/sfisik2.png";
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
        <div className="container px-6 mb-10 font-inter max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:max-w-full lg:px-64">
            <h3 className="text-4xl font-bold font-signika mb-5 text-slate-800 sm:text-5xl md:text-5xl text-center">
                Sehat <span className="text-sky-500">Bergizi</span>
            </h3>
            <div className="lg:flex lg:items-center lg:space-x-12">
            <div className="lg:w-1/2 h-full">
                <img
                src={Fisik}
                alt="Sehat Fisik"
                className="mt-4 rounded-tr-full rounded-bl-full md:rounded-tr-xl md:rounded-bl-xl lg:rounded-xl border shadow-xl sm:mt-8 sm:h-64 sm:w-full object-cover sm:object-center"
                />
                <p className="font-light text-[15px] mt-3 text-center italic">Gambar 1. Olahraga Pagi(Sumber : RRI.co.id)</p>
            </div>

            <div className="lg:w-1/2">
                <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
                Mengapa sehat <span className="text-sky-500">bergizi</span> sangatlah penting?
                </h2>
                <p className="mt-2 text-slate-600 text-justify sm:text-xl">
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

        <div className="p-6 py-20 w-full flex justify-center ">
        {/* Kontainer untuk kedua halaman */}
          <div id="pembahasan" className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 z-50">
            
            {/* page1 */}
            <div className="p-10 rounded-md border shadow-lg  ">
              <h2 className="mt-6 text-2xl font-semibold mb-3 text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
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
              <div className="h-96 overflow-y-auto">
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
        <div className="p-6 my-5">
        <h1 className="md:text-center text-start mb-10 font-signika text-2xl md:text-3xl lg:text-4xl">
          Dampak apabila tidak mengonsumsi makanan <span className="text-sky-500">bergizi</span>
        </h1>

        <div className="flex flex-col lg:px-80 w-full lg:flex-row-reverse items-center justify-evenly">
            <img src={Konten} alt="image" className="md:w-[50%] w-full h-auto" />

          <div className="w-full">
            {sectionContents.map((content, index) => (
              <div
                key={index}
                className=" border py-3 px-5 w-full max-w-[500px] mx-auto lg:mx-0 shadow-lg rounded-md mt-4"
              >
                <div className="flex items-center gap-2 font-signika justify-between">
                  {sectionTitles[index]}
                  <button onClick={() => toggleSection(index)}>
                    {visibleSections[index] ? <FiMinus size={20} /> : <MdAdd size={20} />}
                  </button>
                </div>
                <div className={`${visibleSections[index] ? 'block' : 'hidden'}`}>
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
