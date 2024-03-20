import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

function AppLayout() {
  return (
    <main className="h-[100vh] w-[100vw] overflow-hidden flex ">
      <Sidebar />
      <div className=" w-full bg-muted overflow-y-auto relative">
        <Header />
        <Outlet />
      </div>
    </main>
  );
}

export default AppLayout;
