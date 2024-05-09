import { Spinner } from "@/components/ui";
import { useGetVaccines } from "@/hooks/api/vaccine";
import { Vaccine } from "@/utils/types/component";
import PageHeader from "@/components/header/page-header";
import VaccineTable from "@/components/table/vaccine-table";
import Empty from "@/components/error-display/empty";
import ErrorMessage from "@/components/error-display/error-message";

function Vaccines() {
  const { isPending, error, vaccines } = useGetVaccines();

  if (isPending) return <Spinner />;

  if (error) return <ErrorMessage error={error} />;

  if (!vaccines) return <Empty resourceName="vaccine" />;

  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="Vaccines" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <VaccineTable vaccines={vaccines as Vaccine[]} />
      </div>
    </div>
  );
}

export default Vaccines;
