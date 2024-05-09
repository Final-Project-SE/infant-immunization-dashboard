import CreateHealthStation from "@/api/health-station/create-healthstation";
import deleteOneHealthStation from "@/api/health-station/delete-one-healthstation";
import getAllHealthStations from "@/api/health-station/get-all-healthstations";
import getSingleHealthStation from "@/api/health-station/get-single-healthstation";
import updateHealthStation from "@/api/health-station/update-healthstation";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useGetHealthStations() {
  const {
    isPending,
    data: hs,
    error,
  } = useQuery({
    queryKey: ["healthStationsData"],
    queryFn: getAllHealthStations,
  });

  return { isPending, error, hs };
}

export function useGetHealthStation() {
  const { id } = useParams();
  console.log(id);
  const {
    isPending,
    data: hs,
    error,
  } = useQuery({
    queryKey: ["healthStationData", id],
    queryFn: () => getSingleHealthStation(id as any),
  });

  return { isPending, error, hs };
}

export function useCreateHealthStation() {
  const queryClient = useQueryClient();

  const {
    isPending,
    // data: hs,
    mutate: createHs,
    error,
  } = useMutation({
    mutationFn: CreateHealthStation,
    onSuccess: () => {
      //   console.log(data);
      toast.success(`Health station succesfully created`);
      queryClient.invalidateQueries({
        queryKey: ["healthStationsData"],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(
        err.message ||
          err.stack ||
          "There was an error while creating health station"
      );
    },
  });

  return { isPending, error, createHs };
}

export function useUpdateHealthStation() {
  const queryClient = useQueryClient();

  const {
    isPending,
    // data: hs,
    mutate: updateHs,
    error,
  } = useMutation({
    mutationFn: ({ id, data }: { id: any; data: any }) =>
      updateHealthStation(id, data) as any,
    onSuccess: () => {
      //   console.log(data);
      toast.success(`Health station succesfully updated`);
      queryClient.invalidateQueries({
        queryKey: ["healthStationsData"],
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(`There was an error while editing health station`);
    },
  });

  return { isPending, error, updateHs };
}

export function useDeleteHealthStation() {
  const queryClient = useQueryClient();

  const {
    isPending,
    // data: hs,
    mutate: deleteHs,
    error,
  } = useMutation({
    mutationFn: (id) => deleteOneHealthStation(id as any),
    onSuccess: () => {
      //   console.log(data);
      toast.success(`Health station succesfully deleted`);
      queryClient.invalidateQueries({
        queryKey: ["healthStationsData"],
      });
      //   navigate("/bookings");
    },
    onError: (err) => {
      console.log(err);
      toast.error(`There was an error while deleting health station`);
    },
  });

  return { isPending, error, deleteHs };
}
