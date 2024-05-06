import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import config from "@/configs/config";

export default function useChildren() {
  return useQuery({
    queryKey: ['childrenData'],
    queryFn: () =>
      axios.get(`${config.BASE_URL}/children/`).then((res) => res.data),
  });
}