import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import RHFInput from "@/components/ui/RHFinput";
import RHFSelect from "@/components/ui/RHFselect";
import { useState, useEffect, useCallback, useContext } from "react";
import UpdateContentModal from "./UpdateContentModal";
import axios from "axios";
import { SkillsContext } from "@/contexts/SkillsContext";

const MySkills = () => {
  const [message, setMessage] = useState({ type: "", msg: "" });

  const { skillData, fetchAllSkills } = useContext(SkillsContext);

  const [selectedSkill, setSelectedSkill] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const proficiency = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
  ];

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      skillName: "",
      category: "",
      proficiency: "",
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
  const proficiencyRules = {
    required: "Priority is required",
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/skill/create`, data);
      const success = response.data.success;
      if (success) {
        const successMsg = response.data.message;
        setMessage({ type: "success", msg: successMsg });
        setTimeout(() => {
          setMessage({ type: "", msg: "" });
          reset();
        }, 2000);
      }
    } catch (error) {
      const errMsg = error.response.data?.error || error.response.data?.message;
      setMessage({ type: "error", msg: errMsg });
      setTimeout(() => {
        setMessage({ type: "", msg: "" });
      }, 2000);
    }
  };

  useEffect(() => {
    fetchAllSkills();
  }, [fetchAllSkills]);

  const handleCancel = () => {
    reset();
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
          <RHFSelect
            label="Proficiency"
            name="proficiency"
            control={control}
            rules={proficiencyRules}
            options={proficiency}
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
          {message.msg && (
            <p style={{ color: message.type === "error" ? "red" : "green" }}>
              {message.msg}
            </p>
          )}
        </div>
      </form>

      <table className="w-full mt-6 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Skill</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Proficiency</th>
            <th className="border p-2">Total Content</th>
            <th className="border p-2">Completed Content</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {skillData.map((skill, index) => (
            <tr key={skill.id}>
              <td className="border p-2">
                {skill.skillName.replace(/^./, (char) => char.toUpperCase())}
              </td>
              <td className="border p-2">
                {skill.category.replace(/^./, (char) => char.toUpperCase())}
              </td>
              <td className="border p-2">
                {skill.proficiency.replace(/^./, (char) => char.toUpperCase())}
              </td>
              <td className="border p-2">{skill.totalContent}</td>
              <td className="border p-2">{skill.completedContent}</td>
              <td className="border p-2">
                <button
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                  onClick={() => setSelectedSkill(skill)}
                >
                  Update Content
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedSkill && (
        <UpdateContentModal
          open={!!selectedSkill}
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
          onSuccess={fetchAllSkills}
        />
      )}
    </div>
  );
};
export default MySkills;
