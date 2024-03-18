import * as z from "zod";
import { ZodTypeAny, ZodString, ZodArray, ZodNumber } from "zod";

export type FormField = {
  name: string;
  type: "text" | "email" | "number";
  required: boolean;
  label?: string;
  min?: number;
  max?: number;
};

export function genDynamicSchema(fields: FormField[]) {
  const schemaShape: Record<string, ZodTypeAny> = {};
  fields.forEach((field) => {
    let zodAny = createZod(field);
    zodAny = getRequred(field, zodAny);
    zodAny = getNumberMinMax(field, zodAny);
    schemaShape[field.name] = zodAny;
  });
  return z.object(schemaShape);
}

function createZod(field: FormField) {
  let zodAny: ZodTypeAny;
  switch (field.type) {
    case "text":
      zodAny = z.string();
      break;
    case "email":
      zodAny = z.string();
      break;
    case "number":
      zodAny = z.string();
      break;
    default:
      zodAny = z.string(); // Default to string type
  }
  return zodAny;
}

function getRequred(field: FormField, zodAny: ZodTypeAny): ZodTypeAny {
  if (!field.required) {
    return zodAny.nullable();
  }


  if (zodAny instanceof ZodString || zodAny instanceof ZodArray) {
    zodAny = zodAny.min(1, `${field.name} is required`);
    if (field.type === "email") {
      zodAny = (zodAny as ZodString).email("Invalid email address");
    }
  }
  if(field.type === "number"){
    zodAny = (zodAny as ZodString).regex(/^[0-9]+$/, "Invalid number");
  }
  return zodAny;
}

function getNumberMinMax(field: FormField, zodAny: ZodTypeAny) {
  if (!(zodAny instanceof ZodNumber)) {
    return zodAny;
  }
  let zodNumber: ZodNumber = zodAny as ZodNumber;
  // Change ZodNumber to ZodString
  if (field.min) {
    zodNumber = zodNumber.min(
      field.min,
      `${field.name} is over ${field.min} value`
    );
  }
  if (field.max) {
    zodNumber = zodNumber.max(
      field.max,
      `${field.name} is under ${field.max} value`
    );
  }
  return zodNumber;
}
