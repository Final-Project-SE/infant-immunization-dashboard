
import PageHeader from "@/components/header/page-header";
import AppointmentTable from "@/components/table/appointment-table";
import { Appointment } from "@/utils/types/component";


const appointments: Appointment[] = [
  {
    id: 1,
    motherId: 1,
    name: "Appointment 1",
    appointmentDate: "2024-04-15",
    description: "Description for appointment 1",
  },
  {
    id: 2,
    motherId: 2,
    name: "Appointment 2",
    appointmentDate: "2024-04-16",

    description: "Description for appointment 2",


  },
];

function AppointmentsPage() {
  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Appointments" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <AppointmentTable appointments={appointments} />
      </div>
    </div>
  );
}

export default AppointmentsPage;
