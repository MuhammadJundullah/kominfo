import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"; 
import { useSpring, animated } from "@react-spring/web";
import "../App.css";

function Tentang() {
  const [inView, setInView] = useState(false);

  // Intersection Observer hook
  const { ref, inView: isInView } = useInView({
    triggerOnce: true, // Trigger hanya sekali
    threshold: 0.5, // Persentase elemen yang masuk ke dalam viewport
  });

  // Spring animation untuk gambar dan div
  const imgAnimation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateX(0)" : "translateX(20px)",
    config: { tension: 280, friction: 60 },
  });

  const divAnimation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateX(0)" : "translateX(-20px)",
    config: { tension: 280, friction: 60 },
  });

  return (
    <div className="hero min-h-screen bg-gray-800" id="tentang">
      <div className="hero-content flex-col lg:flex-row-reverse text-white">
        <animated.img
          ref={ref} // Menambahkan ref ke gambar untuk intersection observer
          src="https://kominfo.lhokseumawekota.go.id/assets/upload/image/icon-lhokseumawe.png"
          className="max-w-sm rounded-lg sm:w-full w-1/2 sm:block hidden"
          alt="Logo of Diskominfo Kota Lhokseumawe"
          style={imgAnimation} // Mengaplikasikan animasi ke gambar
        />
        <animated.div
          ref={ref}
          className="pt-10 sm:pt-0"
          style={divAnimation}>
          <span className="flex items-center text-gray-300 font-semibold">
            <span className="pr-6">Diskominfo Kota Lhokseumawe</span>
            <span className="h-px flex-1 bg-white"></span>
          </span>
          <h1 className="sm:text-5xl font-bold text-4xl">Tentang Kami</h1>
          <p className="py-8 leading-8  sm:text-xl font-light text-md">
            Dinas Komunikasi, Informatika dan Persandian Kota Lhokseumawe
            memiliki visi "Terciptanya Pelayanan Publik Yang Terbaik melalui
            penerapan Teknologi Informatika dan Komunikasi Publik yang handal
            menuju Lhokseumawe Smart City yang beradab, beradat dan bermartabat
            dalam nuansa islami" Untuk mewujudkan visi tersebut Diskominfo
            Lhokseumawe memiliki tugas melaksanakan Pengorganisasian,
            Perencanaan, Pengawasan urusan Integrasi dan Penyebaran Informasi,
            Kemitraan dan Pengelolaan Media Publik, Aplikasi Informatika,
            Pengolahan Data, E-Government, Keamanan Informasi dan Persandian.
          </p>
        </animated.div>
      </div>
    </div>
  );
}

export default Tentang;
