import { Button, ButtonProps, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IconButtonProps extends ButtonProps {
  icon?: ReactNode;
}
export const IconButton = ({ icon, children, ...rest }: IconButtonProps) => {
  return (
    <Button {...rest}>
      <Stack alignItems='center' direction='row' spacing='6px'>
        <>{icon}</>
        <>{children}</>
      </Stack>
    </Button>
  );
};
