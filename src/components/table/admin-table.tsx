

import { type MRT_ColumnDef } from "material-react-table";

import Table from "../ui/table";
import AdminTableToolbarAction from "../table-action/admin-table-toolbar-action";
import {
  DeleteAdminAction,
  UpdateAdminAction,
} from "../table-action/admin-table-row-actions";
import { Admin } from "@/utils/types/component";

//column definitions...
const columns: MRT_ColumnDef<Admin>[] = [
  {
    enableSorting: false,
    enableEditing: false,
    enableColumnFilter: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    enableGlobalFilter: true,
    header: "Admin ID",
    accessorFn: (originalRow) => originalRow.id, //alternate way
    enableHiding: false, //disable a feature for this column
    Cell: ({ cell }) => (
      <p style={{ fontWeight: "bold" }}>
        {cell.getValue<number>().toLocaleString()}
      </p>
    ),
  },
  {
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.firstName, //alternate way
    id: "firstName", //id required if you use accessorFn instead of accessorKey
    header: "First name",
    Header: <p>First name</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>, //optional custom cell render
  },
  {
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.lastName, //alternate way
    id: "lastName", //id required if you use accessorFn instead of accessorKey
    header: "lastName",
    Header: <p>Last name </p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  },
  {
    enableSorting: false,
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.email, //alternate way
    id: "email", //id required if you use accessorFn instead of accessorKey
    header: "Email",
    Header: <p>Email</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render,
  },
  {
    enableSorting: false,
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.role, //alternate way
    id: "role", //id required if you use accessorFn instead of accessorKey
    header: "Role",
    Header: <p>Role</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  },
];

const AdminTable = ({ admins }: { admins: Admin[] }) => {
  return (
    <Table
      columnDefinition={columns as any}
      data={admins}
      RowActions={[UpdateAdminAction, DeleteAdminAction]}
      ToolBarAction={AdminTableToolbarAction}
    />
  );
};

export default AdminTable;
