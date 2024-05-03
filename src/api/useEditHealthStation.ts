import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import config from "@/configs/config";
import { HealthStation } from "@/utils/types/component";

export function useEditHealthStation() {
  return useMutation<unknown, Error, HealthStation, unknown>({
    mutationFn: (healthStation: HealthStation) =>
      axios.put(`${config.BASE_URL}/health-stations/${healthStation.id}`, healthStation).then((res) => res.data),
  });
}