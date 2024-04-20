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
import { HealthStation } from "@/utils/types/component";

// Health station later to be fetched from the server with params
const healthStation: HealthStation = {
  id: 1,
  name: "Jimma Health Center",
  type: "healthcenter",
  region: "oromia",
  city: "Jimma",
  zone: "Jimma",
  subcity: "Jimma",
  kebele: "Kochi",
  houseNumber: "92cc1826",
  createdDate: new Date("2021-09-01"),
  description:
    "This is a health center located in Jimma, Oromia giving health services to the community",
};

function EditHealthStationForm({}: {}) {
  const navigate = useNavigate();

  // Find the health station by id

  const {
    // id,
    name,
    type,
    region,
    city,
    subcity,
    kebele,
    houseNumber,
    description,
  } = healthStation;

  const handleSubmit = () => {
    // Update the health station
  };

  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-foreground">
        Edit health station
      </h1>
      <p className="text-sm mb-6">
        Edit the desired fields below and click the update button to save
        changes
      </p>

      <div className="grid gap-4 py-7 px-8  shadow-sm rounded-md bg-white dark:bg-[#18212f] ">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="">
            Health station name
          </Label>
          <Input
            id="name"
            className="col-span-3"
            type="text"
            defaultValue={String(name)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="type" className="text-left">
            Health station type
          </Label>
          <Select defaultValue={String(type)}>
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Choose type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="healthcenter">Health Center</SelectItem>
              <SelectItem value="hospital">Hospital</SelectItem>
              <SelectItem value="clinic">Clinic</SelectItem>
            </SelectContent>
          </Select>
          {/* <Input id="description" className="col-span-3" /> */}
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="type" className="text-left">
            Health station region location
          </Label>
          <Select defaultValue={String(region)}>
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
          {/* <Input id="description" className="col-span-3" /> */}
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="city" className="text-left">
            City
          </Label>
          <Input
            id="city"
            type="text"
            className="col-span-3"
            defaultValue={String(city)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="city" className="text-left">
            Subcity
          </Label>
          <Input
            id="subcity"
            type="string"
            className="col-span-3"
            defaultValue={String(subcity)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="kebele" className="text-left">
            Kebele
          </Label>
          <Input
            id="kebele"
            type="text"
            className="col-span-3"
            defaultValue={String(kebele)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="housenumber" className="text-left">
            House number
          </Label>
          <Input
            id="housenumber"
            type="text"
            className="col-span-3"
            defaultValue={String(houseNumber)}
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-left">
            Description (Optional)
          </Label>
          <Textarea
            placeholder="Description..."
            className="col-span-3"
            defaultValue={String(description)}
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
          <Button type="submit" onClick={handleSubmit}>
            Edit health station
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditHealthStationForm;
