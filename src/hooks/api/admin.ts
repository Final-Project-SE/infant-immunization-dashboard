import { useQuery } from "@tanstack/react-query";

import getAdmins from "@/api/admin/get-admins";

export const useAdmins = () => {
  const {
    isPending,
    data: admins,
    error,
  } = useQuery({
    queryKey: ["adminsData"],
    queryFn: getAdmins,
  });

  return { isPending, admins, error };
};
