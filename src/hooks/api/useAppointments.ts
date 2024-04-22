import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useAppointments() {
  return useQuery({
    queryKey: ['appointmentsData'],
    queryFn: () =>
      axios.get('https://final-year-project-backend.onrender.com/api/appointments').then((res) => res.data),
  });
}
