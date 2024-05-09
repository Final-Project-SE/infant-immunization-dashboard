import { useQuery } from "@tanstack/react-query";

import getAllHealthProfessionals from "./health-professional/get-all-health-professionals";

export default function useGetHealthProfessionals() {
  const {
    isPending,
    data: hp,
    error,
  } = useQuery({
    queryKey: ["hp"],
    queryFn: getAllHealthProfessionals,
  });

  return { isPending, hp, error };
}
