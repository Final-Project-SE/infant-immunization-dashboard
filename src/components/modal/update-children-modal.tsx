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

function UpdateChildModal({
  child,
  onUpdate,
  children,
}: {
  child: Child;
  onUpdate: Function;
  children: ReactElement;
}) {
  const { firstName, lastName, middleName, birthDate } = child;

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    onUpdate();
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[650px] ">
        <DialogHeader>
          <DialogTitle>Update child</DialogTitle>
          <DialogDescription>
            Make changes to child's information here. Click update when you're
            done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstName" className="text-left">
              First name
            </Label>
            <Input
              id="firstName"
              defaultValue={firstName}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="text-left">
              Last name
            </Label>
            <Input
              id="lastName"
              defaultValue={lastName}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="middleName" className="text-left">
              Middle name
            </Label>
            <Input
              id="middleName"
              className="col-span-3"
              defaultValue={middleName}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="birthDate" className="text-left">
              Birth date
            </Label>
            <Input
              id="birthDate"
              type="date"
              className="col-span-3"
              defaultValue={birthDate}
            />
          </div>
        </div>
        <DialogFooter>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              Update child
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateChildModal;