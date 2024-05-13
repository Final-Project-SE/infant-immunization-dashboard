import { type MRT_ColumnDef } from "material-react-table";

import Table from "../ui/table";

import { MotherVaccine, Vaccine } from "@/utils/types/component";
import VaccineTableToolbarAction from "../table-action/vaccine-action";
import {
  DeleteVaccineRowAction,
  UpdateVaccineRowAction,
  DeactivateVaccineRowAction,
  ViewDetailRowAction,
} from "../table-action/vaccine-row-action";

//column definitions...
const columns: MRT_ColumnDef<MotherVaccine>[] = [
  {
    enableSorting: false,
    enableEditing: false,
    enableColumnFilter: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    enableGlobalFilter: true,
    header: "MV ID",
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
    accessorFn: (originalRow) => originalRow.vaccine,
    id: "name",
    header: "Vaccine name",
    Header: <p>Vaccine name</p>,
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>, //optional custom cell render
  },

  {
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.healthStation,
    id: "healthStation",
    header: "Health Station",
    Header: <p>Health Station</p>,
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>, //optional custom cell render
  },
  {
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.givenDate,
    id: "givenDate",
    header: "Given Date",
    Header: <p>Given Date</p>,
    Cell: ({ cell }) => (
      <p style={{ fontWeight: "bold" }}>
        {cell.getValue<string>().toLocaleString()}
      </p>
    ),
  },
  // Add more columns as per your requirements...
];

const ChildrenOfMotherVaccTable = ({
  vaccines,
}: {
  vaccines: MotherVaccine[];
}) => {
  console.log(vaccines);
  return (
    <Table
      columnDefinition={columns as any}
      data={vaccines}
      RowActions={
        [
          // ViewDetailRowAction,
          // UpdateVaccineRowAction,
          // DeactivateVaccineRowAction,
          // DeleteVaccineRowAction,
        ]
      }
      //   ToolBarAction={VaccineTableToolbarAction}
    />
  );
};

export default ChildrenOfMotherVaccTable;
