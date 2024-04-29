import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useReports() {
  return useQuery({
    queryKey: ['reportsData'],
    queryFn: () =>
      axios.get('https://final-year-project-backend.onrender.com/api/reports').then((res) => res.data),
  });
}
