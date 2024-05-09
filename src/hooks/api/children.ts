import getChildren from "@/api/children/get-childrens";
import { useQuery } from "@tanstack/react-query";

export function useGetChildren() {
  const {
    isPending,
    data: children,
    error,
  } = useQuery({
    queryKey: ["childrenData"],
    queryFn: getChildren,
  });

  return { isPending, error, children };
}