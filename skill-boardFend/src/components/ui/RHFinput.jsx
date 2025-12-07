import { Input } from "@/components/ui/input";

export default function RHFInput({
  label,
  name,
  register,
  rules = {},
  errors = {},
  placeholder,
  type = "text",
}) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && <label className="text-sm font-medium">{label}</label>}

      <Input type={type} placeholder={placeholder} {...register(name, rules)} />

      {errors.type && (
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
