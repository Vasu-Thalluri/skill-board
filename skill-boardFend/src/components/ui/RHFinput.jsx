import { Input } from "@/components/ui/input";
import { useController } from "react-hook-form";

export default function RHFInput({
  label,
  name,
  control,
  rules = {},
  placeholder,
  type = "text",
}) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control, rules, defaultValue: "" });
  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && <label className="text-sm font-medium">{label}</label>}

      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value || ""}
        ref={ref}
      />

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
