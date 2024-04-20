import Empty from "@/components/error-display/empty";
import PageHeader from "@/components/header/page-header";
import HealthStationTable from "@/components/table/health-station-table";
import { Spinner } from "@/components/ui";
import { HealthStation } from "@/utils/types/component";
import { useHealthStations } from "@/hooks/api/useHealthStations";

const HealthStations: React.FC = () => {
  const { isFetching, error, data: healthStations } = useHealthStations();

 
if (isFetching) return <Spinner />;

if (error) return <Empty resourceName="health station" />;

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4 ">
      <PageHeader pageName="health-stations" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <HealthStationTable healthStations={healthStations as HealthStation[]} />
      </div>
    </div>
  );
}

export default HealthStations;


