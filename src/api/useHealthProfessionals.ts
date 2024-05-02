import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import config from "@/configs/config";

export default function useHealthProfessionals() {
  return useQuery({
    queryKey: ['healthProfessionalsData'],
    
    queryFn: () =>
      axios.get(`${config.BASE_URL}/health-professionals`).then((res) => res.data),
  });
}