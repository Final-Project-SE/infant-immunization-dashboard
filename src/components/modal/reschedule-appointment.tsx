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

function CreateAppointmentModal({
  mother,
  children,
}: {
  mother?: any;
  children: ReactElement;
}) {
  const { email: motherEmail } = mother;
  const { firstName: motherFirstName, lastName: motherLastName } =
    mother.profile;

  console.log(mother);

  const [open, setOpen] = useState(false);

  const [appointmentDate, setAppointmentDate] = useState("");
  const [isVaccinationAppointment, setIsVaccinationAppointment] =
    useState(false);
  const [vaccine, setVaccine] = useState("");

  const appointmentMessage = `Dear ${motherFirstName} ${motherLastName}, the appointment has been rescheduled to  `;

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
          <DialogTitle>Reschedule appointment</DialogTitle>
          <DialogDescription>
            Enter the required details and click reschedule button to create the
            appointment.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="motherEmail" className="text-left">
              Mother email
            </Label>
            <Input
              id="motherEmail"
              className="col-span-3"
              defaultValue={motherEmail}
              disabled={motherEmail ? true : false}
            />
          </div>
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

export default CreateAppointmentModal;

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
