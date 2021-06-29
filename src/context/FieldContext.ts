import React, { createContext, useContext } from 'react';
import { useUniqueID } from '../utils/useUniqueID';

const FieldContext = createContext<string | undefined>(undefined);

export const FieldProvider: React.FC = ({ children }) => {
  const id = useUniqueID();
  return React.createElement(
    FieldContext.Provider,
    {
      value: id,
    },
    children
  );
};

export const useField = (): string | undefined => useContext(FieldContext);
