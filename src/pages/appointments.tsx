import PageHeader from "@/components/header/page-header";
import AppointmentTable from "@/components/table/appointment-table";
import useAppointments from "@/api/useAppointments";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";
import { Appointment } from "@/utils/types/component";

const appointments: Appointment[] = [
  {
    id: 1,
    // motherFirstName: "Jane",
    // motherLastName: "Doe",
    // motherMiddleName: "Doe",
    motherFullName: "Jane Doe",
    healthProfessionalFullName: "John Doe",

    visitDate: new Date(),
    fromTime: "10:00",
    toTime: "11:00",
    visitTimeInterval: "10:00 - 11:00",
    status: "pending",
  },
  {
    id: 2,
    motherFullName: "Jane Doe",
    healthProfessionalFullName: "John Doe",

    visitDate: new Date(),
    fromTime: "10:00",
    toTime: "11:00",
    visitTimeInterval: "10:00 - 11:00",
    status: "pending",
  },
  {
    id: 3,

    motherFullName: "Jane Doe",
    healthProfessionalFullName: "John Doe",

    visitDate: new Date(),
    fromTime: "10:00",
    toTime: "11:00",
    visitTimeInterval: "10:00 - 11:00",
    status: "pending",
  },
];

function AppointmentsPage() {
  // const { isFetching, error, data: appointments } = useAppointments();

  // if (isFetching) return <Spinner/>;

  // if (error) return <Empty resourceName="appointments" />;
  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="Appointments" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <AppointmentTable appointments={appointments as Appointment[]} />
      </div>
    </div>
  );
}

export default AppointmentsPage;
