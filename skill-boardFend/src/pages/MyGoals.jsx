"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import RHFInput from "@/components/ui/RHFinput";
import RHFSelect from "@/components/ui/RHFselect";
import RHFDate from "@/components/ui/RHFdate";

const MyGoals = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Goal Data:", data);
  };
  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-gray-200 p-4">
        <h1 className="text-center text-3xl font-bold text-blue-700">
          My Goal
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-20 bg-white shadow-md rounded-lg max-w-3xl mx-auto p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <div>
            <div> */}
          {/* <label className="w-20 text-blue-600 font-medium">
                GoalTitle
              </label> */}
          <RHFInput
            label="GoalTitle"
            name="goaltitle"
            register={register}
            placeholder="your goal"
            type="text"
          />
          {/* </div>
          </div> */}

          {/* <div>
            <div> */}
          {/* <label className="w-20 text-blue-600 font-medium">
                Description
              </label> */}
          {/* <div> */}
          <RHFInput
            label="Description"
            name="description"
            register={register}
            placeholder="description about goal"
            type="text"
          />
          {/* </div>
            </div> */}
          {/* </div> */}

          {/* <div>
            <div> */}
          {/* <label className="w-20 text-blue-600 font-medium">
                TargetDate
              </label> */}
          <RHFDate
            label="Target Date"
            name="targetdate"
            register={register}
            setValue={setValue}
            placeholder="Pick a date"
          />
          {/* </div>
          </div> */}

          <RHFSelect
            label="Priority"
            name="priority"
            placeholder="Pick Priority"
            register={register}
            setValue={setValue}
            options={[
              { value: "primary", label: "Primary" },
              { value: "secondary", label: "Secondary" },
              { value: "tertiary", label: "Tertiary" },
            ]}
          />
        </div>
        <div className="flex gap-6 mt-8">
          <Button
            type="submit"
            className="px-6 py-2 border-2 border-blue-500 text-blue-600 bg-transparent hover:bg-blue-100"
          >
            Submit
          </Button>
          <Button
            type="submit"
            className="px-6 py-2 border-2 border-blue-500 text-blue-600 bg-transparent hover:bg-blue-100"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
export default MyGoals;
