import { useState } from "react";
import Sehatl3 from "/src/assets/img/sehatl3.png";

const Conskas5 = () => {
  const [activeCase, setActiveCase] = useState(1); // State untuk melacak tombol yang diklik

  return (
    <div id="conkas" className="py-20 bg-white flex flex-col items-center">
      <h2 className='text-2xl sm:text-2xl md:text-4xl font-newamsterdam mb-5 mx-4 text-start md:text-center'>
        Contoh kasus <span className="text-sky-400">lingkungan </span>yang tidak sehat
      </h2>
       


      {activeCase === 1 && (
        <div className="w-full">
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex-1 max-w-md px-7">
              <h2 className="text-xl md:text-2xl font-bold text-sky-400 mb-4">Pencemaran lingkungan</h2>
              <div className="overflow-y-scroll max-h-64">
                <p className="text-sm md:text-base font-roboto text-justify">
                kasus pencemaran lingkungan akibat limbah pabrik disebabkan semakin 
                meningkatnya pemahaman perusahaan dalam mengelola limbah perusahaan.
                Selain itu, intensnya pengawasan terhadap ijin lingkungan maupun IPAL (instalasi pembuangan air limbah) juga menjadi faktor 
                yang bisa menyebabkan semakin sedikit jumlah perusahaan yang abai atau bahkan lalai dalam menjalankan kewajibannya.
                </p>
                <div className="mt-10">
                  <h1 className="font-newamsterdam text-[15px] md:text-2xl">
                    Upaya yang harus dilakukan untuk menurunkan angka pencemaran lingkungan
                  </h1>
                  <ul className="list-disc font-roboto text-sm md:text-[15px] px-5">
                    <li>Melakukan pengolahan limbah dengan benar</li>
                    <li>Menggunakan bahan - bahan yang ramah lingkungan</li>
                    <li>Tidak membuang sampah di sungai atau sumber air lainnya</li>
                    <li>Menanam pohon di setiap lahan yang tersedia</li>
                    <li>Tidak mendirikan kawasan industri yang dekat dengan sumber air</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <img src={Sehatl3} className="w-full h-auto object-cover rounded-lg" alt="Stunting"/>
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
        </div>
    </div>
  );
}

export default Conskas5;
