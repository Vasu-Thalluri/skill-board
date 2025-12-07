import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function RHFSelect({
  label,
  name,
  register,
  setValue,
  rules = {},
  setError = {},
  errors = {},
  clearErrors = {},
  placeholder = "Select option",
  options = [],
}) {
  const handleSelect = (fieldName, value) => {
    //console.log(`${fieldName} and ${value}`);
    setValue(fieldName, value);
    if (rules?.required && !value) {
      setError(name, { type: "required", message: rules.required });
    } else if (errors) {
      clearErrors(name);
    }
  };
  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && <label className="text-sm font-medium">{label}</label>}

      <Select onValueChange={(val) => handleSelect(name, val)}>
        <SelectTrigger>
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

      {/* Needed because shadcn Select does not register itself with react-hook-form */}
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
