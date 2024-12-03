import "../App.css";

function Tentang() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse text-white">
        <img
          src="https://kominfo.lhokseumawekota.go.id/assets/upload/image/icon-lhokseumawe.png"
          className="max-w-sm rounded-lg "
        />
        <div>
          <h1 className="text-5xl font-bold">Tentang Kami</h1>
          <p className="py-6">
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
