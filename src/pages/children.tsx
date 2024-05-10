import PageHeader from "@/components/header/page-header";
import ChildrenTable from "@/components/table/children-table";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";
import { useGetChildren } from "@/hooks/api/children";
import { Child } from "@/utils/types/component";

function ChildrenPage() {
  const { isPending, error, children } = useGetChildren();

  if (isPending) return <Spinner />;

  if (error) return <Empty resourceName="children" />;
  console.log(children);

  const formattedChildren: Child[] = children.map((child: any) => {
    return {
      id: child.id,
      firstName: child.firstName,
      lastName: child.lastName,
      middleName: child.middleName,
      isVaccineCompleted:
        child.isVaccineCompleted == true ? "completed" : "ongoing",
      motherFullName: `${child?.mother?.user?.profile?.firstName} ${child?.mother?.user?.profile?.middleName}`,
    };
  });

  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="Children" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <ChildrenTable children={formattedChildren} />
      </div>
    </div>
  );
}

export default ChildrenPage;
