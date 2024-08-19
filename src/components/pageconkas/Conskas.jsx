import { useState } from "react";
import Stunting from "/src/assets/img/1.png";
import Gondokan from "/src/assets/img/2.png";

const Conskas = () => {
  const [activeCase, setActiveCase] = useState(1); // State untuk melacak tombol yang diklik

  return (
    <div className="py-20 bg-white flex flex-col items-center">
      <h2 className='text-2xl sm:text-2xl md:text-4xl font-newamsterdam mb-5 text-start md:text-center'>
        Contoh kasus kekurangan <span className="text-sky-400">gizi </span>di Indonesia
      </h2>
       


      {activeCase === 1 && (
        <div className="w-full">
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex-1 max-w-md px-7">
              <h2 className="text-2xl md:text-4xl font-bold text-sky-400 mb-4">Stunting di Indonesia</h2>
              <div className="overflow-y-scroll max-h-64">
                <p className="text-sm md:text-base font-roboto text-justify">
                  Stunting merujuk pada anak dengan tinggi badan terlalu rendah untuk usianya, wasting merujuk pada anak yang terlalu kurus untuk tinggi badannya.
                  Pada tahun 2021 satu dari 12 anak di bawah usia lima tahun di Indonesia mengalami wasting dan satu dari lima mengalami stunting. 
                  Terdapat perbedaan angka prevalensi wasting yang besar antar provinsi, dengan prevalensi wasting sebesar 11,9% di Provinsi Maluku dan 2,8% di Provinsi Bali.
                  Stunting dan wasting adalah akibat dari gizi yang kurang optimal sejak dari dalam kandungan, asupan gizi yang kurang pada anak usia dini, dan/atau penyakit
                  infeksi serta penyakit lainnya. Kedua bentuk kekurangan gizi ini memiliki dampak buruk dan mengancam kesehatan, kehidupan, dan perkembangan jangka panjang pada bayi dan anak di seluruh Indonesia.
                </p>
                <div className="mt-10">
                  <h1 className="font-newamsterdam text-[15px] md:text-2xl">
                    Upaya yang harus dilakukan untuk menurunkan angka stunting di Indonesia
                  </h1>
                  <ul className="list-disc font-roboto text-sm md:text-[15px] px-5">
                    <li>Meningkatkan kesadaran publik terkait wasting dan hubungannya dengan stunting</li>
                    <li>Memberikan layanan kepada semua masyarakat yang mengalami gizi buruk</li>
                    <li>Memastikan pendanaan yang terencana, memadai, dan selaras</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <img src={Stunting} className="w-full h-auto object-cover rounded-lg" alt="Stunting"/>
            </div>
          </div>
        </div>
      )}

      {activeCase === 2 && (
        <div className="w-full">
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex-1 max-w-md px-7">
              <h2 className="text-2xl md:text-4xl font-bold text-[#FF8343] mb-4">Gondokan di Indonesia</h2>
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
                  <ul className="list-disc text-sm md:text-base pl-5">
                    <li>Rutin mencuci tangan dengan sabun dan air mengalir.</li>
                    <li>Tidak berbagi peralatan mandi atau makan dengan penderita.</li>
                    <li>Menerapkan etika batuk, seperti menutup mulut dan hidung dengan tisu ketika batuk dan bersin.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <img src={Gondokan} className="md:w-full md:h-auto w-60 object-cover rounded-lg" alt="Gondokan"/>
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

export default Conskas;
