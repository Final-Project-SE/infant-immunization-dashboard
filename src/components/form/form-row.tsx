import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InputError from "../error-display/form-error";

type FormRowProps = {
  label?: string;
  error?: string | undefined;
  children: React.ReactElement;
};

// function FormRow({ label, error, children }: FormRowProps) {
//   <div className="grid grid-cols-4 items-center gap-4">
//     alabel &&{" "}
//     <Label htmlFor={children.props.id} className="">
//       {label}
//     </Label>
//     {children}
//     <Input id={} className="col-span-3" />
//     {error && <InputError error={error} />}
//   </div>;
// }

// export default FormRow;
