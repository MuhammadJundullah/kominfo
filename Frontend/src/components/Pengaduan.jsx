import "../App.css";

function Pengaduan() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target.elements.text.value; // Mengambil nilai input
    const email = "kominfo@lhokseumawe.go.id"; // Ganti dengan email tujuan
    const subject = "Keluhan atau Masukan"; // Subjek email
    const body = `Keluhan atau Masukan:%0D%0A${encodeURIComponent(text)}`; // Isi email

    // Membuka aplikasi email default
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-1 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              "Kominfo Lhokseumawe berkomitmen untuk memberikan layanan terbaik
              kepada masyarakat. Jika Anda memiliki saran, keluhan, atau masukan
              terkait layanan kami, jangan ragu untuk menyampaikannya. Masukan
              Anda sangat berharga bagi kami untuk terus meningkatkan kualitas
              layanan. Kami akan meninjau setiap pesan yang Anda kirimkan dengan
              penuh perhatian dan tanggung jawab."
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-md my-32">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            "Kami Siap Mendengar Anda"
          </strong>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="text">
                Keluhan
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="text"
                name="text"
                type="text"
                placeholder="Masukan keluhan Anda"
                required
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Pengaduan;
