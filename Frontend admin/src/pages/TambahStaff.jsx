import { useState } from "react";
import axios from "axios";
import AuthenticatedLayout from "../components/AuthenticatedLayout";

function TambahStaff() {
  const [formData, setFormData] = useState({
    nama: "",
    jabatan: "",
    foto: null, // Menambahkan foto ke state
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, foto: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("nama", formData.nama);
    form.append("jabatan", formData.jabatan);
    form.append("foto", formData.foto); // Menambahkan file foto ke FormData

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/tambah-staff", // URL yang sesuai dengan route API
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Mengatur konten type ke multipart
          },
        }
      );
      alert("Data staff berhasil ditambahkan!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan data staff.");
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
              <div className="lg:mx-44 rounded-lg p-8 shadow-lg lg:p-12">
                <div className="mb-10">
                  <h1 className="text-4xl font-bold">Tambah Data Staff</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="nama">
                      Nama
                    </label>
                    <input
                      className="w-full rounded-lg p-3 text-sm"
                      placeholder="Nama"
                      type="text"
                      id="nama"
                      value={formData.nama}
                      onChange={handleInputChange}
                      autoFocus
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="jabatan">
                      Jabatan
                    </label>
                    <input
                      className="w-full rounded-lg p-3 text-sm"
                      placeholder="Jabatan"
                      type="text"
                      id="jabatan"
                      value={formData.jabatan}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="foto">
                      Foto
                    </label>
                    <input
                      type="file"
                      className="file-input file-input-ghost w-full max-w-xs"
                      onChange={handleFileChange}
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

export default TambahStaff;
