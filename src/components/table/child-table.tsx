import { MRT_ColumnDef } from "material-react-table";
import Table from "../ui/table";
import {
  DeleteAdminAction,
  UpdateAdminAction,
} from "../table-action/admin-table-row-actions";
import { Child } from "@/utils/types/component";

const columns: MRT_ColumnDef<Child>[] = [
  {
    header: "Child ID",
    accessorKey: "id",
    enableSorting: true,
  },
  {
    header: "Mother ID",
    accessorKey: "mother.id", 
    enableSorting: true,
  },
  {
    header: "First Name",
    accessorKey: "firstName",
    enableSorting: true,
  },
  {
    header: "Last Name",
    accessorKey: "lastName",
    enableSorting: true,
  },
  {
    header: "Middle Name",
    accessorKey: "middleName",
    enableSorting: true,
  },
  {
    header: "Birth Date",
    accessorKey: "birthDate",
    enableSorting: true,
    Cell: ({ cell }) => <p>{new Date(cell.getValue<Date>()).toLocaleDateString()}</p>,
  },
];

const ChildTable = ({ children }: { children: Child[] }) => {
  return (
    <Table
      columnDefinition={columns as any}
      data={children}
      RowActions={[UpdateAdminAction, DeleteAdminAction]}
    />
  );
};

export default ChildTable;
