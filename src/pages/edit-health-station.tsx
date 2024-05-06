import EditHealthStationForm from "@/components/form/edit-health-station-form";
import PageHeader from "@/components/header/page-header";

function EditHealthStationPage() {
  return (
    <>
      <div className="mx-auto w-full rounded  mt-1 pb-4   h-[83vh]">
        <PageHeader pageName="products / edit" />

        <div className="mx-auto w-[98%] light:bg-[#f9fafb]  dark:bg[#111827] rounded  mt-2 py-8 px-6  relative">
          <EditHealthStationForm />
        </div>
      </div>
    </>
  );
}

export default EditHealthStationPage;
