import { type MRT_ColumnDef } from "material-react-table";

import Table from "../ui/table";

import { HealthStation } from "@/utils/types/component";
import HealthStationTableToolbarAction from "../table-action/health-station-action";
import {
  DeleteHealthStationRowAction,
  UpdateHealthStationRowAction,
  DeactivateHealthStationRowAction,
  ViewDetailRowAction,
} from "../table-action/health-station-row-action";

//column definitions...
const columns: MRT_ColumnDef<HealthStation>[] = [
  {
    enableSorting: false,
    enableEditing: false,
    enableColumnFilter: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    enableGlobalFilter: true,
    header: "Station ID",
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
    accessorFn: (originalRow) => originalRow.name, //alternate way
    id: "name", //id required if you use accessorFn instead of accessorKey
    header: "Health station name",
    Header: <p>Health station name</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>, //optional custom cell render
  },
  {
    enableColumnFilter: true,
    enableEditing: true,
    enableColumnActions: true,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.type, //alternate way
    id: "type", //id required if you use accessorFn instead of accessorKey
    header: "Type",
    Header: <p>Type </p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  },

  {
    enableSorting: true,
    enableColumnFilter: true,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.city, //alternate way
    id: "city", //id required if you use accessorFn instead of accessorKey
    header: "City",
    Header: <p>City</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  },
  {
    enableSorting: true,
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.subcity, //alternate way
    id: "subcity", //id required if you use accessorFn instead of accessorKey
    header: "subcity",
    Header: <p>Subcity</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render,
  },
];

const HealthStationTable = ({
  healthStations,
}: {
  healthStations: HealthStation[];
}) => {
  console.log(healthStations);
  return (
    <Table
      columnDefinition={columns as any}
      data={healthStations}
      RowActions={[
        ViewDetailRowAction,
        UpdateHealthStationRowAction,
        DeactivateHealthStationRowAction,
        DeleteHealthStationRowAction,
      ]}
      ToolBarAction={HealthStationTableToolbarAction}
    />
  );
};

export default HealthStationTable;
