import { ReactElement, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGetVaccines } from "@/hooks/api/vaccine";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetHealthStations } from "@/hooks/api/health-station";

function AddChildVaccinationModal({ children }: { children: ReactElement }) {
  const { childId } = useParams();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const { register, formState, handleSubmit, reset, getValues } = useForm();

  const { vaccines } = useGetVaccines();
  const { hs: healthStations } = useGetHealthStations();

  const [selectedVaccine, setSelectedVaccine] = useState("");
  const [selectedHs, setSelectedHs] = useState("");
  const [isGiven, setIsGiven] = useState(true);

  const onSubmit = () => {
    handleClose();
  };

  console.log(healthStations);
  console.log(vaccines);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTrigger asChild>
          {children}
          {/* <Button variant="outline">Add New admin</Button> */}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[650px] ">
          <DialogHeader>
            <DialogTitle>Add child vaccination</DialogTitle>
            <DialogDescription>
              Register a child's vaccination. Enter the required details and
              click add to save.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="vaccine" className="text-left">
                Vaccine
              </Label>
              <Select onValueChange={(value) => setSelectedVaccine(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Choose Vaccine" />
                </SelectTrigger>
                <SelectContent>
                  {vaccines?.map((vaccine) => (
                    <SelectItem value={String(vaccine.id)}>
                      {vaccine.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="vaccine" className="text-left">
                  Health Station
                </Label>
                <Select onValueChange={(value) => setSelectedHs(value)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Choose Health Station" />
                  </SelectTrigger>
                  <SelectContent>
                    {healthStations?.map((hs: any) => (
                      <SelectItem value={String(hs.id)}>{hs.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* hidden field  */}
              <Input type="hidden" name="childId" value={childId} />
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="isGiven" className="text-left">
              Is given?
            </Label>
            <Input
              type="checkbox"
              id="isGiven"
              className="w-5 h-5"
              onChange={(e) => setIsGiven(e.target.checked)}
            />
          </div>
          <DialogFooter>
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit">Add vaccination</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default AddChildVaccinationModal;
