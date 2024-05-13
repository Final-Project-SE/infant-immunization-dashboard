
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

import {createTreatmentInformation, deleteOneTreatmentInformation, getAllTreatmentInformations, getSingleTreatmentInformation, updateTreatmentInformation} from "@/api/treatment-information/treatment-api"


export function useGetTreatmentInformations() {
  const {
    isPending,
    data: ti,
    error,
  } = useQuery({
    queryKey: ["treatmentInformationsData"],
    queryFn: getAllTreatmentInformations,
  });

  return { isPending, error, ti };
}

export function useGetTreatmentInformation() {
  const { id } = useParams();
  const {
    isPending,
    data: ti,
    error,
  } = useQuery({
    queryKey: ["treatmentInformationData", id],
    queryFn: () => getSingleTreatmentInformation(id as any),
  });

  return { isPending, error, ti };
}

export function useCreateTreatmentInformation() {
  const queryClient = useQueryClient();

  const {
    isPending,
    mutate: createTi,
    error,
  } = useMutation({
    mutationFn: createTreatmentInformation,
    onSuccess: () => {
      toast.success(`Treatment information successfully created`);
      queryClient.invalidateQueries({
        queryKey: ["treatmentInformationsData"],
      });
    },
    onError: (err) => {
      toast.error(
        err.message ||
          err.stack ||
          "There was an error while creating treatment information"
      );
    },
  });

  return { isPending, error, createTi };
}

export function useUpdateTreatmentInformation() {
  const queryClient = useQueryClient();

  const {
    isPending,
    mutate: updateTi,
    error,
  } = useMutation({
    mutationFn: ({ id, data }: { id: any; data: any }) =>
      updateTreatmentInformation(id, data) as any,
    onSuccess: () => {
      toast.success(`Treatment information successfully updated`);
      queryClient.invalidateQueries({
        queryKey: ["treatmentInformationsData"],
      });
    },
    onError: (err) => {
      toast.error(`There was an error while editing treatment information`);
    },
  });

  return { isPending, error, updateTi };
}

export function useDeleteTreatmentInformation() {
  const queryClient = useQueryClient();

  const {
    isPending,
    mutate: deleteTi,
    error,
  } = useMutation({
    mutationFn: (id) => deleteOneTreatmentInformation(id as any),
    onSuccess: () => {
      toast.success(`Treatment information successfully deleted`);
      queryClient.invalidateQueries({
        queryKey: ["treatmentInformationsData"],
      });
    },
    onError: (err) => {
      toast.error(`There was an error while deleting treatment information`);
    },
  });

  return { isPending, error, deleteTi };
}