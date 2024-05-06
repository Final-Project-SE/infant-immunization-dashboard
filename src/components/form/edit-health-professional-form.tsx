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

const healthProfessional = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  gender: "male",
  imageUrl: "",
  email: "johndoe@gmail.com",
  phone: "0912345678",
  role: "healthprofessional",
  title: "Medical Doctor",
  position: "Medical Doctor",
};

function EditHealthProfessionalForm() {
  const {
    // id,
    firstName,
    lastName,
    gender,
    // imageUrl,
    // email,
    // phone,
    // role,
    title,
    position,
  } = healthProfessional;

  const navigate = useNavigate();
  const handleSubmit = () => {};

  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-foreground">
        Update health professional
      </h1>
      <p className="text-sm mb-6">
        Edit the desired fields below and click the update button to save
        changes.
      </p>

      <div className="grid gap-4 py-7 px-8  shadow-sm rounded-md bg-white dark:bg-[#18212f] ">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="fname" className="">
            First Name
          </Label>
          <Input id="fname" className="col-span-3" defaultValue={firstName} />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="lname" className="">
            Last Name
          </Label>
          <Input id="lname" className="col-span-3" defaultValue={lastName} />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="type" className="text-left">
            Gender
          </Label>
          <Select defaultValue={gender}>
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
          <Input id="title" className="col-span-3" defaultValue={title} />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="position" className="">
            Job Position
          </Label>
          <Input id="position" className="col-span-3" defaultValue={position} />
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
            Update health professional
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditHealthProfessionalForm;
