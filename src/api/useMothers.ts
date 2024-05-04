import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import config from "@/configs/config";


export default function useMothers() {
  return useQuery({
    queryKey: ['mothersData'],
    queryFn: () =>
      axios.get(`${config.BASE_URL}/mother/`).then((res) => res.data),
  });
}