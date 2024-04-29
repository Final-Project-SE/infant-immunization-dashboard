
import { HealthProfessionalProp } from "@/utils/types/component";
import PageHeader from "@/components/header/page-header";
import HealthProfessionalTable from "@/components/table/health-professional-table";
import useHealthProfessionals from "@/hooks/api/useHealthProfessionals";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";





function HealthProfessionals() {
  const { isFetching, error, data: healthProfessionals } = useHealthProfessionals();

  if (isFetching) return <Spinner />;

if (error) return <Empty resourceName="health-professional" />;

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Health Professionals" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <HealthProfessionalTable healthProfessionals={healthProfessionals as HealthProfessionalProp[]} />
      </div>
    </div>
  );
}

export default HealthProfessionals;

