import "../App.css";

function Carousel() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <video
        className=" top-0 left-0 w-full h-full object-cover"
        src="/media/hero.mp4"
        autoPlay
        loop
        muted></video>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img className="rounded-full my-1" src="/media/logo.png" alt="" />
          <h1 className="text-5xl font-bold text-white">
            Selamat datang di Website Kominfo Lhokseumawe
          </h1>
          <p className="py-6 text-gray-200">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
