import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const url = "http://localhost:8000/api/staff";

function StrukturStaff() {
  const [staff, setStaff] = useState([]); // Menyimpan data staff
  const [loading, setLoading] = useState(true); // Menyimpan status loading
  const [error, setError] = useState(null); // Menyimpan error jika ada

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
    <div className="w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-gray-100">
      <div className="max-w-3xl sm:mx-48">
        <span className="flex items-center">
          <span className="pr-6">Diskominfo Kota Lhokseumawe</span>
          <span className="h-px flex-1 bg-black"></span>
        </span>
        <h1 className="sm:text-5xl font-bold text-2xl">Pimpinan</h1>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {staff.map((member) => (
          <article
            key={member.id}
            className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt={member.nama} // Gantilah dengan nama staff atau informasi lainnya
              // src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" // Gantilah dengan URL foto jika ada
              src={`http://127.0.0.1:8000${member.foto}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <p className="block text-xs text-white/90">
                  {member.jabatan} {/* Menampilkan jabatan staff */}
                </p>

                <a href="/">
                  <h3 className="mt-0.5 text-lg text-white">{member.name}</h3>{" "}
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
  );
}

export default StrukturStaff;
