import React from 'react';
import { useField } from '../../context/FieldContext';
import { StyledInput } from './styles';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  const id = useField();

  return <StyledInput ref={ref} id={id} {...props} />;
});

Input.displayName = 'Field.Input';
