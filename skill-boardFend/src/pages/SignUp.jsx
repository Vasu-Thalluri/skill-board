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

export default function SignUp() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[360px] shadow-lg bg-muted/40">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">
            Create an account
          </CardTitle>
          <CardDescription>
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <RHFInput
                label="UserName"
                name="name"
                control={control}
                rules={""}
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div>
              <RHFInput
                label="Email"
                name="email"
                control={control}
                rules={""}
                placeholder="Enter your email"
                type="text"
              />
            </div>
            <div>
              <RHFInput
                label="Password"
                name="password"
                control={control}
                rules={""}
                placeholder="Enter your password"
                type="text"
              />
            </div>
            <div>
              <RHFInput
                label="Confirm Password"
                name="confirmPassword"
                control={control}
                rules={""}
                placeholder="Enter confirm password"
                type="text"
              />
            </div>
            <Button type="submit">Create Account</Button>
          </form>
          <div className="">
            <p>
              Already have an account?{" "}
              <Link className="text-blue-600 underline" to="/">
                Sign in
              </Link>
            </p>
          </div>
          <div className="text-center">
            <p>network messages</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
