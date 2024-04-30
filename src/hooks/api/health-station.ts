import getAllHealthStations from "@/api/health-station/get-all-healthstations";

import { useQuery } from "@tanstack/react-query";

export function useGetHealthStations() {
  const {
    isPending,
    data: hs,
    error,
  } = useQuery({
    queryKey: ["healthStationData"],
    queryFn: getAllHealthStations,
  });

  return { isPending, error, hs };
}
