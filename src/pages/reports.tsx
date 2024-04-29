import { Report} from "@/utils/types/component";
import PageHeader from "@/components/header/page-header";
import ReportTable from "@/components/table/report-table";
import useReports from "@/hooks/api/useReports";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";

function Reports() {
  const { isFetching, error, data: reports } = useReports();

  if (isFetching) return <Spinner />;

  if (error) return <Empty resourceName="report" />;

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Reports" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <ReportTable reports={reports as Report[]} />
      </div>
    </div>
  );
}

export default Reports;
