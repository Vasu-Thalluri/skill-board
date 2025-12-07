import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useController } from "react-hook-form";

export default function RHFDate({
  label,
  name,
  control,
  rules = {},
  disablePast = true,
  disabled = false,
  placeholder = "Pick a date",
}) {
  const today = new Date().setHours(0, 0, 0, 0);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const handleDateSelect = (date) => {
    const selectedDate = format(date, "yyyy-MM-dd");
    onChange(selectedDate);
    if (selectedDate) {
      setIsPopoverOpen(false);
    }
  };
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue: "" });

  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && <label className="text-sm font-medium">{label}</label>}

      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            disabled={disabled}
            className="w-full font-normal justify-start text-left"
          >
            {value ? format(value, "PPP") : placeholder}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleDateSelect}
            disabled={(date) => disabled || (disablePast && date < today)}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {error && (
        <p
          className="error-message"
          style={{ color: "red", fontSize: "0.8rem" }}
        >
          {error.message}
        </p>
      )}
    </div>
  );
}
