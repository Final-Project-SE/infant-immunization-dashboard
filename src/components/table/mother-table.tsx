import { MRT_ColumnDef } from "material-react-table";
import Table from "../ui/table";
import {
  DeleteAdminAction,
  UpdateAdminAction,
} from "../table-action/admin-table-row-actions";
import { Mother } from "@/utils/types/component";

const columns: MRT_ColumnDef<Mother>[] = [
  {
    header: "Mother ID",
    accessorKey: "id",
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
      header: "Phone Number",
      accessorKey: "phone",
      enableSorting: true,
    },
    {
      header: "Email",
      accessorKey: "email",
      enableSorting: true,
    },
  
  {
    header: "Blood Type",
    accessorKey: "bloodType",
    enableSorting: true,
  },
  {
    header: "Birth Date",
    accessorKey: "birthDate",
    enableSorting: true,
    Cell: ({ cell }) => <p>{new Date(cell.getValue<Date>()).toLocaleDateString()}</p>,
  },
];

const MotherTable = ({ mothers }: { mothers: Mother[] }) => {
  return (
    <Table
      columnDefinition={columns as any}
      data={mothers}
      RowActions={[UpdateAdminAction, DeleteAdminAction]}
    />
  );
};

export default MotherTable;
