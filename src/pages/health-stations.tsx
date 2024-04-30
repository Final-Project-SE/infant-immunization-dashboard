import Empty from "@/components/error-display/empty";

import ErrorMessage from "@/components/error-display/error-message";
import PageHeader from "@/components/header/page-header";
import HealthStationTable from "@/components/table/health-station-table";
import { Spinner } from "@/components/ui";

import { useGetHealthStations } from "@/hooks/api/health-station";
import { HealthStation } from "@/utils/types/component";

function HealthStations() {
  const { isPending, error, hs } = useGetHealthStations();

  console.log(hs);

  if (isPending) return <Spinner />;

  if (error) return <ErrorMessage error={error} />;

  if (!hs) return <Empty resourceName="health station" />;

  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="health-stations" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <HealthStationTable healthStations={hs as HealthStation[]} />
      </div>
    </div>
  );
}

export default HealthStations;
