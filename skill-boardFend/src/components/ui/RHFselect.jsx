import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useController } from "react-hook-form";

export default function RHFSelect({
  label,
  name,
  control,
  rules = {},
  placeholder = "Select an option",
  options = [],
}) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue: "" });

  // const handleSelect = (fieldName, value) => {
  //   //console.log(`${fieldName} and ${value}`);
  //   setValue(fieldName, value);
  //   if (rules?.required && !value) {
  //     setError(name, { type: "required", message: rules.required });
  //   } else if (errors) {
  //     clearErrors(name);
  //   }
  // };
  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && <label className="text-sm font-medium">{label}</label>}

      <Select
        onValueChange={onChange}
        onBlur={onBlur}
        value={value || ""}
        name={name}
      >
        <SelectTrigger ref={ref} id={name}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Needed because shadcn Select does not register itself with react-hook-form
      <input type="hidden" {...register(name, rules)} /> */}

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
