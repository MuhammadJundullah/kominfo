import AuthenticatedLayout from "../components/AuthenticatedLayout";
import DeleteButton from "../components/DeleteInfoPublik";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function Dashboard() {
  const [informasi, setInformasiPublik] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDeleteSuccess = () => {
    console.log(
      "Data berhasil dihapus, lakukan refresh data atau tindakan lain."
    );
    // Anda bisa melakukan refresh data atau update state di sini
  };

  const url = "http://localhost:8000/api/informasi-publik";

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
        <h1 className="text-4xl font-bold pb-5">Data Informasi Publik</h1>

        {/* button tambah */}
        <div className="py-10">
          <a
            className="inline-flex items-center gap-2 rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            href="/informasi-publik/tambah">
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

        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Informasi
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Judul
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Dibuat
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Tanggal Dokumen
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Ukuran
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                File
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            {informasi.map((member) => (
              <tr key={member.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {member.informasi}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {member.judul}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {member.created_at}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {member.dibuat}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {member.ukuran}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <a href={member.url} target="_blank">
                    Download
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-red-600">
                  <DeleteButton
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
  );
}

export default Dashboard;
