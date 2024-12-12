import React, { useState, useEffect } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

function StrukturStaff() {
  const url = "http://localhost:8000/api/staff";
  const [staff, setStaff] = useState([]); // Menyimpan data staff
  const [loading, setLoading] = useState(true); // Menyimpan status loading
  const [error, setError] = useState(null); // Menyimpan error jika ada
  const [inView, setInView] = useState(false);

  // Intersection Observer hook
  const { ref, inView: isInView } = useInView({
    triggerOnce: true, // Trigger hanya sekali
    threshold: 0.3, // Persentase elemen yang masuk ke dalam viewport
  });

  const divAnimation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateX(0)" : "translateX(-20px)",
    config: { tension: 280, friction: 60 },
  });

  // Fetch data ketika komponen pertama kali di-render
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Mengambil data dari response.data.data
        if (response.data.status === "success") {
          setStaff(response.data.data); // Menyimpan data staff ke state
        }
        setLoading(false); // Menandakan bahwa loading sudah selesai
      })
      .catch((error) => {
        setError(error.message); // Menangani error
        setLoading(false); // Menandakan bahwa loading sudah selesai
      });
  }, []); // Dependency array kosong, artinya hanya dijalankan sekali saat komponen mount

  if (loading) return <p>Loading...</p>; // Tampilkan loading jika data sedang diambil
  if (error) return <p>Error: {error}</p>; // Tampilkan error jika ada
  return (
    <div className="hero min-h-screen bg-white py-32" id="tentang">
      <div className="hero-content flex-col lg:flex-row-reverse text-black">
        <animated.div
          ref={ref}
          className="pt-10 sm:pt-0 sm:mx-10"
          style={divAnimation}>
          <div>
            <span className="flex items-center font-semibold">
              <span className="pr-6">Diskominfo Kota Lhokseumawe</span>
              <span className="h-px flex-1 bg-black"></span>
            </span>
            <h1 className="sm:text-5xl font-bold text-4xl">Pimpinan</h1>
          </div>
          <p className="py-8 leading-10 text-xl">
            <span className="font-bold">Visi : </span>
            <br />
            "Terciptanya Pelayanan Publik yang Terbaik melalui penerapan
            Teknologi Informatika dan Komunikasi Publik yang handal menuju
            Lhokseumawe Smart City yang beradab, beradat dan bermartabat dalam
            nuansa islami"
            <br />
            <br />
            <span className="font-bold">Misi : </span>
            <br />
            <ol>
              <li>
                1. Meningkatkan kualitas pelayanan pemerintah kepada semua
                stakeholder;
              </li>
              <li>
                2. Meningkatkan kapasitas layanan informasi dan pemberdayaan
                potensi masyarakat dalam rangka mewujudkan masyarakat informasi;
              </li>
              <li>
                3. Meningkatkan transparansi, kontrol dan akuntabilitas
                penyelenggaraan pemerintahan dalam rangka penerapan konsep good
                governace;
              </li>
              <li>
                4. Meningkatkan kualitas dan sebaran layanan deseminasi
                informasi melalui kemitraan dengan penyelenggara media dan
                mengikuti perkembangan teknologi informasi;
              </li>
              <li>
                5. Mendukung proses kerja internal pemerintah kota lhokseumawe
                dengan pengembangan aplikasi dan sistem informasi manajemen yang
                handal, update dan bisa menyesuaikan dengan kebutuhan
                masyarakat;
              </li>
              <li>
                6. Mengoptimalkan pemanfaatan insfrastruktur teknologi
                komunikasi dan informatika guna mencapai efisiensi dan
                efektifitas kerja;
              </li>
              <li>
                7. Membangun kualitas jaringan teknologi informasi yang mandiri,
                terintegritas dan mampu bersinergi dengan pihak-pihak yang
                memiliki komitmen terhadap pengembangan smart city di kota
                lhokseumawe;
              </li>
              <li>
                8. Menciptakan sistem kerja berbasis teknologi informasi yang
                handal dan terjamin keamanannya; Meningkatkan kualitas sumber
                daya manusia di bidang teknologi informasi dan komunikasi.
              </li>
            </ol>
          </p>
          <div>
            <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 ">
              {staff.map((member) => (
                <article
                  key={member.id}
                  className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                  <img
                    alt={member.nama} // Gantilah dengan nama staff atau informasi lainnya
                    // src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" // Gantilah dengan URL foto jika ada
                    src={`http://localhost:8000${member.foto}`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                      <p className="block text-xs text-white/90">
                        {member.jabatan} {/* Menampilkan jabatan staff */}
                      </p>

                      <a href="/">
                        <h3 className="mt-0.5 text-lg text-white">
                          {member.name}
                        </h3>{" "}
                        {/* Menampilkan nama staff */}
                      </a>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        {member.nama} {/* Menampilkan deskripsi staff */}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </dl>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default StrukturStaff;



//  <div className="w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-gray-100">
//    <div className="max-w-3xl lg:mx-48 text-gray-700">
//      <span className="flex items-center">
//        <span className="pr-6">Diskominfo Kota Lhokseumawe</span>
//        <span className="h-px flex-1 bg-black"></span>
//      </span>
//      <h1 className="sm:text-5xl font-bold text-2xl">Pimpinan</h1>
//    </div>

  
//  </div>;