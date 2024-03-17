import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField, FormData, generateSchema } from './generateSchema';

interface Props {
  fields: FormField[];
}

function ZodDynamicForm({ fields }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(generateSchema(fields))
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.name}>{field.label}:</label>
          <input type={field.type} id={field.name} {...register(field.name, {valueAsNumber: field.type === 'number'})} />
          {errors[field.name] && <p>{errors[field.name]?.message}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ZodDynamicForm;
