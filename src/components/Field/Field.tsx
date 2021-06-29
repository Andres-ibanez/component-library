import React from 'react';
import { Label } from './Label';
import { Input } from './Input';
import { FieldProvider } from '../../context/FieldContext';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
}

export const Field: React.FC & FieldComposition = ({ children }) => {
  return <FieldProvider>{children}</FieldProvider>;
};

Field.Label = Label;
Field.Input = Input;
