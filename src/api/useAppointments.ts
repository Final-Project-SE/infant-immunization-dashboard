import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import config from "@/configs/config";

export default function useAppointments() {
  return useQuery({
    queryKey: ['appointmentsData'],
    queryFn: () =>
      axios.get(`${config.BASE_URL}/appointment`).then((res) => res.data),
  });
}

