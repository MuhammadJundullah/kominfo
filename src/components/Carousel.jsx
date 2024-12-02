import "../App.css";

function Carousel() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <video
        className=" top-0 left-0 w-full h-full object-cover"
        src="/vid/hero.mp4"
        autoPlay
        loop
        muted></video>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Selamat datang di Website Kominfo Lhokseumawe
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
