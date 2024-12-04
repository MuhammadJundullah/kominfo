import "../output.css";

function Navbar() {
  return (
    <div className="navbar bg-slate-100 text-black">
      <div className="navbar-start py-3 sm:mx-20">
        <div className="dropdown mr-2">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a href="/">beranda</a>
            </li>
            <li>
              <a href="/kontak">kontak</a>
            </li>
            <li>
              <a href="/layanan">layanan</a>
            </li>
          </ul>
        </div>
        <img
          className="sm:h-14 sm:mx-5 h-8 hidden sm:block"
          src="/media/logo.png"
          alt=""
        />
        <h1 className="sm:text-2xl font-light">Diskominfo Kota Lhokseumawe</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">beranda</a>
          </li>
          <li>
            <a href="/kontak">kontak</a>
          </li>
          <li>
            <a href="/layanan">layanan</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end sm:mr-20 mr-10">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
