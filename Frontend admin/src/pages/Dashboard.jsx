import AuthenticatedLayout from "../components/AuthenticatedLayout";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [informasi, setInformasiPublik] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>; // Tampilkan loading jika data sedang diambil
  if (error) return <p>Error: {error}</p>; // Tampilkan error jika ada

  return (
    <div className="grid grid-cols-6 ">
      <div>
        <AuthenticatedLayout />
      </div>

      <div className="overflow-x-auto col-span-5 m-10">
        <h1 className="text-4xl font-bold pb-5">Data Informasi Publik</h1>
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
                File
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Ukuran
              </th>
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
                  {member.dibuat}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {member.tanggal_dokumen}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {member.file}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {member.ukuran}
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
