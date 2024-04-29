
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useHealthProfessionals() {
  return useQuery({
    queryKey: ['healthProfessionalsData'],
    
    queryFn: () =>
      axios.get('https://final-year-project-backend.onrender.com/api/health-professionals').then((res) => res.data),
  });
}
