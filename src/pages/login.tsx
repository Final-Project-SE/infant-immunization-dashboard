
import Logo from "@/components/logo/logo";
import LoginForm from "@/components/form/login-form";

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 bg-[#f9fafb">
      <Logo />
      <h4 className="text-2xl mt-2 font-semibold text-center text-[#374151]">
        Login to your account
      </h4>
      <LoginForm />
    </div>
  );
}

export default Login;
