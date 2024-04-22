import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export  function useHealthStations() {
  return useQuery({
    queryKey: ["healthData"],
    queryFn: () =>
      axios
        .get("https://final-year-project-backend.onrender.com/api/hs/all")
        .then((res) => res.data),
  });
}
