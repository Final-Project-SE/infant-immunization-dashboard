import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useCreateHealthStation } from "@/hooks/api/health-station";

import { useForm } from "react-hook-form";
import CreateHealthStation from "@/api/health-station/create-healthstation";
function AddHealthStationForm() {
  const navigate = useNavigate();

  const { register, formState, getValues, handleSubmit, reset } = useForm();

  const { isPending, createHs } = useCreateHealthStation();

  const { errors } = formState;

  console.log(errors);

  // const { isPending, createHs, error } = useCreateHealthStation();
  const onSubmit = (data: any) => {
    console.log(data);

    // await CreateHealthStation(data);

    createHs(
      { ...data, imageUrl: "image" },
      {
        onSuccess: () => {
          reset();
          navigate("/health-stations");
        },
      }
    );
  };

  console.log(errors?.email?.message);

  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-foreground">
        Add new health station
      </h1>
      <p className="text-sm mb-6">
        Fill in the form below to add a new health station to the platform.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-7 px-8  shadow-sm rounded-md bg-white dark:bg-[#18212f] ">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="">
              Health station name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              disabled={isPending}
              {...register("name", { required: "This field is required" })}
            />
          </div>
          {errors?.name?.message && (
            <p className="text-red-500 text-xs text-right">
              This field is required
            </p>
          )}

          <div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="">
                Health station email
              </Label>
              <Input
                id="name"
                className="col-span-3"
                disabled={isPending}
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
            </div>
            {errors?.email?.message && (
              <p className="text-red-500 text-xs text-right">
                {errors?.email?.message as string}
              </p>
            )}
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-left">
              Health station type
            </Label>
            <select
              className="col-span-3"
              {...register("type")}
              disabled={isPending}
            >
              <option value="GENERAL_HOSPITAL">Hosp</option>
              <option value="private">Private</option>
            </select>
          </div>

          {/* <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="type" className="text-left">
            Health station region location
          </Label>
          <Select>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Choose region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="addis">Addis Ababa</SelectItem>
              <SelectItem value="afar">Afar</SelectItem>
              <SelectItem value="amhara">Amhara</SelectItem>

              <SelectItem value="benishangul">Benishangul-Gumuz</SelectItem>
              <SelectItem value="diredawa">Dire Dawa</SelectItem>
              <SelectItem value="gambella">Gambella</SelectItem>
              <SelectItem value="harari">Harari</SelectItem>
              <SelectItem value="oromia">Oromia</SelectItem>
              <SelectItem value="snnpr">Southern Nations (SNNPR)</SelectItem>
              <SelectItem value="tigrai">Tigrai</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

          <div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="city" className="text-left">
                City
              </Label>
              <Input
                id="city"
                type="string"
                className="col-span-3"
                disabled={isPending}
                {...register("city", { required: "This field is required" })}
              />
            </div>
            {errors?.city?.message && (
              <p className="text-red-500 text-xs text-right">
                This field is required
              </p>
            )}
          </div>
          <div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="city" className="text-left">
                Subcity
              </Label>
              <Input
                id="subcity"
                type="string"
                className="col-span-3"
                disabled={isPending}
                {...register("subcity", { required: "This field is required" })}
              />
            </div>
            {errors?.subcity?.message && (
              <p className="text-red-500 text-xs text-right">
                This field is required
              </p>
            )}
          </div>
          <div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="kebele" className="text-left">
                Kebele
              </Label>
              <Input
                id="kebele"
                type="string"
                className="col-span-3"
                disabled={isPending}
                {...register("kebele", { required: "This field is required" })}
              />
            </div>
            {errors?.kebele?.message && (
              <p className="text-red-500 text-xs text-right">
                This field is required
              </p>
            )}
          </div>
          <div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="houseNumber" className="text-left">
                House number
              </Label>
              <Input
                id="houseNumber"
                type="string"
                className="col-span-3"
                disabled={isPending}
                {...register("houseNumber", {
                  required: "This field is required",
                })}
              />
            </div>
            {errors?.houseNumber?.message && (
              <p className="text-red-500 text-xs text-right">
                This field is required
              </p>
            )}
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-left">
              Description (Optional)
            </Label>
            <Textarea
              placeholder="Description..."
              disabled={isPending}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="images" className="text-left">
              Health station images
            </Label>

            <Input
              id="images"
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              className="col-span-3"
              multiple
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
            <Button type="submit">Add health station</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddHealthStationForm;
