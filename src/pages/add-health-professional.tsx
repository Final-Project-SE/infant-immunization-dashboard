import { HealthProfessionalProp } from "@/utils/types/component";
import PageHeader from "@/components/header/page-header";
import AddHealthProfessionalForm from "@/components/form/add-health-professional";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";
import { useAddHealthProfessional } from "@/api/useAddHealthProfessional";

function AddHealthProfessionalPage() {
  // const mutation = useAddHealthProfessional();

  // const handleAdd = (healthProfessional: HealthProfessionalProp) => {
  //   mutation.mutate(healthProfessional);
  // };

  // if (mutation.status === "pending") return <Spinner />;

  // if (mutation.status === "error")
  //   return <Empty resourceName="health-professional" />;

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Add Health Professional" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <AddHealthProfessionalForm />
      </div>
    </div>
  );
}

export default AddHealthProfessionalPage;
