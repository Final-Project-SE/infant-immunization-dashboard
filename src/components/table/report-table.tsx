
import { MRT_ColumnDef } from "material-react-table";
import Table from "../ui/table";
import { Report } from "@/utils/types/component"; 
import {
  DeleteReportRowAction,
  UpdateReportRowAction,
  ViewDetailRowAction,
} from "../table-action/report-row-action";

// Define column definitions for the report table
const columns: MRT_ColumnDef<Report>[] = [
  {
    enableSorting: false,
    enableEditing: false,
    enableColumnFilter: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    enableGlobalFilter: true,
    header: "Report ID",
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
    accessorFn: (originalRow) => originalRow.title,
    id: "title",
    header: "Title",
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>,
  },
  // Define other columns as per your requirement
];

const ReportTable = ({
  reports,
}: {
  reports: Report[];
}) => {
  return (
    <Table
      columnDefinition={columns as any}
      data={reports}
      RowActions={[
        ViewDetailRowAction,
        UpdateReportRowAction,
        DeleteReportRowAction,
      ]} // Ensure these actions are defined
      // Add ToolBarAction if necessary
    />
  );
};

export default ReportTable;
