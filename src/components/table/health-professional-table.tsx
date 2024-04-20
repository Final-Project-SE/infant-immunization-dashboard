import { type MRT_ColumnDef } from "material-react-table";

import Table from "../ui/table";

// import HealthStationToo

import { HealthProfessionalProp } from "@/utils/types/component";
import {
  DeleteHealthProfessionalAction,
  UpdateHealthProfessionalAction,
} from "../table-action/health-professional-row-action";

import AddHealthStationToolbarAction from "../table-action/health-professional-toolbar-action";

//column definitions...
const columns: MRT_ColumnDef<HealthProfessionalProp>[] = [
  {
    enableSorting: false,
    enableEditing: false,
    enableColumnFilter: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    enableGlobalFilter: true,
    header: "HP ID",
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
    header: "Last name",
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
    accessorFn: (originalRow) => originalRow.title, //alternate way
    id: "position", //id required if you use accessorFn instead of accessorKey
    header: "Position",
    Header: <p>Position</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  },
];

const HealthProfessionalTable = ({
  healthProfessionals,
}: {
  healthProfessionals: HealthProfessionalProp[];
}) => {
  return (
    <Table
      columnDefinition={columns as any}
      data={healthProfessionals}
      RowActions={[
        UpdateHealthProfessionalAction,
        DeleteHealthProfessionalAction,
      ]}
      ToolBarAction={AddHealthStationToolbarAction}
    />
  );
};

export default HealthProfessionalTable;
