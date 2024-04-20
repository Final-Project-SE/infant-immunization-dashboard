import PageHeader from "@/components/header/page-header";
import HealthStationTable from "@/components/table/health-station-table";
import { HealthStation } from "@/utils/types/component";
import { useQuery } from "@tanstack/react-query";

function HealthStations() {
  const {
    isPending,
    error,
    data: healthstation,
  } = useQuery({
    queryKey: ["healthData"],
    queryFn: () =>
      fetch("https://final-year-project-backend.onrender.com/hs").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="health-stations" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <HealthStationTable healthStations={healthstation as HealthStation[]} />
      </div>
    </div>
  );
}

export default HealthStations;
