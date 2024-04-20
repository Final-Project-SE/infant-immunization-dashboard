import { type MRT_ColumnDef } from "material-react-table";

import Table from "../ui/table";
import AdminTableToolbarAction from "../table-action/admin-table-toolbar-action";
import {
  DeleteAdminAction,
  UpdateAdminAction,
} from "../table-action/admin-table-row-actions";
import { Admin, Appointment } from "@/utils/types/component";
import { formatDate } from "@/utils/constants/date";
import CreateAppointmentToolbarAction from "../table-action/appointment-toolbar-action";
import {
  CancelAppointment,
  DeleteAppointment,
  RescheduleAppointment,
  SendReminder,
  ViewAppointment,
} from "../table-action/appointment-row-actions";

//column definitions...
const columns: MRT_ColumnDef<Appointment>[] = [
  {
    enableSorting: false,
    enableEditing: false,
    enableColumnFilter: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    enableGlobalFilter: true,
    header: "App. ID",
    accessorFn: (originalRow) => originalRow.id, //alternate way
    enableHiding: false, //disable a feature for this column
    Cell: ({ cell }) => (
      <p style={{ fontWeight: "bold" }}>
        {cell.getValue<number>().toLocaleString()}
      </p>
    ),
  },
  {
    enableSorting: true,
    enableColumnFilter: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.motherFirstName, //alternate way
    id: "motherName", //id required if you use accessorFn instead of accessorKey
    header: "Mother name",
    Header: <p>Mother name</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>, //optional custom cell render
  },
  {
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.motherLastName, //alternate way
    id: "motherLastName", //id required if you use accessorFn instead of accessorKey
    header: "Mother name",
    Header: <p>Last name</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>, //optional custom cell render
  },
  {
    enableSorting: true,
    enableColumnFilter: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.healthProfessionalName, //alternate way
    id: "healthProfessionalName", //id required if you use accessorFn instead of accessorKey
    header: "Health Pr. Name ",
    Header: <p>Health Pr. Name </p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  },

  {
    enableSorting: true,
    enableColumnFilter: true,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => formatDate(originalRow.visitDate), //alternate way
    id: "visitDate", //id required if you use accessorFn instead of accessorKey
    header: "Visit Date",
    Header: <p>Visit Date</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render,
  },
  {
    enableSorting: true,
    enableColumnFilter: true,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.visitTimeInterval, //alternate way
    id: "visitTimeInterval", //id required if you use accessorFn instead of accessorKey
    header: "Visit Time",
    Header: <p>Visit Time</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  },
  {
    enableSorting: true,
    enableColumnFilter: true,
    enableEditing: false,
    enableColumnActions: true,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.status, //alternate way
    id: "status", //id required if you use accessorFn instead of accessorKey
    header: "Status",
    Header: <p>Status</p>, //optional custom markup
    Cell: ({ cell }) => <p>{cell.getValue<number>().toLocaleString()}</p>, //optional custom cell render
  },
];

const AppointmentTable = ({
  appointments,
}: {
  appointments: Appointment[];
}) => {
  return (
    <Table
      columnDefinition={columns as any}
      data={appointments}
      RowActions={[
        ViewAppointment,
        RescheduleAppointment,
        SendReminder,
        CancelAppointment,
        DeleteAppointment,
      ]}
      ToolBarAction={CreateAppointmentToolbarAction}
    />
  );
};

export default AppointmentTable;
