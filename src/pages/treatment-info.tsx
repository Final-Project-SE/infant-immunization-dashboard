import Empty from "@/components/error-display/empty";
import ErrorMessage from "@/components/error-display/error-message";
import PageHeader from "@/components/header/page-header";
import TreatmentInformationTable from "@/components/table/treatment-information-table";
import { Spinner } from "@/components/ui";
import { useGetTreatmentInformations } from "@/hooks/api/treatment-information";
import { TreatmentInformation as TreatmentInfoType } from "@/utils/types/component";

function TreatmentInfo() {
  const { isPending, error, ti } = useGetTreatmentInformations();

  console.log(ti);

  if (isPending) return <Spinner />;

  if (error) return <ErrorMessage error={error} />;

  if (!ti) return <Empty resourceName="treatment info" />;

  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="treatment-info" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <TreatmentInformationTable treatmentInformations={ti as TreatmentInfoType[]} />
      </div>
    </div>
  );
}

export default TreatmentInfo;