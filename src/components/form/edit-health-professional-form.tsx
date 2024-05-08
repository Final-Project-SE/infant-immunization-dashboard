import { useNavigate, useParams } from "react-router-dom";
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
import { Spinner } from "../ui";
import ErrorMessage from "../error-display/error-message";
import { useGetSingleHP } from "@/hooks/api/health-professional";
import { useForm } from "react-hook-form";

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
  const navigate = useNavigate();
  const { id } = useParams();

  const { register, formState, getValues, handleSubmit, reset } = useForm();

  const { errors } = formState;

  // Find the health professional by id
  const { isPending: isFetching, hp } = useGetSingleHP();
  // const { isPending, updateHs } = useUpdateHealthStation();

  // const [updatedType, setType] = useState("GENERAL_HOSPITAL");

  if (isFetching) return <Spinner />;
  if (!hp) {
    return <ErrorMessage message="Health professional not found" />;
  }

  console.log(hp);

  // return;
  // const {
  //   // id,
  //   firstName,
  //   lastName,
  //   gender,
  //   // imageUrl,
  //   // email,
  //   // phone,
  //   // role,
  //   title,
  //   position,
  // } = healthProfessional;

  const { profile, proProfile } = hp;
  const { firstName, lastName, middleName, sex, imageUrl } = profile;
  const { title, position } = proProfile;
  // const { {firstName,
  //   lastName,
  //   middleName,
  //   sex,
  // imageUrl}:profile,{title,position}: proProfile } = hp;

  const onSubmit = () => {};

  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-foreground">
        Edit health professional
      </h1>
      <p className="text-sm mb-6">
        Edit the desired fields below and click the update button to save
        changes.
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
              defaultValue={firstName}
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
              defaultValue={middleName}
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
              defaultValue={lastName}
              {...register("lastName", { required: "This field is required" })}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-left">
              Gender
            </Label>
            <Select defaultValue={sex}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MALE">Male</SelectItem>
                <SelectItem value="FEMALE">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="">
              Title (Educational Status)
            </Label>
            <Input
              id="title"
              className="col-span-3"
              defaultValue={title}
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
              defaultValue={position}
              {...register("position", { required: "This field is required" })}
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
            <Button type="submit">Update health professional</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditHealthProfessionalForm;
