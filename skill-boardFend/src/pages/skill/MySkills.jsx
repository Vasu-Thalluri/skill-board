import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import RHFInput from "@/components/ui/RHFinput";
import { useState } from "react";
import UpdateContentModal from "./UpdateContentModal";

const MySkills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const skill = { completedContent: 1 };
  console.log(selectedSkill);
  // const selectedSkill = "React";
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      skillName: "",
      category: "",
      totalContent: "",
    },
  });
  const skillNameRules = {
    required: "skill name is required",
    pattern: {
      value: /^[A-Za-z ]+$/,
      message: "Only alphabets are allowed",
    },
  };
  const categoryRules = {
    required: "category is required",
    minLength: {
      value: 4,
      message: "Description must be at least four characters",
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Only alphabets with no space allowed",
    },
  };
  const totalContentRules = {
    required: "total content is required",
    pattern: {
      value: /^[\d+]/,
      message: "Only numbers allowed",
    },
  };

  const onSubmit = (data) => {
    //console.log("Goal Data:", data);
    console.log(data);
  };
  const handleCancel = () => {
    reset();
  };
  const updateCompletedContent = (cc) => {
    console.log(cc);
    console.log("Hi modal");
    setSelectedSkill((prev) => prev + cc);
  };
  return (
    <div className="space-y-4">
      <div className="bg-gray-200 p-4">
        <h1 className="text-center text-lg text-secondary-foreground font-bold text-blue-700">
          My Skill
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-md border rounded-lg max-w-4xl mx-auto p-4"
      >
        <div className="flex flex-wrap gap-4">
          <RHFInput
            label="Skill Name"
            name="skillName"
            control={control}
            rules={skillNameRules}
            placeholder="your skill"
            type="text"
          />
          <RHFInput
            label="Category"
            name="category"
            control={control}
            rules={categoryRules}
            placeholder="category of skill"
            type="text"
          />
          <RHFInput
            label="Total Content"
            name="totalContent"
            control={control}
            rules={totalContentRules}
            placeholder="content of skill"
            type="text"
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

      <table className="w-full mt-6 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Skill</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Total Content</th>
            <th className="border p-2">Completed Content</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {/* {skills.map((skill, index) => ( */}
          <tr>
            <td className="border p-2">skill.skillName</td>
            <td className="border p-2">skill.category</td>
            <td className="border p-2">skill.totalContent</td>
            <td className="border p-2">skill.completedContent</td>
            <td className="border p-2">
              <button
                className="px-3 py-1 bg-blue-600 text-white rounded"
                onClick={() => setSelectedSkill(skill)}
              >
                Update Content
              </button>
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
      {selectedSkill && (
        <UpdateContentModal
          open={!!selectedSkill}
          skill={selectedSkill}
          onUpdate={updateCompletedContent}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </div>
  );
};
export default MySkills;
