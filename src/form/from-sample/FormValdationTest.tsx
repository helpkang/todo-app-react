import ZodDynamicForm, { FormData } from "../ZodDynamicForm";
import { FormField, genDynamicSchema } from "../generateSchema";
import { MyDefaultFormField } from "./MyDefaultFormField";

const fields: FormField[] = [
  { name: "name", type: "text", required: true, label: "FullName" },
  { name: "email", type: "email", required: true, label: "Email" },
  {
    name: "age",
    type: "number",
    required: true,
    min: 18,
    max: 99,
    label: "Age",
  },
];

export function FormValdationTest() {
  function onSubmit(data: FormData) {
    console.log(data);
  }
  function onFailed(errors: any) {
    console.log(errors);
  }
  const formMap = {
    default: MyDefaultFormField,
  };
  return (
    <div>
      <h1>Form Validation Test</h1>
      <ZodDynamicForm
        fields={fields}
        onSubmit={onSubmit}
        onFailed={onFailed}
        formMap={formMap}
      >
        <button type="submit">Submit</button>
      </ZodDynamicForm>
    </div>
  );
}
