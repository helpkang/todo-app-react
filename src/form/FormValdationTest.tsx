import ZodDynamicForm from "./ZodDynamicForm";
import { FormField, generateSchema } from "./generateSchema";

export function FormValdationTest() {
const fields: FormField[] = [
    { name: "name", type: "text", required: true, label: "FullName" },
    { name: "email", type: "email", required: true, label: "Email"},
    { name: "age", type: "number", required: true, min: 18, max: 99, label: "Age"},
    ];
    // const v = generateSchema(fields);
  return (
    <div>
      <h1>Form Validation Test</h1>
      <ZodDynamicForm fields={fields} />
    </div>
  );
}