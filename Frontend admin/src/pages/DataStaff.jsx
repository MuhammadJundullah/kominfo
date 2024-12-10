import AuthenticatedLayout from "../components/AuthenticatedLayout";
import DeleteButton from "../components/DeleteInfoPublik";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Deletestaff from "../components/Deletestaff";

function DataStaff() {
  const [informasi, setInformasiPublik] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDeleteSuccess = () => {
    console.log(
      "Data berhasil dihapus, lakukan refresh data atau tindakan lain."
    );
    // Anda bisa melakukan refresh data atau update state di sini
  };

  const url = "http://localhost:8000/api/staff";

  // Fetch data ketika komponen pertama kali di-render
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Mengambil data dari response.data.data
        if (response.data.status === "success") {
          setInformasiPublik(response.data.data); // Menyimpan data staff ke state
        }
        setLoading(false); // Menandakan bahwa loading sudah selesai
      })
      .catch((error) => {
        setError(error.message); // Menangani error
        setLoading(false); // Menandakan bahwa loading sudah selesai
      });
  }, []); // Dependency array kosong, artinya hanya dijalankan sekali saat komponen mount

  if (loading) return <Loading></Loading>; // Tampilkan loading jika data sedang diambil
  if (error) return <p>Error: {error}</p>; // Tampilkan error jika ada

  return (
    <div className="lg:grid grid-cols-6">
      <div>
        <AuthenticatedLayout />
      </div>

      <div className="overflow-x-auto col-span-5 m-10">
        <h1 className="text-4xl font-bold pb-5">Data Staff</h1>

        {/* button tambah */}
        <div className="pb-24">
          <a
            className="inline-flex items-center gap-2 rounded text-indigo-600  hover:text-indigo-400 transition-colors"
            href="/data-staff/tambah">
            <span className="text-sm font-medium"> Tambah data </span>

            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
        {/* button tambah */}

        <div className="overflow-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Nama
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Jabatan
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Foto
                </th>
                <th></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-center">
              {informasi.map((member) => (
                <tr key={member.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {member.nama}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {member.jabatan}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <img
                      src={`http://localhost:8000${member.foto}`}
                      alt="foto staff"
                      className="h-20 w-20 object-cover rounded-full mx-auto"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-red-600">
                    <Deletestaff
                      id={member.id}
                      onSuccess={handleDeleteSuccess}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataStaff;
