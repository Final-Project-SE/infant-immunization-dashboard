
import PageHeader from "@/components/header/page-header";
import MotherTable from "@/components/table/mother-table";
import useMothers from "@/api/useMothers";
import { Mother } from "@/utils/types/component";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";


function MothersPage() {
  const { isFetching, error, data: mothers } = useMothers();

  if (isFetching) return <Spinner />;

  if (error) return <Empty resourceName="mothers" />;

  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="Mothers" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <MotherTable mothers={mothers as Mother[]} />
      </div>
    </div>
  );
}

export default MothersPage;