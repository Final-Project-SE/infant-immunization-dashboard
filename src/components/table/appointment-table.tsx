
import { MRT_ColumnDef } from "material-react-table";
import Table from "../ui/table";
import { Appointment } from "@/utils/types/component";

const columns: MRT_ColumnDef<Appointment>[] = [
  {
    header: "Appointment ID",
    accessorKey: "id",
    enableSorting: true,
  },

  {
    header: "Mother ID",
    accessorKey: "motherId",
    enableSorting: true,
  },
 
  {
    header: "Name",
    accessorKey: "name",
    enableSorting: true,
  },
  {
    header: "Appointment Date",
    accessorKey: "appointmentDate",
    enableSorting: true,

  },
  {
    header: "Description",
    accessorKey: "description",
    enableSorting: true,
  },
];

const AppointmentTable = ({ appointments }: { appointments: Appointment[] }) => {
  return (
    <Table
      columnDefinition={columns as any}
      data={appointments}
    />
  );
};

export default AppointmentTable;
