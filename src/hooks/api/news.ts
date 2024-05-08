import { News } from "@/utils/types/component";
import { createNews, deleteNews, getAllNews, getSingleNews, updateNews } from "@/api/news/useNews";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useGetAllNews() {
  const {
    isPending,
    data: news,
    error,
  } = useQuery<News[]>({
    queryKey: ["newsData"],
    queryFn: getAllNews,
  });

  return { isPending, error, news };
}

export function useGetSingleNews() {
  const { id } = useParams();
  const {
    isPending,
    data: news,
    error,
  } = useQuery<News>({
    queryKey: ["singleNewsData", id],
    queryFn: () => getSingleNews(id as any),
  });

  return { isPending, error, news };
}

export function useCreateNews() {
  const queryClient = useQueryClient();

  const {
    isPending,
    mutate: create,
    error,
  } = useMutation({
    mutationFn: createNews,
    onSuccess: () => {
      toast.success(`News successfully created`);
      queryClient.invalidateQueries({
        queryKey: ["newsData"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isPending, error, create };
}

export function useUpdateNews() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const {
    isPending,
    mutate: update,
    error,
  } = useMutation({
    mutationFn: (data: News) => updateNews(id as any, data),
    onSuccess: () => {
      toast.success(`News successfully updated`);
      queryClient.invalidateQueries({
        queryKey: ["newsData"],
      });
    },
    onError: (err) => {
      toast.error(`There was an error while editing news`);
    },
  });

  return { isPending, error, update };
}

export function useDeleteNews() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const {
    isPending,
    mutate: remove,
    error,
  } = useMutation({
    mutationFn: () => deleteNews(id as any),
    onSuccess: () => {
      toast.success(`News successfully deleted`);
      queryClient.invalidateQueries({
        queryKey: ["newsData"],
      });
    },
    onError: (err) => {
      toast.error(`There was an error while deleting news`);
    },
  });

  return { isPending, error, remove };
}