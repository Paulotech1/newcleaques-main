import { globalStyles } from '@/theme/styles';
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import { FormInputProps } from './@types';

const { colors } = globalStyles;

export const FormInput = ({
  id,
  label,
  leftAddon,
  rightAddon,
  touchedField,
  errorMessage,
  readonly = false,
  disabled = false,
  ...props
}: FormInputProps) => {
  return (
    <FormControl sx={{ display: 'flex', flexDirection: 'column' }}>
      {label && (
        <Text as='label' htmlFor={id} textStyle='subtext'>
          {label}
        </Text>
      )}
      <InputGroup>
        {leftAddon && <>{leftAddon}</>}
        <Input
          {...props}
          id={id}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          isInvalid={!!(touchedField && errorMessage)}
          errorBorderColor='error'
          readOnly={readonly}
          disabled={disabled}
        />
        {rightAddon && <>{rightAddon}</>}
      </InputGroup>

      {touchedField && errorMessage ? (
        <Text as='small' className='error' color='error' textStyle='xs' mt={0}>
          {errorMessage}
        </Text>
      ) : null}
    </FormControl>
  );
};

interface Props extends FormInputProps {
  addonText?: string;
  inputProps?: FormInputProps & { readonly?: boolean };
  value?: string | undefined;
}
export const FormLeftAddonInput = (props: Props) => {
  return (
    <FormControl sx={{ display: 'flex', flexDirection: 'column' }}>
      <Text textStyle='subtext' as='label' htmlFor={props.inputProps?.id}>
        {props.label}
      </Text>
      <InputGroup>
        {props.addonText && (
          <InputLeftElement pointerEvents='none' w={14} zIndex={1}>
            <Text as='span' textStyle='subtext'>
              {props.addonText}
            </Text>
          </InputLeftElement>
        )}
        <FormInput
          pl={props.addonText ? 14 : ''}
          {...props.inputProps}
          value={props.value}
          onChange={props.onChange}
          errorMessage={props.errorMessage}
          touchedField={props.touchedField}
        />
      </InputGroup>
    </FormControl>
  );
};

export const PasswordInput = ({ ...props }: FormInputProps) => {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <FormInput
      {...props}
      type={showPwd ? 'text' : 'password'}
      rightAddon={
        <InputRightElement cursor='pointer' onClick={() => setShowPwd(!showPwd)}>
          {showPwd ? (
            <RiEyeCloseLine color={colors.gray[400]} />
          ) : (
            <RiEyeLine color={colors.gray[400]} />
          )}
        </InputRightElement>
      }
    />
  );
};
