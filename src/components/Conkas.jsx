"use client";

import { useState } from "react";
import { Carousel } from "flowbite-react";
import Stunting from "../assets/img/stunting.svg";
import Gondok from "../assets/img/gondokan.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Conkas() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
    
  const toggleMaterial1 = () => setIsOpen1(!isOpen1);
  const toggleMaterial2 = () => setIsOpen2(!isOpen2);

  return (
    <div className="w-full md:h-screen py-5 mt-20 relative">
      <div className="text-center font-signika text-2xl lg:text-4xl mb-5">
        Contoh kasus kekurangan <span className="text-sky-400">gizi</span> di Indonesia
      </div>
      <Carousel
        className=""
        slide={false}
        leftControl={<FaArrowLeft color="blue" size={25} />}
        rightControl={<FaArrowRight color="blue" size={25} />}
      >
        {/* kasus1 */}
        <div className="relative w-full h-[50vh] md:h-screen">
            <img src={Stunting} className="object-cover w-full h-full" />
            <div className="absolute top-0 left-0  flex flex-col p-10 justify-start items-center w-full h-full px-5 md:px-20">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-newamsterdam text-sky-400">
                Stunting di Indonesia
                </h1>
                <button
                onClick={toggleMaterial1}
                className="inline px-5 py-2 rounded-md z-50 font-anton bg-orange-400 text-white"
                >
                {isOpen1 ? "Tutup" : "Selengkapnya"}
                </button>
            </div>
                <div className={`absolute bottom-0 top-0 flex w-full justify-start items-center mt-14 ml-5 h-auto  ${isOpen1 ? 'left-0' : ' -left-[1000px]'} transition-all duration-500`}>
                    {isOpen1 && (
                    <div className="max-w-60 h-40 md:ml-20 md:h-80 z-50 md:max-w-[700px] max-h-[80vh] text-start mb-5 font-roboto p-5 bg-sky-500 bg-opacity-50 rounded-md overflow-y-auto">
                        Stunting merujuk pada anak dengan tinggi badan terlalu rendah untuk usianya, wasting merujuk pada anak yang terlalu kurus untuk tinggi badannya. Pada tahun 2021 satu dari 12 anak di bawah usia lima tahun di Indonesia mengalami wasting dan satu dari lima mengalami stunting. Terdapat perbedaan angka prevalensi wasting yang besar antar provinsi, dengan prevalensi wasting sebesar 11,9% di Provinsi Maluku dan 2,8% di Provinsi Bali. Stunting dan wasting adalah akibat dari gizi yang kurang optimal sejak dari dalam kandungan, asupan gizi yang kurang pada anak usia dini, dan/atau penyakit infeksi serta penyakit lainnya. Kedua bentuk kekurangan gizi ini memiliki dampak buruk dan mengancam kesehatan, kehidupan, dan perkembangan jangka panjang pada bayi dan anak di seluruh Indonesia.
                        <div className="mt-10">
                            <h1 className="font-newamsterdam text-xl">
                            Upaya yang harus dilakukan untuk menurunkan angka stunting di Indonesia
                            </h1>
                        <ul className="list-disc px-5">
                            <li>Meningkatkan kesadaran publik terkait wasting dan hubungannya dengan stunting</li>
                            <li>Memberikan layanan kepada semua masyarakat yang mengalami gizi buruk</li>
                            <li>Memastikan pendanaan yang terencana, memadai, dan selaras</li>
                        </ul>
                        </div>
                    </div>
                    )}
                </div>
        </div>
        {/* kasus2 */}
        <div className="relative w-full h-[50vh] md:h-screen">
            <img src={Gondok} className="object-cover w-full h-full" />
            <div className="absolute top-0 left-0 ml-5 md:ml-32 flex flex-col p-10 justify-start items-start w-full h-full px-5 md:px-20">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-newamsterdam text-sky-400">
                Gondokan di Indonesia
                </h1>
                <button
                onClick={toggleMaterial2}
                className="inline px-5 py-2 rounded-md z-50 font-anton bg-orange-400 text-white"
                >
                {isOpen2 ? "Tutup" : "Selengkapnya"}
                </button>
            </div>
                <div className={`absolute top-0 bottom-0 flex w-full justify-end items-center h-auto  ${isOpen2 ? 'right-0' : ' -right-[1000px]'} transition-all duration-500`}>
                    {isOpen2 && (
                    <div className="max-w-60 h-40 md:mr-20 mr-5  md:h-80 z-50 md:max-w-[700px] max-h-[80vh] text-start mb-5 font-roboto p-5 bg-sky-500 bg-opacity-15 rounded-md overflow-y-auto">
                        Stunting merujuk pada anak dengan tinggi badan terlalu rendah untuk usianya, wasting merujuk pada anak yang terlalu kurus untuk tinggi badannya. Pada tahun 2021 satu dari 12 anak di bawah usia lima tahun di Indonesia mengalami wasting dan satu dari lima mengalami stunting. Terdapat perbedaan angka prevalensi wasting yang besar antar provinsi, dengan prevalensi wasting sebesar 11,9% di Provinsi Maluku dan 2,8% di Provinsi Bali. Stunting dan wasting adalah akibat dari gizi yang kurang optimal sejak dari dalam kandungan, asupan gizi yang kurang pada anak usia dini, dan/atau penyakit infeksi serta penyakit lainnya. Kedua bentuk kekurangan gizi ini memiliki dampak buruk dan mengancam kesehatan, kehidupan, dan perkembangan jangka panjang pada bayi dan anak di seluruh Indonesia.
                        <div className="mt-10">
                            <h1 className="font-newamsterdam text-xl">
                            Upaya yang harus dilakukan untuk menurunkan angka stunting di Indonesia
                            </h1>
                        <ul className="list-disc px-5">
                            <li>Meningkatkan kesadaran publik terkait wasting dan hubungannya dengan stunting</li>
                            <li>Memberikan layanan kepada semua masyarakat yang mengalami gizi buruk</li>
                            <li>Memastikan pendanaan yang terencana, memadai, dan selaras</li>
                        </ul>
                        </div>
                    </div>
                    )}
                </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Conkas;
