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
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CreateMotherAppointmentModal({
  children,
}: {
  children: ReactElement;
}) {
  const [open, setOpen] = useState(false);

  const [appointmentDate, setAppointmentDate] = useState("");
  const [isVaccinationAppointment, setIsVaccinationAppointment] =
    useState(false);
  const [vaccine, setVaccine] = useState("");

  const appointmentMessage = `This is a reminder for your upcoming vaccination appointment on ${
    appointmentDate || "[date]"
  }. Please ensure you're able to make it.`;

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleClose();
  };

  // isVaccinationAppointment

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
        {/* <Button variant="outline">Add New admin</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] ">
        <DialogHeader>
          <DialogTitle>Create appointment</DialogTitle>
          <DialogDescription>
            Enter the required details and click Create button to create the
            appointment.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* date picker  */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-left">
              Appointment date
            </Label>
            <Input
              id="date"
              type="date"
              className="col-span-3"
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-left leading-5">
              Message to mother
            </Label>
            <Textarea
              name="message"
              value={appointmentMessage}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reminder" className="text-left">
              Vaccination
            </Label>
            <Input
              type="checkbox"
              id="isVaccinationAppointment"
              className="w-5 h-5"
              onChange={(e) => setIsVaccinationAppointment(e.target.checked)}
            />
          </div>

          {isVaccinationAppointment && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-left">
                Vaccine
              </Label>
              <Select
                onValueChange={(value) => {
                  setVaccine(value);
                  console.log(value);
                }}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Choose Vaccine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="VACCINE-1">Vaccine 1</SelectItem>
                  <SelectItem value="VACCINE-2">Vaccine 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        <DialogFooter>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              Create new appointment
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateMotherAppointmentModal;

// {/* Date picker */}
// <div className="grid grid-cols-4 items-center gap-4">
// <Label htmlFor="date" className="text-left">
//   Date
// </Label>
// <Input id="date" type="date" className="col-span-3" />
// </div>

// {/* Time picker */}
// <div className="grid grid-cols-4 items-center gap-4">
// <Label htmlFor="time" className="text-left">
//   Time
// </Label>
// <Input id="time" type="time" className="col-span-3" />
// </div>
