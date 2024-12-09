import Logout from "./Logout";
import { useLocation } from "react-router-dom";

function AuthenticatedLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white lg:block hidden">
      <div className="px-4 py-6">
        <span className="items-center justify-center text-center place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          <img src="/media/logo.png" alt="logo" className="w-11 mx-auto" />
          <p className="mt-3">Admin Diskominfo kota lhokseumawe</p>
        </span>

        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="/informasi-publik"
              className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                location.pathname === "/informasi-publik"
                  ? "bg-gray-100 text-gray-700"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }`}>
              Data Informasi Publik
            </a>
          </li>

          <li>
            <a
              href="/data-staff"
              className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                location.pathname === "/data-staff"
                  ? "bg-gray-100 text-gray-700"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }`}>
              Data Staff
            </a>
          </li>

          <li className="w-full rounded-lg px-4 py-2 text-sm font-medium text-red-600 [text-align:_inherit] hover:bg-gray-100">
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AuthenticatedLayout;
