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

export default function UpdateContentModal({ skill, onUpdate, open, onClose }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { completedContent: skill.completedContent },
  });
  console.log(skill);
  const submit = (data) => {
    console.log(data);
    onUpdate(Number(data.completedContent));
    reset();
    //document.getElementById("close-update")?.click();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Completed Content</DialogTitle>
          <DialogDescription>
            Add the number of completed lessons for this skill.
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
            <DialogTrigger asChild>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </DialogTrigger>

            <Button type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
