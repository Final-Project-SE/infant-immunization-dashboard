import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useToast } from "../ui/use-toast";

function LoginForm() {
  const { toast } = useToast();

  return (
    <div className="bg-white px-6 py-8 mt-10 w-[30%] rounded-md border border-[#f3f4f6]">
      <div className="flex text-[#374151] flex-col gap-3 mb-4">
        <Label htmlFor="email" className="">
          Email
        </Label>
        <Input id="email" className="col-span-3" type="text" />
      </div>
      <div className="flex  text-[#374151]  flex-col gap-3 mb-4">
        <Label htmlFor="email" className="">
          Password
        </Label>
        <Input id="password" className="col-span-3" type="password" />
      </div>

      <Button
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Invalid Email or Password",
          });
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default LoginForm;
