import getChildrenByMother from "@/api/children/get-children-by-mother";
import getChildren from "@/api/children/get-childrens";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

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

export function useGetChildrenByMother() {
  const { id } = useParams();
  const {
    isPending,
    data: children,
    error,
  } = useQuery({
    queryKey: ["childrenData", id],
    queryFn: () => getChildrenByMother(Number(id)),
  });

  return { isPending, error, children };
}
