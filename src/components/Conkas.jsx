"use client";

import { useState } from "react";
import { Carousel } from "flowbite-react";
import Stunting from "../assets/img/stunting.svg";

function Conkas() {
  // State untuk mengelola visibilitas materi
  const [isOpen, setIsOpen] = useState(false);

  // Toggle fungsi untuk membuka dan menutup materi
  const toggleMaterial = () => setIsOpen(!isOpen);

  return (
    <div className="w-full h-screen py-5 mt-20">
      <div className="text-center font-signika text-2xl lg:text-4xl mb-5">
        Contoh kasus kekurangan <span className="text-sky-400">gizi</span> di Indonesia
      </div>
      <Carousel className="h-full">
        <div className="relative w-full h-screen border flex">
          <img src={Stunting} className="object-cover w-full h-full" />
          <div className="absolute top-0 left-0 ml-5 md:ml-20 flex flex-col justify-center items-start w-full h-screen px-5 md:px-20">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-newamsterdam text-sky-400">
              Stunting di Indonesia
            </h1>
            {/* Kondisi untuk menampilkan atau menyembunyikan materi */}
            {isOpen && (
              <div className="max-w-96 md:max-w-[500px] text-justify mb-5 font-roboto p-5 bg-sky-500 bg-opacity-15 rounded-md overflow-y-scroll">
                Satu dari 12 anak dibawah usia
                lima tahun di Indonesia mengalami
                wasting dan satu dari lima mengalami
                stunting. Terdapat perbedaan
                angka prevalensi wasting yang besar
                antar provinsi, dengan prevalensi
                wasting sebesar 11,9% di Provinsi
                Maluku dan 2.8% di Provinsi Bali.
                Stunting dan wasting adalah akibat
                dari gizi yang kurang optimal sejak
                dari dalam kandungan, asupan gizi
                yang kurang pada anak usia dini dan/
                atau penyakit infeksi serta penyakit
                lainnya. Kedua bentuk kekurangan
                gizi ini memiliki dampak buruk dan
                mengancam kesehatan, kehidupan dan
                perkembangan jangka panjang pada
                bayi dan anak di seluruh Indonesia. 
              </div>
            )}
            <button
              onClick={toggleMaterial}
              className="inline px-5 py-2 rounded-md font-anton bg-orange-400 text-white"
            >
              {isOpen ? 'Close' : 'Open'}
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Conkas;
