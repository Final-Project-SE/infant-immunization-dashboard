import PageHeader from "@/components/header/page-header";

import AppointmentTable from "@/components/table/appointment-table";
import { Appointment } from "@/utils/types/component";

// Dummy appointments data
const appointments: Appointment[] = [
  {
    id: 1,
    motherFirstName: "Abebech",
    motherLastName: "Kebede",
    motherMiddleName: "Alemu",
    healthStationName: "Jimma Health Center",
    visitDate: new Date(Date.now()),
    fromTime: "10:00",
    toTime: "11:00",
    visitTimeInterval: "10:00-11:00",
    healthProfessionalName: "Bekele Kebede",
    healthProfessionalEmail: "kebe@gmail.com",
    healthProfessionalTitle: "Doctor",
    status: "pending",
    createdDate: new Date(Date.now()),
  },
  {
    id: 2,
    motherFirstName: "Abebe",
    motherLastName: "Belete",
    motherMiddleName: "Alemu",
    healthStationName: "Jimma Health Center",
    visitDate: new Date(Date.now()),
    fromTime: "11:00",
    toTime: "12:00",
    visitTimeInterval: "11:00-12:00",
    healthProfessionalName: "Kebede Haile",
    healthProfessionalEmail: "kebede12@gmail.com",
    healthProfessionalTitle: "Health Officer",
    status: "completed",
    createdDate: new Date(Date.now()),
  },

  {
    id: 3,
    motherFirstName: "Abebech",
    motherLastName: "Kebede",
    motherMiddleName: "Alemu",
    healthStationName: "Jimma Health Center",
    visitDate: new Date(Date.now()),
    fromTime: "12:00",
    toTime: "13:00",
    visitTimeInterval: "12:00-13:00",
    healthProfessionalName: "Kaleab Mikael",
    healthProfessionalEmail: "kebede12@gmail.com",
    healthProfessionalTitle: "Health Officer",
    status: "cancelled",
    createdDate: new Date(Date.now()),
  },
];

function AppointmentsPage() {
  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="Appointments" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <AppointmentTable appointments={appointments as any} />
      </div>
    </div>
  );
}

export default AppointmentsPage;
