import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import RHFInput from "@/components/ui/RHFinput";
import RHFSelect from "@/components/ui/RHFselect";
import RHFDate from "@/components/ui/RHFdate";

const MyGoals = () => {
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
  const onSubmit = (data) => {
    //console.log("Goal Data:", data);
    let priorityID;
    switch (data.priority) {
      case "Primary":
        priorityID = 1;
        break;
      case "Secondary":
        priorityID = 2;
        break;
      case "Tertiary":
        priorityID = 3;
        break;
      default:
        priorityID = undefined;
    }
    const goalForm = { ...data, priority: priorityID.toString() };
    console.log(goalForm);
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
            options={[
              { value: "Primary", label: "Primary" },
              { value: "Secondary", label: "Secondary" },
              { value: "Tertiary", label: "Tertiary" },
            ]}
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
          <p>error&success</p>
        </div>
      </form>
    </div>
  );
};
export default MyGoals;
