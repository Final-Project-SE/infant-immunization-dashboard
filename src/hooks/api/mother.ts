import getMotherById from "@/api/mother/get-mother-by-id";
import getMothers from "@/api/mother/get-mothers";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

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

export function useGetMother() {
  const { id } = useParams();
  const {
    isPending,
    data: mother,
    error,
  } = useQuery({
    queryKey: ["motherData", id],
    queryFn: () => getMotherById(Number(id)),
  });

  return { isPending, error, mother };
}
