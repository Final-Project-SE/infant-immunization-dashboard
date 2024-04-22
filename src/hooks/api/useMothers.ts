
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useMothers() {
  return useQuery({
    queryKey: ['mothersData'],
    queryFn: () =>
      axios.get('https://final-year-project-backend.onrender.com/api/mothers').then((res) => res.data),
  });
}
