import * as z from "zod";
import {ZodTypeAny, ZodString, ZodArray, ZodNumber } from "zod";

export type FormField = {
  name: string;
  type: "text" | "email" | "number";
  required: boolean;
  label?: string;
  min?: number;
  max?: number;
};
// Generate Zod schema dynamically based on form fields
export function generateSchema(fields: FormField[]) {
  const schemaShape: Record<string, ZodTypeAny> = {};
  fields.forEach((field) => {
    let fieldSchema: z.ZodTypeAny;
    switch (field.type) {
      case "text":
        fieldSchema = z.string();
        break;
      case "email":
        fieldSchema = z.string();
        break;
      case "number":
        fieldSchema = z.number();
        break;
      default:
        fieldSchema = z.string(); // Default to string type
    }
    if (field.required) {
      if (
        fieldSchema instanceof ZodString ||
        fieldSchema instanceof ZodArray
      ) {
        fieldSchema = fieldSchema.min(1, `${field.name} is required`);
        if (field.type === "email") {
          fieldSchema = (fieldSchema as ZodString).email("Invalid email address");
        }
      } else if (fieldSchema instanceof ZodNumber) { // Change ZodNumber to ZodString
        let f:ZodNumber = fieldSchema;
          if(field.min) {
            f = f.min(field.min, `${field.name} is over ${field.min} value`);
          }
          if(field.max) {
            f = f.max(field.max, `${field.name} is under ${field.max} value`);
          }
          fieldSchema = f;
      } else {
        fieldSchema = fieldSchema.nullable();
      }
    }
    schemaShape[field.name] = fieldSchema;
  });
  return z.object(schemaShape);
}
export interface FormData {
  [key: string]: string;
}
