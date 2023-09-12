import { FormInput, PasswordInput } from '@/components';
import { AuthButton, Modal } from '@/components/auth';
import {
  Button,
  Link as ChakraLink,
  Checkbox,
  Divider,
  Stack,
  Text,
  UseDisclosureProps
} from '@chakra-ui/react';

export const LoginModal = ({ isOpen = true, onClose = () => null }: UseDisclosureProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        modalHeader={
          <Stack spacing={2}>
            <Text textStyle='body'>Welcome to Cleaques</Text>
            <Text textStyle='body' fontWeight={400}>
              Connect with your diaspora
            </Text>
          </Stack>
        }
      >
        <Stack>
          <AuthButton />
          <Divider my={8} />

          <Stack spacing={4}>
            <FormInput placeholder='Email Address' />
            <PasswordInput placeholder='Password' />
            <Stack spacing={2}>
              <Checkbox>
                <ChakraLink href='#' fontSize='12px'>
                  Forget Password?
                </ChakraLink>
              </Checkbox>
            </Stack>
          </Stack>

          <Stack mt='77px'>
            <Button>Login</Button>
            <Stack mx='auto' mt='8px' mb='201px'>
              <Text fontSize='14px'>
                Don&apos;t have an account? <ChakraLink href='#'>Create account </ChakraLink>
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};
