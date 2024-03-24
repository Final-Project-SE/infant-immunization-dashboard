
import React, { useEffect, useState } from 'react';

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

const Schedule: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointmentsData = async () => {
      try {
        const response = await fetch('/api/appointments');
        if (response.ok) {
          const data = await response.json();
          setAppointments(data.appointments);
        } else {
          throw new Error('Failed to fetch appointments data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointmentsData();
  }, []);

  return (
    <div>
      <h1>Schedule</h1>
      {appointments.map((appointment) => (
        <div key={appointment.appointmentId}>
          <h2>Appointment ID: {appointment.appointmentId}</h2>
          <p>User ID: {appointment.userId}</p>
          <p>Health Station ID: {appointment.healthStationId}</p>
          <p>Appointment Date: {appointment.appointmentDate}</p>
          <p>Created Date: {appointment.createdDate}</p>
          <p>Description: {appointment.description}</p>
          <p>Vaccine ID: {appointment.vaccineId}</p>
          <p>Status: {appointment.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
