import Logout from "./Logout";

function BottomNav() {
  return (
    <div className="lg:hidden btm-nav text-xs">
      <button className="active">
        <h1>
          {" "}
          <a href="/informasi-publik">Informasi Publik</a>
        </h1>
      </button>
      <button className="active">
        <h1>
          {" "}
          <a href="/data-staff">Data Staff</a>
        </h1>
      </button>
      <button className="active">
        <h1>
          {" "}
          <Logout />
          <a href="/logout"></a>
        </h1>
      </button>
    </div>
  );
}

export default BottomNav;
