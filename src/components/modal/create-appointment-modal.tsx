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

function CreateAppointmentModal({
  children,
  onCreate,
}: {
  children: ReactElement;
  onCreate: Function;
}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    onCreate();
    handleClose();
  };

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
            Schedule a new admin appointment. Enter the required details and
            click Create to create the appointment.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mother_id" className="text-left">
              Mother ID
            </Label>
            <Input id="mother_id" className="col-span-3" />
          </div>

          {/* date picker  */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-left">
              Date
            </Label>
            <Input id="date" type="date" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time_from" className="text-left">
              From
            </Label>
            <Input id="time_from" type="time" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time_to" className="text-left">
              To
            </Label>
            <Input id="time_to" type="time" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-left">
              Message to mother
            </Label>
            <Textarea
              id="message"
              placeholder="Description..."
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-left leading-5">
              Description (Optional)
            </Label>
            <Textarea placeholder="Description..." className="col-span-3" />
          </div>
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
