function SlideCarousel() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <video src="/media/hero.mp4" className="w-full" autoPlay loop muted />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <div className="hero-content text-center">
            <div className="max-w-md mx-auto">
              <img
                // ref={ref} // Menambahkan ref agar terdeteksi oleh Intersection Observer
                className="rounded-full my-1 w-1/2 sm:w-full mx-20 sm:mx-0"
                src="/media/logo.png"
                alt="Logo"
                // style={imgAnimation} // Mengaplikasikan animasi pada gambar
              />
              <div
                // style={h1Animation} // Mengaplikasikan animasi pada h1
                className="sm:text-5xl font-bold text-white text-2xl">
                Selamat datang di Website Kominfo Lhokseumawe
              </div>
              <p className="py-6 text-gray-200">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <a href="#tentang" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <video src="/media/hero2.webm" className="w-full" autoPlay loop muted />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <div className="hero-content text-center">
            <div className="max-w-md mx-auto">
              <img
                // ref={ref} // Menambahkan ref agar terdeteksi oleh Intersection Observer
                className="rounded-full my-1 w-1/2 sm:w-full mx-20 sm:mx-0"
                src="/media/logo.png"
                alt="Logo"
                // style={imgAnimation} // Mengaplikasikan animasi pada gambar
              />
              <div
                // style={h1Animation} // Mengaplikasikan animasi pada h1
                className="sm:text-5xl font-bold text-white text-2xl">
                Selamat datang di Website Kominfo Lhokseumawe
              </div>
              <p className="py-6 text-gray-200">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <a href="#tentang" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default SlideCarousel;
