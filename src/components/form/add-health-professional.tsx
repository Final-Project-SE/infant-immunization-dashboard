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

function AddHealthProfessionalForm({ onAdd }: { onAdd: Function }) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    onAdd();
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

      <div className="grid gap-4 py-7 px-8  shadow-sm rounded-md bg-white dark:bg-[#18212f] ">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="fname" className="">
            First Name
          </Label>
          <Input id="fname" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="lname" className="">
            Last Name
          </Label>
          <Input id="lname" className="col-span-3" />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="type" className="text-left">
            Gender
          </Label>
          <Select>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
          {/* <Input id="description" className="col-span-3" /> */}
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="title" className="">
            Title (Educational Status)
          </Label>
          <Input id="title" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="position" className="">
            Job Position
          </Label>
          <Input id="position" className="col-span-3" />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="">
            Email
          </Label>
          <Input id="email" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="">
            Password
          </Label>
          <Input id="password" type="password" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="">
            Confirm password
          </Label>
          <Input id="confirmPassword" type="password" className="col-span-3" />
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
          <Button type="submit" onClick={handleSubmit}>
            Add health professional
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddHealthProfessionalForm;
