import { DefaultFormFieldProp } from "../ZodDynamicForm";

export function MyDefaultFormField({
  field,
  register,
  errors,
}: DefaultFormFieldProp) {
  return (
    <div>
      <label htmlFor={field.name}>{field.label}:</label>
      <input
        type={field.type}
        id={field.name}
        {...register(field.name, {
          valueAsNumber: field.type === "number",
        })}
      />
      {errors[field.name] && (
        <p style={{ color: "red" }}>{errors[field.name]?.message}</p>
      )}
    </div>
  );
}
