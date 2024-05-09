import PageHeader from "@/components/header/page-header";
import MotherTable from "@/components/table/mother-table";
import useMothers from "@/api/useMothers";
import { Mother } from "@/utils/types/component";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";
import { useGetMothers } from "@/hooks/api/mother";

function MothersPage() {
  const { isPending, error, mothers } = useGetMothers();

  if (isPending) return <Spinner />;

  if (error) return <Empty resourceName="mothers" />;

  console.log(mothers);

  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="Mothers" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <MotherTable mothers={mothers} />
      </div>
    </div>
  );
}

export default MothersPage;
