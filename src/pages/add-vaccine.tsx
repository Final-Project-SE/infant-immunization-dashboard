import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";
import AddVaccineForm from "@/components/form/add-vaccine-form";
import PageHeader from "@/components/header/page-header";
import { useAddVaccine } from "@/api/useAddVaccine";
import { Vaccine } from "@/utils/types/component";

function AddVaccinePage() {
  return (
    <div className="mx-auto w-full rounded mt-1 pb-4 h-[83vh]">
      <PageHeader pageName="vaccines / add" />
      <div className="mx-auto w-[98%] light:bg-[#f9fafb] dark:bg[#111827] rounded mt-2 py-8 px-6 relative">
        <AddVaccineForm />
      </div>
    </div>
  );
}

export default AddVaccinePage;