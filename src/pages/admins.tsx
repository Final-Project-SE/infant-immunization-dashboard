import PageHeader from "@/components/header/page-header";
import AdminTable from "@/components/table/admin-table";
import { Admin } from "@/utils/types/component";

function Admins() {
  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="Admins" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative"></div>
    </div>
  );
}

export default Admins;
