import { Modal } from '@/components/auth';
import {
  Button,
  HStack,
  PinInput,
  PinInputField,
  Stack,
  Text,
  UseDisclosureProps
} from '@chakra-ui/react';

export const EmailVerificationModal = ({
  isOpen = true,
  onClose = () => null
}: UseDisclosureProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalHeader={<Text textStyle='body'>Email Verification</Text>}
    >
      <Text color='primary' textStyle='body' fontWeight={400}>
        Enter the email that was sent to your email address to help us help you recover your
        password
      </Text>

      <HStack
        sx={{
          '.chakra-pin-input': {
            bg: '#E6F2F7',
            border: '1px solid !important',
            borderColor: '#fff !important',
            borderRadius: '6px',
            _placeholder: { fontSize: '26px', color: 'gray.300' },
            h: '64px',
            w: '64px'
          }
        }}
      >
        <PinInput mask placeholder='' variant='flushed' focusBorderColor='transparent'>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Stack spacing={3} my={3}>
        <Button>Reset Password</Button>
        <Button variant='text'>Login to your account</Button>
      </Stack>
    </Modal>
  );
};
