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
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const navigate = useNavigate();
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
  const [message, setMessage] = useState({ type: "", msg: "" });
  const API_URL = import.meta.env.VITE_API_URL;
  const onSubmit = async (data) => {
    //console.log(data);
    try {
      const result = await axios.post(`${API_URL}/user/login`, data);
      //console.log(result);
      const success = result.data.success;
      if (success) {
        const successMessage = result.data.message;
        setMessage({ type: "success", msg: successMessage });
        //console.log(result.data.user[0]);
        localStorage.setItem("token", JSON.stringify(result.data.user[0]));
        //const token = localStorage.getItem("token");
        //console.log(token);
        setTimeout(() => {
          setMessage({ type: "", msg: "" });
          navigate("/home");
          //localStorage.clear();
        }, 2000);
      }
    } catch (error) {
      //console.log(error);
      const errMsg = error.response.data?.message;
      setMessage({ type: "error", msg: errMsg });
      setTimeout(() => {
        setMessage({ type: "", msg: "" });
      }, 2000);
    }
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
          <div className="text-center">
            {message.msg && (
              <p style={{ color: message.type === "error" ? "red" : "green" }}>
                {message.msg}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
