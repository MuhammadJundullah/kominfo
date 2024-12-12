import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { format } from "date-fns";

function Informasipublik() {
  const [informasi, setInformasiPublik] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDeleteSuccess = () => {
    console.log(
      "Data berhasil dihapus, lakukan refresh data atau tindakan lain."
    );
  };

  const url = "http://localhost:8000/api/informasi-publik";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (response.data.status === "success") {
          setInformasiPublik(response.data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading></Loading>;
  if (error) return <p>Error: {error}</p>;

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
              {/* <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Ukuran
              </th> */}
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
                  {format(new Date(member.created_at), "dd-MM-yyyy")}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {member.dibuat}
                </td>
                {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {member.ukuran}
                </td> */}
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
