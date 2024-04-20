import AddHealthProfessionalForm from "@/components/form/add-health-professional";
import PageHeader from "@/components/header/page-header";

function AddHealthProfessionalPage() {
  return (
    <>
      <div className="mx-auto w-full rounded  mt-1 pb-4   h-[83vh]">
        <PageHeader pageName="products / add" />

        <div className="mx-auto w-[98%] light:bg-[#f9fafb]  dark:bg[#111827] rounded  mt-2 py-8 px-6  relative">
          <AddHealthProfessionalForm onAdd={() => {}} />
        </div>
      </div>
    </>
  );
}

export default AddHealthProfessionalPage;
