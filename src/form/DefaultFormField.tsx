import React from "react";
import { DefaultFormFieldProp } from "./ZodDynamicForm";

export function DefaultFormField({
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
      {errors[field.name] && <p>{errors[field.name]?.message}</p>}
    </div>
  );
}
