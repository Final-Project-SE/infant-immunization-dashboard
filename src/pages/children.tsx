import PageHeader from "@/components/header/page-header";
import ChildTable from "@/components/table/children-table";
import useChildren from "@/api/useChildren";
import { Child } from "@/utils/types/component";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";

function Children() {
  const { isFetching, error, data: children } = useChildren();

  if (isFetching) return <Spinner />;

  if (error) return <Empty resourceName="children" />;

  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="Children" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <ChildTable children={children as Child[]} />
      </div>
    </div>
  );
}

export default Children;