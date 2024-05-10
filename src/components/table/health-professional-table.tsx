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
const columns: MRT_ColumnDef<any>[] = [
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
    accessorFn: (originalRow) => originalRow.profile.firstName, //alternate way
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
    accessorFn: (originalRow) => originalRow.profile.middleName, //alternate way
    id: "middleName", //id required if you use accessorFn instead of accessorKey
    header: "Middle name",
    Header: <p>Middle name </p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  },
  // {
  //   enableColumnFilter: false,
  //   enableEditing: false,
  //   enableColumnActions: false,
  //   enableColumnDragging: false,
  //   accessorFn: (originalRow) => originalRow.profile.lastName, //alternate way
  //   id: "lastName", //id required if you use accessorFn instead of accessorKey
  //   header: "Last name",
  //   Header: <p>Last name </p>, //optional custom markup
  //   Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  // },
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
    enableSorting: true,
    enableColumnFilter: true,
    enableEditing: true,
    enableColumnActions: true,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.proProfile.position, //alternate way
    id: "position", //id required if you use accessorFn instead of accessorKey
    header: "Position",
    Header: <p>Position</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  },
];

const HealthProfessionalTable = ({
  healthProfessionals,
}: {
  healthProfessionals: any[];
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
