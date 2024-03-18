import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, genDynamicSchema } from "./generateSchema";
import { DefaultFormField } from "./DefaultFormField";

type ReactFormMap = {
  [key: string]: ReactFormField;
};
type ZodDynamicFormProps = {
  fields: FormField[];
  onSubmit: (data: FormData) => void;
  onFailed?: (errors: any) => void;
  formMap?: ReactFormMap;
  children?: React.ReactNode;
};

export type FormData = {
  [key: string]: string;
};

function ZodDynamicForm({
  fields,
  onSubmit,
  onFailed,
  formMap = {
    default: DefaultFormField,
  },
  children,
}: ZodDynamicFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(genDynamicSchema(fields)),
  });

  const newFormMap = fillFormMap(fields, formMap);
  return (
    <form onSubmit={handleSubmit(onSubmit, onFailed)}>
      {fields.map((field, index) => {
        const MatchFrom: ReactFormField = newFormMap[field.name];
        return (
          <Fragment key={index}>
            <MatchFrom field={field} register={register} errors={errors} />
          </Fragment>
        );
      })}
      {children}
    </form>
  );
}

export default ZodDynamicForm;

export interface DefaultFormFieldProp {
  field: FormField;
  register: any;
  errors: any;
}

type ReactFormField = (props: DefaultFormFieldProp) => JSX.Element;

function fillFormMap(fields: FormField[], formMap: ReactFormMap) {
  const newFormMap = {} as ReactFormMap;
  fields.forEach((field) => {
    const key = field.name;
    let form = formMap[key];
    if (!form) {
      form = formMap.default;
      if (!form) {
        form = DefaultFormField;
      }
    }
    newFormMap[key] = form;
  });
  return newFormMap;
}
