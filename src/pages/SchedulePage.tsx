import React, { useEffect, useState } from 'react';
import PageHeader from '@/components/header/page-header';

interface Appointment {
  appointmentId: number;
  userId: number;
  healthStationId: number;
  appointmentDate: string;
  createdDate: string;
  description: string;
  vaccineId: number;
  status: string;
}

const SchedulePage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
   
    const fetchAppointmentsData = async () => {
      try {
        
        const dummyData: Appointment[] = [
          {
            appointmentId: 1,
            userId: 1,
            healthStationId: 1,
            appointmentDate: '2024-04-15',
            createdDate: '2024-04-01',
            description: 'Regular checkup',
            vaccineId: 1,
            status: 'Confirmed',
          },
          {
            appointmentId: 2,
            userId: 1,
            healthStationId: 2,
            appointmentDate: '2024-04-20',
            createdDate: '2024-04-05',
            description: 'Vaccination',
            vaccineId: 2,
            status: 'Pending',
          },
          
        ];
        setAppointments(dummyData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointmentsData();
  }, []);

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Schedule" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Appointment ID</th>
              <th className="px-4 py-2">Health Station ID</th>
              <th className="px-4 py-2">Appointment Date</th>
              <th className="px-4 py-2">Created Date</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Vaccine ID</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.appointmentId}>
                <td className="border px-4 py-2">{appointment.appointmentId}</td>
                <td className="border px-4 py-2">{appointment.healthStationId}</td>
                <td className="border px-4 py-2">{appointment.appointmentDate}</td>
                <td className="border px-4 py-2">{appointment.createdDate}</td>
                <td className="border px-4 py-2">{appointment.description}</td>
                <td className="border px-4 py-2">{appointment.vaccineId}</td>
                <td className="border px-4 py-2">{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchedulePage;
