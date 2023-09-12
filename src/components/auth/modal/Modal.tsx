import Logo from '@/assets/logo.svg';
import {
  Modal as ChakraModal,
  Flex,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  UseModalProps
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ModalProps extends UseModalProps {
  // modal: UseModalProps;
  modalHeader: ReactNode;
  children: ReactNode;
}
export const Modal = ({ children, modalHeader, ...rest }: ModalProps) => {
  return (
    <ChakraModal size={['sm', 'lg']} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />

        <ModalHeader textAlign='center'>
          <Flex justifyContent='center' mb={3}>
            <Image src={Logo} />
          </Flex>

          {modalHeader}
        </ModalHeader>
        <ModalBody px={[0, '22px']}>{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
