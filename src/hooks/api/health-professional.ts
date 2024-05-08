import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import registerHealthProfessional from "@/api/health-professional/register-healthprofessional";
import toast from "react-hot-toast";
import getAllHealthProfessionals from "@/api/health-professional/get-all-health-professionals";
import { useParams } from "react-router-dom";
import getSingleHP from "@/api/health-professional/get-single-health-professional";
import deleteOneHP from "@/api/health-professional/delete-one-health-professional";

export function useGetHealthProfessionals() {
  const {
    isPending,
    data: hp,
    error,
  } = useQuery({
    queryKey: ["healthProfessionalsData"],
    queryFn: getAllHealthProfessionals,
  });

  return { isPending, hp, error };
}

export function useRegisterHP() {
  const queryClient = useQueryClient();

  const {
    isPending,
    // data: hs,
    mutate: registerHP,
    error,
  } = useMutation({
    mutationFn: registerHealthProfessional,
    onSuccess: () => {
      //   console.log(data);
      toast.success(`Health professional succesfully regisstered`);
      queryClient.invalidateQueries({
        queryKey: ["healthProfessionalsData"],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(
        err.message ||
          err.stack ||
          "There was an error while creating health profesional"
      );
    },
  });

  return { isPending, error, registerHP };
}

export function useGetSingleHP() {
  const { id } = useParams();
  console.log(id);
  const {
    isPending,
    data: hp,
    error,
  } = useQuery({
    queryKey: ["healthProfessionalsData", id],
    queryFn: () => getSingleHP(id as any),
  });

  return { isPending, error, hp };
}

export function useDeleteHP() {
  const queryClient = useQueryClient();

  const {
    isPending,
    // data: hs,
    mutate: deleteHP,
    error,
  } = useMutation({
    mutationFn: (id) => deleteOneHP(id as any),
    onSuccess: () => {
      //   console.log(data);
      toast.success(`Health station succesfully deleted`);
      queryClient.invalidateQueries({
        queryKey: ["healthProfessionalsData"],
      });
      //   navigate("/bookings");
    },
    onError: (err) => {
      console.log(err);
      toast.error(`There was an error while deleting health station`);
    },
  });

  return { isPending, deleteHP, error };
}
