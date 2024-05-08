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
import { useRegisterHP } from "@/hooks/api/health-professional";
import { useState } from "react";
import { useForm } from "react-hook-form";

function AddHealthProfessionalForm() {
  const navigate = useNavigate();
  const { register, formState, handleSubmit, reset, getValues } = useForm();
  const { errors } = formState;

  const { isPending, registerHP } = useRegisterHP();

  const [gender, setGender] = useState("");
  console.log(gender);

  const onSubmit = (data: any) => {
    console.log(data);
    console.log(gender);
    registerHP(
      {
        ...data,
        sex: gender,
        image: "image",
        // health station id later tobe fetched from the user
        healthStationId: 3,
        role: "HEALTH_PROFETIONAL",
      },
      {
        onSuccess: () => {
          reset();
          navigate("/health-professionals");
        },
      }
    );
  };

  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-foreground">
        Add new health professional
      </h1>
      <p className="text-sm mb-6">
        Fill in the form below to add a new health professional to your health
        station.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-7 px-8  shadow-sm rounded-md bg-white dark:bg-[#18212f] ">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstName" className="">
              First Name
            </Label>
            <Input
              id="firstName"
              className="col-span-3"
              disabled={isPending}
              {...register("firstName", { required: "This field is required" })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="middleName" className="">
              Middle Name
            </Label>
            <Input
              id="middleName"
              className="col-span-3"
              disabled={isPending}
              {...register("middleName", {
                required: "This field is required",
              })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="">
              Last Name
            </Label>
            <Input
              id="lastName"
              className="col-span-3"
              disabled={isPending}
              {...register("lastName", { required: "This field is required" })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-left">
              Gender
            </Label>
            <Select
              onValueChange={(value) => {
                setGender(value);
                console.log(value);
              }}
              disabled={isPending}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Choose Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MALE">Male</SelectItem>
                <SelectItem value="FEMALE">Female</SelectItem>
              </SelectContent>
            </Select>
            {/* <Input id="description" className="col-span-3" /> */}
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="">
              Title (Educational Status)
            </Label>
            <Input
              id="title"
              className="col-span-3"
              disabled={isPending}
              {...register("title", { required: "This field is required" })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="position" className="">
              Job Position
            </Label>
            <Input
              id="position"
              className="col-span-3"
              disabled={isPending}
              {...register("position", { required: "This field is required" })}
            />
          </div>

          <div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="">
                Email
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
          <div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="">
                Phone
              </Label>
              <Input
                id="name"
                className="col-span-3"
                disabled={isPending}
                {...register("phone", {
                  required: "This field is required",
                })}
              />
            </div>
            {errors?.phone?.message && (
              <p className="text-red-500 text-xs text-right">
                {errors?.email?.message as string}
              </p>
            )}
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              className="col-span-3"
              disabled={isPending}
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="">
              Confirm password
            </Label>
            <Input
              id="passwordConfirm"
              type="password"
              className="col-span-3"
              disabled={isPending}
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match",
              })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-left">
              Image
            </Label>

            <Input
              id="image"
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              className="col-span-3"
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
            <Button type="submit">Add health professional</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddHealthProfessionalForm;
