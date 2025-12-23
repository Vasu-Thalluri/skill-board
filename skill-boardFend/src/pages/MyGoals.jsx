import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import RHFInput from "@/components/ui/RHFinput";
import RHFSelect from "@/components/ui/RHFselect";
import RHFDate from "@/components/ui/RHFdate";
import axios from "axios";
import { useState } from "react";

const MyGoals = () => {
  const [message, setMessage] = useState({ type: "", msg: "" });
  const priority = [
    { value: "primary", label: "primary" },
    { value: "secondary", label: "secondary" },
    { value: "tertiary", label: "tertiary" },
  ];
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      goaltitle: "",
      description: "",
      targetdate: "",
      priority: "",
    },
  });
  const goalTitleRules = {
    required: "Goal title is required",
    minLength: {
      value: 2,
      message: "Goal title must be at least two characters",
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Only alphabets are allowed",
    },
  };
  const descriptionRules = {
    required: "Goal description is required",
    minLength: {
      value: 4,
      message: "Description must be at least four characters",
    },
    pattern: {
      value: /^[A-Za-z ]+$/,
      message: "Only alphabets are allowed",
    },
  };
  const targetDateRules = {
    required: "Target date is required",
  };
  const priorityRules = {
    required: "Priority is required",
  };
  const API_URL = import.meta.env.VITE_API_URL;
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`${API_URL}/goal/create`, data);
      console.log(response);
      const success = response.data.success;
      console.log("id of submitted record", response.data.data.insertId);
      if (success) {
        setMessage({ type: "success", msg: response.data.message });
        console.log(message);
        setTimeout(() => {
          setMessage({ type: "", msg: "" });
          reset();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      const errMsg = error.response.data?.error;
      setMessage({ type: "error", msg: errMsg });
      setTimeout(() => {
        setMessage({ type: "", msg: "" });
      }, 2000);
    }
  };
  const handleCancel = () => {
    reset();
  };
  return (
    <div className="space-y-4">
      <div className="bg-gray-200 p-4">
        <h1 className="text-center text-lg text-secondary-foreground font-bold text-blue-700">
          My Goal
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-md border rounded-lg max-w-4xl mx-auto p-4"
      >
        <div className="flex flex-wrap gap-4">
          <RHFInput
            label="GoalTitle"
            name="goaltitle"
            control={control}
            rules={goalTitleRules}
            placeholder="your goal"
            type="text"
          />
          <RHFInput
            label="Description"
            name="description"
            control={control}
            rules={descriptionRules}
            placeholder="description about goal"
            type="text"
          />
          <RHFDate
            label="Target Date"
            name="targetdate"
            control={control}
            rules={targetDateRules}
            placeholder="Pick a date"
          />
          <RHFSelect
            label="Priority"
            name="priority"
            control={control}
            placeholder="Pick Priority"
            rules={priorityRules}
            options={priority}
          />
        </div>
        <div className="flex mb-6 gap-6 mt-8">
          <Button
            type="submit"
            className="px-6 py-2 border-2 border-blue-500 text-blue-600 bg-transparent hover:bg-blue-100"
          >
            Submit
          </Button>
          <Button
            type="button"
            onClick={handleCancel}
            className="px-6 py-2 border-2 border-blue-500 text-blue-600 bg-transparent hover:bg-blue-100"
          >
            Cancel
          </Button>
        </div>
        <div className="text-center">
          {message.msg && (
            <p style={{ color: message.type === "error" ? "red" : "green" }}>
              {message.msg}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
export default MyGoals;
