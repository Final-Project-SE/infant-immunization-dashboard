//  Components
import PageHeader from "@/components/header/page-header";
import AdminTable from "@/components/table/admin-table";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";

//  Types
import { Admin } from "@/utils/types/component";

//  Hooks
import { useQuery } from "@tanstack/react-query";

// // Dummy admin data
// const admins: Admin[] = [
//   {
//     id: 1,
//     firstName: "Natnael",
//     lastName: "Deyas",
//     email: "natnaeldeyas@gmail.com",
//     role: "super-admin",
//     activeStatus: "active",
//   },
//   {
//     id: 2,
//     firstName: "Natnael",
//     lastName: "Assefa",
//     email: "nassefa@gmail.com",
//     role: "admin",
//     activeStatus: "active",
//   },
//   {
//     id: 3,
//     firstName: "Natnael",
//     lastName: "Fekadu",
//     email: "nafekadu@gmail.com",
//     role: "admin",
//     activeStatus: "active",
//   },
//   {
//     id: 4,
//     firstName: "Natnael",
//     lastName: "Getachew",
//     email: "natnaeln4d@gmail.com",
//     role: "admin",
//     activeStatus: "active",
//   },
// ];

function Admins() {
  const {
    isPending,
    // error,
    data: admins,
  } = useQuery({
    queryKey: ["adminsData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  if (isPending) return <Spinner />;

  if (!admins) return <Empty resourceName="admin" />;

  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="Admins" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <AdminTable admins={admins as Admin[]} />
      </div>
    </div>
  );
}

export default Admins;
