import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function RHFDate({
  label,
  name,
  register,
  setValue,
  rules = {},
  errors = {},
  placeholder = "Pick a date",
}) {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && <label className="text-sm font-medium">{label}</label>}

      <Popover>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="w-full justify-start text-left"
          >
            {selectedDate ? format(selectedDate, "PPP") : placeholder}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              setValue(name, date?.toISOString().split("T")[0]); // store yyyy-mm-dd
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* Hidden input for react-hook-form */}
      <input type="hidden" {...register(name, rules)} />

      {errors[name] && (
        <p className="text-xs text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
}
