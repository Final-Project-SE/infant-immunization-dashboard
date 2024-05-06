import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";
import EditHealthStationForm from "@/components/form/edit-health-station-form";
import PageHeader from "@/components/header/page-header";
import { useEditHealthStation } from "@/api/useEditHealthStation";
import { HealthStation } from "@/utils/types/component";

function EditHealthStationPage() {
  const mutation = useEditHealthStation();

  const handleEdit = (healthStation: HealthStation) => {
    mutation.mutate(healthStation);
  };

  if (mutation.status === "pending") return <Spinner />;

  if (mutation.status === "error")
    return <Empty resourceName="health-station" />;

  return (
    <div className="mx-auto w-full rounded mt-1 pb-4 h-[83vh]">
      <PageHeader pageName="HealthStation / edit" />
      <div className="mx-auto w-[98%] light:bg-[#f9fafb] dark:bg[#111827] rounded mt-2 py-8 px-6 relative">
        <EditHealthStationForm onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default EditHealthStationPage;
