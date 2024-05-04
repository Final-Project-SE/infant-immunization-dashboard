import { type MRT_ColumnDef } from "material-react-table";

import Table from "../ui/table";

import { Child } from "@/utils/types/component";
import {
  DeleteChildAction,
  UpdateChildAction,
  ViewDetailAction,
} from "../table-action/children-table-row-actions";

//column definitions...
const columns: MRT_ColumnDef<Child>[] = [
  {
    enableSorting: false,
    enableEditing: false,
    enableColumnFilter: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    enableGlobalFilter: true,
    header: "Child ID",
    accessorFn: (originalRow) => originalRow.id,
    enableHiding: false,
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
    accessorFn: (originalRow) => originalRow.firstName,
    id: "firstName",
    header: "First name",
    Header: <p>First name</p>,
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>,
  },
  {
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.lastName,
    id: "lastName",
    header: "Last name",
    Header: <p>Last name</p>,
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>,
  },
  {
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.middleName,
    id: "middleName",
    header: "Middle name",
    Header: <p>Middle name</p>,
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>,
  },
  {
    enableSorting: false,
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.birthDate,
    id: "birthDate",
    header: "Birth date",
    Header: <p>Birth date</p>,
    Cell: ({ cell }) => <p>{cell.getValue<Date>().toLocaleString()}</p>,
  },
];

const ChildrenTable = ({ children }: { children: Child[] }) => {
  return (
    <Table
      columnDefinition={columns as any}
      data={children}
      RowActions={[
        ViewDetailAction,
        UpdateChildAction,
        DeleteChildAction,
      ]}
    />
  );
};

export default ChildrenTable;