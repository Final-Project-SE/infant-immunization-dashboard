import { MRT_ColumnDef } from "material-react-table";
import Table from "../ui/table";
import { TreatmentInformation } from "@/utils/types/component";
import TreatmentInformationTableToolbarAction from "../table-action/treatment-information-action";
import {
  DeleteTreatmentInformationRowAction,
  UpdateTreatmentInformationRowAction,
  ViewDetailRowAction,
} from "../table-action/treatment-information-row-action";

//column definitions...
const columns: MRT_ColumnDef<TreatmentInformation>[] = [
  {
    enableSorting: true,
    enableEditing: false,
    enableColumnFilter: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    enableGlobalFilter: true,
    header: "Service ID",
    accessorFn: (originalRow) => originalRow?.id ?? 'N/A',
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
    accessorFn: (originalRow) => originalRow?.healthStation?.name ?? 'N/A',
    id: "healthStationName",
    header: "Health station name",
    Header: <p>Health station name</p>,
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>,
  },
  {
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow?.serviceOr ?? 'N/A',
    id: "service",
    header: "Service",
    Header: <p>Service</p>,
    Cell: ({ cell }) => <p>{cell.getValue<string>()}</p>,
  },
  {
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow?.descriptionOr ?? 'N/A',
    id: "description",
    header: "Description",
    Header: <p>Description</p>,
    Cell: ({ cell }) => <p>{cell.getValue<string>()}</p>,
  },
];

const TreatmentInformationTable = ({
  treatmentInformations,
}: {
  treatmentInformations: TreatmentInformation[];
}) => {
  console.log(treatmentInformations);
  return (
    <Table
      columnDefinition={columns as any}
      data={treatmentInformations}
      RowActions={[
        ViewDetailRowAction,
        UpdateTreatmentInformationRowAction,
        DeleteTreatmentInformationRowAction,
      ]}
      ToolBarAction={TreatmentInformationTableToolbarAction}
    />
  );
};

export default TreatmentInformationTable;