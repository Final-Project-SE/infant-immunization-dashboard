import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import config from "@/configs/config";

export default function useNews() {
  return useQuery({
    queryKey: ['newsData'],
    queryFn: () =>
      axios.get(`${config.BASE_URL}/news/`).then((res) => res.data),
  });
}