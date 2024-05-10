import React from "react";
import PageHeader from "@/components/header/page-header";
import AdminTable from "@/components/table/admin-table";
import { Admin } from "@/utils/types/component";

import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";
import ErrorMessage from "@/components/error-display/error-message";
import { useAdmins } from "@/hooks/api/admin";

const Admins: React.FC = () => {
  const { isPending, error, admins } = useAdmins();
  console.log(admins);

  if (isPending) return <Spinner />;

  if (error) return <ErrorMessage error={error} />;

  const formattedAdminsData: Admin[] = admins.map((admin: any) => {
    return {
      id: admin.id,
      firstName: admin.profile.firstName,
      lastName: admin.profile.lastName,
      email: admin.email,
      role: admin.role,
      activeStatus: admin.activeStatus == true ? "active" : "inactive",
    };
  });
  console.log(formattedAdminsData);

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4 ">
      <PageHeader pageName="Admins" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <AdminTable admins={formattedAdminsData as Admin[]} />
      </div>
    </div>
  );
};

export default Admins;
