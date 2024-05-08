import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";
import AddHealthStationForm from "@/components/form/add-health-station-form";
import PageHeader from "@/components/header/page-header";
import { useAddHealthStation } from "@/api/useAddHealthStation";
import { HealthStation } from "@/utils/types/component";

function AddHealthStationPage() {
  return (
    <div className="mx-auto w-full rounded mt-1 pb-4 h-[83vh]">
      <PageHeader pageName="products / add" />
      <div className="mx-auto w-[98%] light:bg-[#f9fafb] dark:bg[#111827] rounded mt-2 py-8 px-6 relative">
        <AddHealthStationForm />
      </div>
    </div>
  );
}

export default AddHealthStationPage;
