import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useForm } from "react-hook-form";
import { login } from "@/api/auth/login";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/features/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import toast from "react-hot-toast";

function LoginForm() {
  const push = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({});

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      const res = await login({
        email: data.email,
        password: data.password,
      });
      dispatch(
        setCredentials({
          user: res.data.data,
          accessToken: res.data.token,
        })
      );
      // toast.success("Login successful");
      push("/dashboard");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      // toast.error("Invalid email or password");
      setIsLoading(false);
    }
  });

  return (
    <form
      className="bg-white px-6 py-8 mt-10 w-[30%] rounded-md border border-[#f3f4f6]"
      onSubmit={onSubmit}
    >
      <div className="flex text-[#374151] flex-col gap-3 mb-4">
        <Label htmlFor="email" className="">
          Email
        </Label>
        <Input
          id="email"
          className="col-span-3"
          type="text"
          {...register("email")}
        />
      </div>
      <div className="flex  text-[#374151]  flex-col gap-3 mb-4">
        <Label htmlFor="email" className="">
          Password
        </Label>
        <Input
          id="password"
          className="col-span-3"
          type="password"
          {...register("password")}
        />
      </div>

      <Button type="submit" disabled={isLoading}>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
