import React from 'react';
import { useField } from '../../context/FieldContext';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  const id = useField();

  return <input ref={ref} id={id} {...props} />;
});

Input.displayName = 'Field.Input';
