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
  errors = {},
  placeholder = "Select option",
  options = [],
}) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && <label className="text-sm font-medium">{label}</label>}

      <Select onValueChange={(val) => setValue(name, val)}>
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

      {errors[name] && (
        <p className="text-xs text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
}
