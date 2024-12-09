import { useState } from "react";
import axios from "axios"; // Install axios jika belum: npm install axios
import AuthenticatedLayout from "../components/AuthenticatedLayout";

function TambahInformasiPublik() {
  const [formData, setFormData] = useState({
    informasi: "",
    judul: "",
    url: "",
    tanggal: "",
  });

  // Update state saat user mengisi input
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Kirim data ke API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/tambah-informasipublik",
        formData
      );
      alert("Data berhasil ditambahkan!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan data.");
    }
  };

  return (
    <div className="lg:grid grid-cols-6 ">
      <div>
        <AuthenticatedLayout />
      </div>

      <div className="overflow-x-auto col-span-5 m-10">
        <section>
          <div className="py-16 sm:px-6 lg:px-8">
            <div>
              <div className="lg:mx-44 rounded-lg bg-white p-8 shadow-lg lg:p-12">
                <div className="mb-10">
                  <h1 className="text-4xl font-bold">
                    Tambah Data Informasi Publik
                  </h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="informasi">
                      Informasi
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Informasi"
                      type="text"
                      id="informasi"
                      value={formData.informasi}
                      onChange={handleInputChange}
                      autoFocus
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="judul">
                      Judul
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Judul"
                      type="text"
                      id="judul"
                      value={formData.judul}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="url">
                      URL
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Url"
                      type="text"
                      id="url"
                      value={formData.url}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="tanggal">
                      Tanggal
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      type="date"
                      id="tanggal"
                      value={formData.tanggal}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                      Tambah Data
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TambahInformasiPublik;
