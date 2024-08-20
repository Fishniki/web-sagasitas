import { useState } from "react";
import Gangguan from "/src/assets/img/sehatj.png";
import Sehatj4 from "/src/assets/img/sehatj4.png";

const Conskas3 = () => {
  const [activeCase, setActiveCase] = useState(1); // State untuk melacak tombol yang diklik

  return (
    <div id="conkas" className="py-20 bg-white flex flex-col items-center">
      <h2 className='text-2xl sm:text-2xl md:text-4xl font-newamsterdam mb-5 mx-4 text-start md:text-center'>
        Contoh kasus gangguan kesehatan <span className="text-sky-400">jiwa</span>
      </h2>
       


      {activeCase === 1 && (
        <div className="w-full">
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex-1 max-w-md px-7">
              <h2 className="text-xl md:text-2xl font-bold text-sky-400 mb-4">Masalah psikologi penyebab bunuh diri</h2>
              <div className="overflow-y-scroll max-h-64">
                <p className="text-sm md:text-base font-roboto text-justify">
                Mahasiswa Universitas Gadjah Mada (UGM) meninggal bunuh diri di salah satu Hotel di Yogyakarta, pada Sabtu (8/10/2022). Keputusan bunuh diri diduga karena masalah psikologi yang dialami korban.
                Hal itu dibenarkan oleh aparat kepolisian merujuk pada surat keterangan dokter yang ditemukan di tas korban di tempat kejadian perkara (TKP), Polisi mengatakan, surat yang ditemukan di tas korban adalah berupa hasil pemeriksaan psikologi dari rumah sakit yang menunjukkan gangguan psikologis
                </p>
                <div className="mt-10">
                  <h1 className="font-newamsterdam text-[15px] md:text-2xl">
                   cara mengatasi gangguan kejiwaan pada diri anda
                  </h1>
                  <ul className="list-disc font-roboto text-sm md:text-[15px] px-5">
                    <li>Terapi Psikologis</li>
                    <li>Meditasi</li>
                    <li>Olahraga</li>
                    <li>Mengatur Pola Makan</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <img src={Gangguan} className="w-full h-auto object-cover rounded-lg" alt="Gangguan"/>
            </div>
          </div>
        </div>
      )}

      {activeCase === 2 && (
        <div className="w-full">
          <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex-1 max-w-md px-7">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8343] mb-4">Benturan kepala mengakibatkan kematian</h2>
              <div className="overflow-y-scroll max-h-64">
                <p className="text-sm md:text-base text-justify">
                  Kejadian trauma kepala di dunia sekitar 811-979 per 100 ribu per tahun. Sedangkan angka kejadian trauma kepala di Indonesia pada tahun 2013 di 33 Provinsi di Indonesia sebesar 8,2% dan insiden kematian akibat trauma kepala sejumlah 100.000. Sayangnya jumlah pasien trauma kepala yang datang ke rumah sakit masih rendah yaitu hanya sekitar 475-643 per 100 ribu orang per tahun. Padahal diperkirakan sekitar 50-60 juta kasus baru trauma kepala di seluruh dunia. Oleh karna itu kesadaran untuk berobat pada pasien trauma kepala masih harus ditingkatkan.
                  Sekitar 50% kematian akibat cedera kepala terjadi dalam hitungan menit pasca cedera di tempat kejadian ataupun pada saat perjalanan ke rumah sakit.
                </p>
                <div className="mt-10">
                  <h1 className="font-newamsterdam text-[15px] md:text-2xl">
                    Langkah utama mengatasi benturan kepala
                  </h1>
                  <ul className="list-disc text-base pl-5">
                    <li>Mengompres bagian yang terbentur dengan kain yang dibasahi/dingin.</li>
                    <li>Minum Obat pereda nyeri, seperti paracetamol</li>
                    <li> Hindari Minum Alkohol ataupun Obat Penenang Lainnya.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <img src={Sehatj4} className="md:w-full md:h-auto w-60 object-cover rounded-lg" alt="Gondokan"/>
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

export default Conskas3;
