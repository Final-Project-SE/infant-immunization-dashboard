import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";



function AddTreatmentInformationForm() {
  const navigate = useNavigate();
  const { register, formState, handleSubmit, reset } = useForm();

  const { errors } = formState;

  console.log(errors);

  
  
  
  const onSubmit = (data: any) => {
    // Add your logic to create treatment information
    // After successful creation, reset the form and navigate to the desired route
    reset();
    navigate("/treatment-info");
  };

  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-foreground">
        Add new treatment information
      </h1>
      <p className="text-sm mb-6">
        Fill in the form below to add new treatment information to the platform.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-7 px-8  shadow-sm rounded-md bg-white dark:bg-[#18212f] ">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="">
              Treatment name
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
            <Label htmlFor="description" className="text-left">
              Description (Optional)
            </Label>
            <Textarea
              placeholder="Description..."
              className="col-span-3"
              {...register("description")}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel and go back
            </Button>
            <Button type="submit">Add treatment information</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTreatmentInformationForm;