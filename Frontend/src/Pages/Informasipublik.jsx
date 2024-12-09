import DeleteButton from "../components/DeleteInfoPublik";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function Informasipublik() {
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
    <>
      <div className="overflow-x-auto py-20 px-20 h-screen">
        <h2 className="text-center text-2xl font-bold py-10 pb-20">
          Informasi Publik
        </h2>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Informasipublik;
