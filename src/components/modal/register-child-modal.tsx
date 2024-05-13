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

function RegisterChildModal({
  motherEmail,
  children,
}: {
  children: ReactElement;
  motherEmail?: string;
}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
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
          <DialogTitle>Register new child</DialogTitle>
          <DialogDescription>
            Enter the required fields and click Register to register the child.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="motherEmail" className="text-left">
              Mother Email
            </Label>
            <Input
              id="motherEmail"
              className="col-span-3"
              defaultValue={motherEmail}
              disabled={motherEmail ? true : false}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="first_name" className="text-left">
              First name
            </Label>
            <Input id="first_name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="first_name" className="text-left">
              Middle name
            </Label>
            <Input id="first_name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="last_name" className="text-left">
              Last name
            </Label>
            <Input id="last_name" className="col-span-3" />
          </div>

          {/* date picker  */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="birthDate" className="text-left">
              Birth date
            </Label>
            <Input id="birthDate" type="date" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bloodType" className="text-left">
              Blood Type
            </Label>
            <Input id="bloodType" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              Register new child
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default RegisterChildModal;
