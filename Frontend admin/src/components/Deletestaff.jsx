import React from "react";
import axios from "axios";

function Deletestaff({ id, onSuccess }) {
  const handleDelete = async () => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      try {
        await axios.post(`http://127.0.0.1:8000/api/delete-staff/${id}`);
        alert("Data berhasil dihapus!");
        if (onSuccess) onSuccess(); // Memanggil callback jika ada
        window.location.reload(); // Refresh halaman setelah berhasil
      } catch (error) {
        console.error("Gagal menghapus data:", error);
        alert("Terjadi kesalahan saat menghapus data.");
      }
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-600 hover:underline">
      Hapus
    </button>
  );
}

export default Deletestaff;
