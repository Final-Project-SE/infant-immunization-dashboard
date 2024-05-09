import getMothers from "@/api/mother/get-mothers";
import { useQuery } from "@tanstack/react-query";

export function useGetMothers() {
  const {
    isPending,
    data: mothers,
    error,
  } = useQuery({
    queryKey: ["mothersData"],
    queryFn: getMothers,
  });

  return { isPending, error, mothers };
}
