"use client";
import React, { ReactElement, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

function ConfirmModal({
  actionName,
  title,
  description,
  onConfirm,
  children,
  disabled = false,
}: {
  actionName: string;
  title: string;
  description?: string;
  onConfirm: Function;
  children: ReactElement;
  disabled?: boolean | undefined;
}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-[400px]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-lg ">{title}</DialogTitle>
          <DialogDescription className="text-base">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={handleClose} disabled={disabled}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              onConfirm();
              handleClose();
            }}
            disabled={disabled}
          >
            {actionName}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmModal;
