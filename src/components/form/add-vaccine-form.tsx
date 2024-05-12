import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";


function AddVaccineForm() {
  const navigate = useNavigate();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const onSubmit = async () => {
    // Call your API to create a vaccine here
    // After successful creation, reset the form and navigate to the vaccines page
    reset();
    navigate("/vaccines");
  };

  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-foreground">
        Add new vaccine
      </h1>
      <p className="text-sm mb-6">
        Fill in the form below to add a new vaccine to the platform.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-7 px-8  shadow-sm rounded-md bg-white dark:bg-[#18212f] ">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="">
              Vaccine name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              {...register("name", { required: "This field is required" })}
            />
          </div>
          {errors?.name?.message && (
            <p className="text-red-500 text-xs text-right">
              This field is required
            </p>
          )}

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="">
              Category
            </Label>
            <Input
              id="category"
              className="col-span-3"
              {...register("category", { required: "This field is required" })}
            />
          </div>
          {errors?.category?.message && (
            <p className="text-red-500 text-xs text-right">
              This field is required
            </p>
          )}

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="">
              Description
            </Label>
            <Input
              id="description"
              className="col-span-3"
              {...register("description")}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dose" className="">
              Dose
            </Label>
            <Input
              id="dose"
              className="col-span-3"
              {...register("dose", { required: "This field is required" })}
            />
          </div>
          {errors?.dose?.message && (
            <p className="text-red-500 text-xs text-right">
              This field is required
            </p>
          )}

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="duration" className="">
              Duration
            </Label>
            <Input
              id="duration"
              className="col-span-3"
              {...register("duration", { required: "This field is required" })}
            />
          </div>
          {errors?.duration?.message && (
            <p className="text-red-500 text-xs text-right">
              This field is required
            </p>
          )}

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ageRange" className="">
              Age Range
            </Label>
            <Input
              id="ageRange"
              className="col-span-3"
              {...register("ageRange", { required: "This field is required" })}
            />
          </div>
          {errors?.ageRange?.message && (
            <p className="text-red-500 text-xs text-right">
              This field is required
            </p>
          )}

          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel and go back
            </Button>
            <Button type="submit">Add vaccine</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddVaccineForm;