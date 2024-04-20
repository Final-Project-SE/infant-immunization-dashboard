
import { useQuery } from '@tanstack/react-query';
import { Admin } from '@/utils/types/component';
import axios from 'axios';

export const useAdmins = () => {
  return useQuery<Admin[], Error>({
    queryKey: ['adminsData'],
    queryFn: () =>
      axios.get<Admin[]>('https://final-year-project-backend.onrender.com/api/admin').then((res) => res.data),
  });
};
