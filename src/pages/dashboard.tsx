import PageHeader from "@/components/header/page-header";

function Dashboard() {
  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="Dashboard" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        {/* <AdminTable admins={admins} /> */}
        <h1>Hello, Beteseb Memriya</h1>
      </div>
    </div>
  );
}

export default Dashboard;
