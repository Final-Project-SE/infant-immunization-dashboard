
import React from 'react';
import PageHeader from "@/components/header/page-header";
import AdminTable from "@/components/table/admin-table";
import { Admin } from "@/utils/types/component";
import { useAdmins } from "@/api/useAdmins";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";

const Admins: React.FC = () => {
  const { isFetching, error, data: admins } = useAdmins();

  if (isFetching) return <Spinner />;

if (error) return <Empty resourceName="admins" />;


  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4 ">
      <PageHeader pageName="Admins" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <AdminTable admins={admins as Admin[]} />
      </div>
    </div>
  );
}

export default Admins;