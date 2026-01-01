import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RHFInput from "@/components/ui/RHFinput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { email: "", password: "" },
  });
  // const navigate = useNavigate();
  const emailRules = {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
  };
  const passwordRules = {
    required: "Password is required",
    // pattern: {
    //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,
    //   message: "Please enter a valid email address",
    // },
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[360px] shadow-lg bg-muted/40">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">
            Login to skillBoard
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <RHFInput
                label="Email"
                name="email"
                control={control}
                rules={emailRules}
                placeholder="me@exaple.com"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <RHFInput
                label="Password"
                name="password"
                control={control}
                rules={passwordRules}
                placeholder="Enter your password"
                type="text"
              />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
          <div className="mt-4">
            <p>
              Don&apos;t have an account?{" "}
              <Link className="text-blue-600 underline" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
          <div>
            <p className="text-center">network messages</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
