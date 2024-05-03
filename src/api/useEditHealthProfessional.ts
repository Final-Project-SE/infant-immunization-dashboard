import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import config from "@/configs/config";
import { HealthProfessionalProp } from "@/utils/types/component";

export function useEditHealthProfessional() {
  return useMutation<unknown, Error, HealthProfessionalProp, unknown>({
    mutationFn: (healthProfessional: HealthProfessionalProp) =>
      axios.put(`${config.BASE_URL}/health-professionals/${healthProfessional.id}`, healthProfessional).then((res) => res.data),
  });
}