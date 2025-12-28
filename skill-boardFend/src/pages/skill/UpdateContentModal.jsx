import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function UpdateContentModal({
  skill,
  open,
  onClose,
  onSuccess,
}) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: skill.id,
      completedContent: skill.completedContent,
    },
  });
  const API_URL = import.meta.env.VITE_API_URL;
  const [message, setMessage] = useState({ type: "", msg: "" });

  const submit = async (data) => {
    try {
      const res = await axios.put(`${API_URL}/skill/update`, data);
      const success = res.data.success;
      if (res && success) {
        const successMsg = res.data.message;
        setMessage({ type: "success", msg: successMsg });
        setTimeout(() => {
          setMessage({ type: "", msg: "" });
        }, 2000);
      }
      onSuccess();
    } catch (error) {
      const errMsg = error.response.data.error;
      setMessage({ type: "error", msg: errMsg });
      setTimeout(() => {
        setMessage({ type: "", msg: "" });
      }, 2000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Completed Content</DialogTitle>
          <DialogDescription style={{ color: "white" }}>
            Add the number of completed lesson or lessons of your{" "}
            <span style={{ color: "blue" }}>
              <strong>{skill.skillName}</strong>
            </span>{" "}
            skill.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(submit)} className="grid gap-4 py-2">
          <div>
            <label className="text-sm">Completed Content</label>
            <Input
              type="text"
              {...register("completedContent", { required: true })}
            />
          </div>

          <DialogFooter>
            <Button type="submit">Update</Button>
            <DialogTrigger asChild>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </DialogTrigger>
          </DialogFooter>
          <div className="text-center">
            {message.msg && (
              <p style={{ color: message.type === "error" ? "red" : "green" }}>
                {message.msg}
              </p>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
