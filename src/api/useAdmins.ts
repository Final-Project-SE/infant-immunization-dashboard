
import { useQuery } from '@tanstack/react-query';
import { Admin } from '@/utils/types/component';
import axios from 'axios';
import config from "@/configs/config";

export const useAdmins = () => {
  return useQuery<Admin[], Error>({
    queryKey: ['adminsData'],
    queryFn: () =>
      axios.get<Admin[]>(`${config.BASE_URL}/admin`).then((res) => res.data),
  });
};