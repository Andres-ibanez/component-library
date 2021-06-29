import React from 'react';
import { useField } from '../../context/FieldContext';

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>((props, ref) => {
  const id = useField();
  
  return <label ref={ref} htmlFor={id} {...props} />;
});

Label.displayName = 'Field.Label';
