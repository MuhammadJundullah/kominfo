import "../App.css";

function Tentang() {
  return (
    <div className="hero min-h-screen" id="tentang">
      <div className="hero-content flex-col lg:flex-row-reverse text-white">
        <img
          src="https://kominfo.lhokseumawekota.go.id/assets/upload/image/icon-lhokseumawe.png"
          className="max-w-sm rounded-lg sm:w-full w-1/2 sm:block hidden"
        />
        <div>
          <span className="flex items-center text-white">
            <span className="pr-6">Diskominfo Kota Lhokseumawe</span>
            <span className="h-px flex-1 bg-white"></span>
          </span>
          <h1 className="sm:text-5xl font-bold text-2xl">Tentang Kami</h1>
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
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}

export default Tentang;
