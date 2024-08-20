import { useState } from "react";
import Stunting from "/src/assets/img/sehati3.png";
import Gondokan from "/src/assets/img/2.png";

const Conskas4 = () => {
  const [activeCase, setActiveCase] = useState(1); // State untuk melacak tombol yang diklik

  return (
    <div id="conkas" className="py-20 bg-white flex flex-col items-center">
      <h2 className='text-2xl sm:text-2xl md:text-4xl font-newamsterdam mb-5 text-start md:text-center'>
        Contoh kasus masalah <span className="text-sky-400">imunisasi </span>di Indonesia
      </h2>
       


      {activeCase === 1 && (
        <div className="w-full">
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex-1 max-w-md px-7">
              <h2 className="text-2xl md:text-4xl font-bold text-sky-400 mb-4">Anak-anak yang tidak dapat imunisasi</h2>
              <div className="overflow-y-scroll max-h-64">
                <p className="text-sm md:text-base font-roboto text-justify">
                  Lebih dari 1,8 juta anak Indonesia tidak mendapat Imunisasi Rutin Lengkap selama 6 tahun terakhir, dari 2018 sampaii 2023. Akibatnya, beragam kasus dan Kejadian Luar Biasa, sperti 
                  Pada tahun 2023 banyak kasus campak rubella sebanyak 136 kasus, KLB difteri 103 kasus, kasus polio 8 kasus, kasus tetanus 14 kasus, dan pertusis atau batuk 100 hari sebanyak 149 kasus,” kata Direktur Pengelolaan Imunisasi Prima Yosephine, dalam temu media Pekan Imunisasi Dunia 2024 di kantor Kementerian Kesehatan, 
                </p>
                <div className="mt-10">
                  <h1 className="font-newamsterdam text-[15px] md:text-2xl">
                    Upaya yang harus dilakukan oleh orang tua untuk mengtasi masalah tersebut
                  </h1>
                  <ul className="list-disc font-roboto text-sm md:text-[15px] px-5">
                    <li>Edukasi diri tentang pentingnya imunisasi melalui sumber terpercaya </li>
                    <li>Manfaatkan program imunisasi gratis yang disediakan oleh pemerintah atau organisasi kesehatan.</li>
                    <li>Buat jadwal imunisasi dan catat tanggal-tanggal penting agar tidak terlewat.</li>
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
              <h2 className="text-2xl md:text-4xl font-bold text-[#FF8343] mb-4">Tiga anak di Jateng dan Jatim lumpuh layu akibat polio
              </h2>
              <div className="overflow-y-scroll max-h-64">
                <p className="text-sm md:text-base text-justify">
                  Sebanyak tiga anak di wilayah Jawa Timur dan Jawa Tengah dilaporkan menderita lumpuh layu akut (acute flaccid paralysis/AFP) yang disebabkan oleh Virus Polio Tipe 2. Selain itu, dari hasil lab di wilayah sekitar mereka, terdapat sembilan anak lain yang dinyatakan positif walau tidak menunjukkan gejala.
                  Direktur Jenderal Pencegahan dan Pengendalian Penyakit (P2P) Kemenkes, Maxi Rein Rondonuwu, mengatakan kemunculan KLB polio ini disebabkan oleh rendahnya cakupan imunisasi, lingkungan yang tidak bersih, dan perilaku masyarakat yang tidak sehat.
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

export default Conskas4;
