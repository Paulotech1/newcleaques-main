import { FormInput } from '@/components';
import { Modal } from '@/components/auth';
import { Button, Link, Stack, Text, UseDisclosureProps } from '@chakra-ui/react';

export const ForgotPasswordModal = ({
  isOpen = true,
  onClose = () => null
}: UseDisclosureProps) => {``
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalHeader={<Text textStyle='body'>Forgot Password</Text>}
    >
      <FormInput label='Email Address' placeholder='johndoe@email.com' />
      <Link href='#' textStyle='body' fontWeight={400} mt={2}>
        Reset Password with phone number
      </Link>
      <Stack spacing={3} my={3}>
        <Button>Reset Password</Button>
        <Button variant='text'>Login to your account</Button>
      </Stack>
    </Modal>
  );
};
