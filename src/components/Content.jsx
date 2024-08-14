import { FaArrowRight } from "react-icons/fa6";
import Fisik from "../assets/img/sfisik2.png";

const Content = () => {
return (
    <div className="mt-20">
        <div className="container px-6 mb-10 font-inter max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:max-w-full lg:px-0">
            <h3 className="text-4xl font-bold font-signika mb-10 text-slate-800 sm:text-5xl md:text-5xl text-center">
                Sehat <span className="text-sky-500">Fisik</span>
            </h3>
            <div className="lg:flex lg:items-center lg:space-x-12 lg:p-12">
            <div className="lg:w-1/2 h-full">
                <img
                src={Fisik}
                alt="Sehat Fisik"
                className="mt-4 rounded-tr-full rounded-bl-full md:rounded-tr-[500px] md:rounded-bl-[500px] border shadow-xl sm:mt-8 sm:h-64 sm:w-full object-cover sm:object-center"
                />
                <p className="font-light text-[15px] mt-3 text-center italic">Gambar 1. Olahraga Pagi(Sumber : RRI.co.id)</p>
            </div>

            <div className="lg:w-1/2">
                <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
                Mengapa sehat <span className="text-sky-500">fisik</span> sangatlah penting?
                </h2>
                <p className="mt-2 text-slate-600 sm:text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                labore atque dolore rerum praesentium accusantium vero, ipsam quod
                nostrum aut id, voluptatum unde, doloribus voluptate maiores illo
                perferendis nemo! Maiores.
                </p>

                <div className="mt-4 sm:mt-6 group">
                    <a
                        href="/"
                        className="inline-flex items-center px-5 py-3 bg-sky-500 text-white rounded-md shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base transition-all duration-300 hover:bg-sky-600"
                    >
                    Lanjut
                    <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
        </div>
            </div>
            </div>
        </div>

        <div className="p-6 w-full flex justify-center">
  {/* Kontainer untuk kedua halaman */}
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* page1 */}
    <div className="p-4">
      <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
        Manfaat memiliki kesehatan <span className="text-sky-500">fisik</span>
      </h2>
      <div>
        {/* Konten halaman 1 */}
      </div>
    </div>

    {/* page2 */}
    <div className="p-4">
      <h2 className="mt-6 text-2xl mb-5 font-semibold text-slate-800 sm:text-3xl font-signika sm:mt-8 lg:mt-0">
        Ciri-ciri tubuh memiliki <span className="text-sky-500">fisik</span> yang sehat
      </h2>
      <div className="h-96 overflow-y-auto">
        {[
          {
            title: 'Sistem tubuh berfungsi dengan baik',
            items: [
              'Lambung tidak terasa nyeri saat mengkonsumsi makanan',
              'Tenggorokan tidak sakit saat menelan mengkonsumsi makanan'
            ]
          },
          {
            title: 'Sistem tubuh berfungsi dengan baik',
            items: [
              'Lambung tidak terasa nyeri saat mengkonsumsi makanan',
              'Tenggorokan tidak sakit saat menelan mengkonsumsi makanan'
            ]
          },
          {
            title: 'Sistem tubuh berfungsi dengan baik',
            items: [
              'Lambung tidak terasa nyeri saat mengkonsumsi makanan',
              'Tenggorokan tidak sakit saat menelan mengkonsumsi makanan'
            ]
          },
          {
            title: 'Sistem tubuh berfungsi dengan baik',
            items: [
              'Lambung tidak terasa nyeri saat mengkonsumsi makanan',
              'Tenggorokan tidak sakit saat menelan mengkonsumsi makanan'
            ]
          }
        ].map((section, index) => (
          <div key={index} className="inline-block mb-1">
            <div className="flex py-5 gap-2 px-5 rounded-lg shadow-lg border">
              <div className="w-2 rounded-md bg-sky-500"></div>
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


    </div>
  );
};

export default Content;
