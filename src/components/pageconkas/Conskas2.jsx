import { useState } from "react";
import Obesitas from "/src/assets/img/obesitas.png";
import Jantung from "/src/assets/img/jantung.png";

const Conskas2 = () => {
  const [activeCase, setActiveCase] = useState(1); // State untuk melacak tombol yang diklik

  return (
    <div className="py-20 bg-white flex flex-col items-center">
      <h2 className='text-2xl sm:text-2xl md:text-4xl font-newamsterdam mb-5 text-start md:text-center'>
        Contoh kasus kesehatan <span className="text-sky-400">fisik </span>di Indonesia
      </h2>
       


      {activeCase === 1 && (
        <div className="w-full">
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex-1 max-w-md px-7">
              <h2 className="text-2xl md:text-4xl font-bold text-sky-400 mb-4">Obesitas di Indonesia</h2>
              <div className="overflow-y-scroll max-h-64">
                <p className="text-sm md:text-base font-roboto text-justify">
                  Di Indonesia, akses yang makin mudah dan biaya yang makin terjangkau atas makanan tidak sehat yang tinggi lemak, gula, dan garam adalah penyebab utama malnutrisi. Riset Kesehatan Dasar tahun 2018 memperkirakan satu dari tiga orang dewasa, satu dari lima anak berusia 5-12 tahun, dan satu dari tujuh remaja berusia 13-18 tahun di Indonesia mengalami kelebihan berat badan atau obesitas.
                </p>
                <div className="mt-10">
                  <h1 className="font-newamsterdam text-[15px] md:text-2xl">
                    Upaya yang harus dilakukan untuk mengatasi masalah obsitas
                  </h1>
                  <ul className="list-disc font-roboto text-sm md:text-[15px] px-5">
                    <li>Meengadakan event perlombaan lari untuk mendorong masyarakan hidup sehat</li>
                    <li>Bersosialisasi bahaya mengonsumsi gula berlebihan</li>
                    <li>Menjaga pola makan agar tetap sehat</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <img src={Obesitas} className="w-full h-auto object-cover rounded-lg" alt="Stunting"/>
            </div>
          </div>
        </div>
      )}

      {activeCase === 2 && (
        <div className="w-full">
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex-1 max-w-md px-7">
              <h2 className="text-2xl md:text-4xl font-bold text-[#FF8343] mb-4">Serangan jantung koroner di Indonesia</h2>
              <div className="overflow-y-scroll max-h-64">
                <p className="text-sm md:text-base text-justify">
                  Gondongan adalah penyakit menular yang disebabkan oleh virus gondongan. Penyakit ini ditandai dengan pembengkakan kelenjar parotis, yang terletak di bawah telinga dan di depan rahang.
                  Pada tahun 2024, terdapat peningkatan kasus gondongan di Jakarta. Menurut data Dinas Kesehatan DKI Jakarta, terdapat 1.234 kasus gondongan pada Januari-Juni 2024. Angka ini meningkat
                  dibandingkan dengan tahun 2023, di mana terdapat 876 kasus gondongan pada periode yang sama.
                </p>
                <div className="mt-10">
                  <h1 className="font-newamsterdam text-[15px] md:text-2xl">
                    Upaya yang harus dilakukan untuk mengatasi masalah Gondokan
                  </h1>
                  <ul className="list-disc text-sm md:text-xl pl-5">
                    <li>Rutin mencuci tangan dengan sabun dan air mengalir.</li>
                    <li>Tidak berbagi peralatan mandi atau makan dengan penderita.</li>
                    <li>Menerapkan etika batuk, seperti menutup mulut dan hidung dengan tisu ketika batuk dan bersin.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <img src={Jantung} className="md:w-full md:h-auto w-60 object-cover rounded-lg" alt="Gondokan"/>
            </div>
          </div>
        </div>
      )}

        <div className='w-full flex justify-center space-x-2'>
                <button 
                    className={`p-5 ${activeCase === 1 ? 'bg-[#0099ff]' : 'bg-gray-300'} rounded-full aspect-square flex items-center justify-center text-white`} 
                    onClick={() => setActiveCase(1)}
                    style={{ width: '3rem', height: '3rem' }} // Mengatur ukuran responsif menggunakan rem
                >
                    1
                </button>
                <button 
                    className={`p-5 ${activeCase === 2 ? 'bg-[#FF8343]' : 'bg-gray-300'} rounded-full aspect-square flex items-center justify-center text-white`} 
                    onClick={() => setActiveCase(2)}
                    style={{ width: '3rem', height: '3rem' }} // Mengatur ukuran responsif menggunakan rem
                >
                    2
                </button>
        </div>
    </div>
  );
}

export default Conskas2;
