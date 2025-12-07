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
  setError = {},
  errors = {},
  clearErrors,
  placeholder = "Pick a date",
}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date().setHours(0, 0, 0, 0);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    if (date) {
      setIsPopoverOpen(false);
    }
    if (rules?.required && !date) {
      setError(name, { type: "required", message: rules.required });
    } else if (errors) {
      clearErrors(name);
    }
  };

  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && <label className="text-sm font-medium">{label}</label>}

      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="w-full font-normal justify-start text-left"
          >
            {selectedDate ? format(selectedDate, "PPP") : placeholder}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              handleDateSelect(date);
              setValue(name, date?.toISOString().split("T")[0]); // store yyyy-mm-dd
            }}
            disabled={(date) => date < today}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* Hidden input for react-hook-form */}
      <input type="hidden" {...register(name, rules)} />

      {errors && (
        <p
          className="error-message"
          style={{ color: "red", fontSize: "0.8rem" }}
        >
          {errors.message}
        </p>
      )}
    </div>
  );
}
