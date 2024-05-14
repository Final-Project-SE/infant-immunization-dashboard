import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Vaccine } from "@/utils/types/component";
import {
  createVaccine,
  deleteVaccine,
  getAllVaccines,
  getSingleVaccine,
  updateVaccine,
} from "@/api/vaccine/useVaccines";
import getVaccinesOfMother from "@/api/vaccine/get-vaccines-of-mother";
import getVaccinesOfChildrenOfMother from "@/api/vaccine/get-vacc-of-children-of-mother";
import {
  getVaccinationsOfChild,
  vaccinateChild,
} from "@/api/vaccine/vaccineApi";

export function useGetVaccines() {
  const {
    isPending,
    data: vaccines,
    error,
  } = useQuery<Vaccine[]>({
    queryKey: ["vaccinesData"],
    queryFn: getAllVaccines,
  });

  return { isPending, error, vaccines };
}

export function useGetVaccine() {
  const { id } = useParams();
  const {
    isPending,
    data: vaccine,
    error,
  } = useQuery<Vaccine>({
    queryKey: ["vaccineData", id],
    queryFn: () => getSingleVaccine(id as any),
  });

  return { isPending, error, vaccine };
}

export function useCreateVaccine() {
  const queryClient = useQueryClient();

  const {
    isPending,
    mutate: create,
    error,
  } = useMutation({
    mutationFn: createVaccine,
    onSuccess: () => {
      toast.success(`Vaccine successfully created`);
      queryClient.invalidateQueries({
        queryKey: ["vaccinesData"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isPending, error, create };
}

export function useUpdateVaccine() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const {
    isPending,
    mutate: update,
    error,
  } = useMutation({
    mutationFn: (data: Vaccine) => updateVaccine(id as any, data),
    onSuccess: () => {
      toast.success(`Vaccine successfully updated`);
      queryClient.invalidateQueries({
        queryKey: ["vaccinesData"],
      });
    },
    onError: (err) => {
      toast.error(`There was an error while editing vaccine`);
    },
  });

  return { isPending, error, update };
}

export function useDeleteVaccine() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const {
    isPending,
    mutate: remove,
    error,
  } = useMutation({
    mutationFn: () => deleteVaccine(id as any),
    onSuccess: () => {
      toast.success(`Vaccine successfully deleted`);
      queryClient.invalidateQueries({
        queryKey: ["vaccinesData"],
      });
    },
    onError: (err) => {
      toast.error(`There was an error while deleting vaccine`);
    },
  });

  return { isPending, error, remove };
}

export function useGetVaccinesOfMother() {
  const { id } = useParams();
  const {
    isPending,
    data: vaccines,
    error,
  } = useQuery({
    queryKey: ["vaccineData", id],
    queryFn: () => getVaccinesOfMother(id as any),
  });

  return { isPending, error, vaccines };
}

export function useGetChildrenVaccOfMother() {
  const { id } = useParams();
  const {
    isPending,
    data: vaccines,
    error,
  } = useQuery({
    queryKey: ["childrenVaccineData", id],
    queryFn: () => getVaccinesOfChildrenOfMother(id as any),
  });

  return { isPending, error, vaccines };
}

export function useGetVaccinationsOfChild() {
  const { id } = useParams();
  const {
    isPending,
    data: vaccines,
    error,
  } = useQuery({
    queryKey: ["vaccineData", id],
    queryFn: () => getVaccinationsOfChild(id as any),
  });
  return { isPending, vaccines, error };
}

export function useAddVaccinateChild() {
  const queryClient = useQueryClient();

  const {
    isPending,
    // data: hs,
    mutate: AddVaccinateChild,
    error,
  } = useMutation({
    mutationFn: vaccinateChild,
    onSuccess: () => {
      //   console.log(data);
      toast.success(`Child vacccination stored successfully`);
      queryClient.invalidateQueries({
        queryKey: ["childVaccines"],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(
        err.message ||
          err.stack ||
          "There was an error while storing vaccination"
      );
    },
  });

  return { isPending, error, AddVaccinateChild };
}
