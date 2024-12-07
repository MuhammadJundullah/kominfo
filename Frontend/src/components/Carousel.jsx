import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"; // Import hook intersection observer
import { useSpring, animated } from "@react-spring/web";
import "../App.css";

function Carousel() {
  const [inView, setInView] = useState(false);

  // Intersection Observer hook untuk mendeteksi elemen yang masuk viewport
  const { ref, inView: isInView } = useInView({
    triggerOnce: true, // Animasi hanya dijalankan sekali
    threshold: 1, // Elemen dianggap masuk viewport ketika 30% terlihat
  });

  // React Spring animasi untuk gambar
  const imgAnimation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(20px)",
    config: { tension: 280, friction: 60 },
  });

  // React Spring animasi untuk heading
  const h1Animation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(-20px)",
    config: { tension: 280, friction: 60 },
  });

  return (
    <div className="hero bg-base-200 min-h-screen">
      <video
        className="top-0 left-0 w-full h-full object-cover"
        src="/media/hero.mp4"
        autoPlay
        loop
        muted></video>
      <div className="hero-content text-center">
        <div className="max-w-md mx-auto">
          <animated.img
            ref={ref} // Menambahkan ref agar terdeteksi oleh Intersection Observer
            className="rounded-full my-1 w-1/2 sm:w-full mx-20 sm:mx-0"
            src="/media/logo.png"
            alt="Logo"
            style={imgAnimation} // Mengaplikasikan animasi pada gambar
          />
          <animated.h1
            style={h1Animation} // Mengaplikasikan animasi pada h1
            className="sm:text-5xl font-bold text-white text-2xl">
            Selamat datang di Website Kominfo Lhokseumawe
          </animated.h1>
          <p className="py-6 text-gray-200">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <a href="#tentang" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
