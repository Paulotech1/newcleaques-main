import { InputProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface FormInputProps extends InputProps {
  label?: string;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  touchedField?: boolean;
  errorMessage?: string;
  readonly?: boolean;
  disabled?: boolean;
}
