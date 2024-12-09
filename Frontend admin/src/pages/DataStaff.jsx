import AuthenticatedLayout from "../components/AuthenticatedLayout";

function DataStaff() {
  return (
    <div className="lg:grid grid-cols-6">
      <AuthenticatedLayout />
      <h1>ini data staff</h1>
    </div>
  );
}

export default DataStaff;
