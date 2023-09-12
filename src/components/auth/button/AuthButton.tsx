import { ReactComponent as Facebook } from '@/assets/facebook.svg';
import { ReactComponent as Google } from '@/assets/google.svg';
import { Button, Stack } from '@chakra-ui/react';

export const AuthButton = () => {
  return (
    <Stack
      sx={{
        button: {
          textStyle: 'h1-subtext',
          textTransform: 'none',
          display: 'flex',
          gap: '30px',
          h: '56px'
        }
      }}
    >
      <Button variant='neutral'>
        <Google />
        Sign up with Google
      </Button>
      <Button variant='neutral'>
        <Facebook />
        Sign up with Facebook
      </Button>
    </Stack>
  );
};
