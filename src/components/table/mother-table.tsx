import { type MRT_ColumnDef } from "material-react-table";

import Table from "../ui/table";

import { Mother } from "@/utils/types/component";
import {
  DeleteMotherAction,
  UpdateMotherAction,
  ViewAppointmentsAction,
  ViewDetailAction,
} from "../table-action/mother-table-row-actions";

//column definitions...
const columns: MRT_ColumnDef<Mother>[] = [
  {
    enableSorting: false,
    enableEditing: false,
    enableColumnFilter: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    enableGlobalFilter: true,
    header: "Mother ID",
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
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.middleName, //alternate way
    id: "middleName", //id required if you use accessorFn instead of accessorKey
    header: "middleName",
    Header: <p>Middle name </p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  },
  // {
  //   enableSorting: false,
  //   enableColumnFilter: false,
  //   enableEditing: false,
  //   enableColumnActions: false,
  //   enableColumnDragging: false,
  //   accessorFn: (originalRow) => originalRow.bloodType, //alternate way
  //   id: "bloodType", //id required if you use accessorFn instead of accessorKey
  //   header: "bloodType",
  //   Header: <p>Blood</p>, //optional custom markup
  //   Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render,
  // },
  {
    enableSorting: false,
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.phone, //alternate way
    id: "phone", //id required if you use accessorFn instead of accessorKey
    header: "phone",
    Header: <p>Phone</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  },
];

const MotherTable = ({ mothers }: { mothers: Mother[] }) => {
  return (
    <Table
      columnDefinition={columns as any}
      data={mothers}
      RowActions={[
        ViewDetailAction,
        ViewAppointmentsAction,
        UpdateMotherAction,
        DeleteMotherAction,
      ]}
      // ToolBarAction={}
    />
  );
};

export default MotherTable;
