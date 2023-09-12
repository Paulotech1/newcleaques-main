import { ReactComponent as InterestSelectionIcon } from '@/assets/interest-selection.svg';
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  UseDisclosureProps
} from '@chakra-ui/react';

export const InterestSelectionModal = ({
  isOpen = true,
  onClose = () => null
}: UseDisclosureProps) => {
  return (
    <Modal size={['sm', 'lg']} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody px={[0, '22px']}>
          <Flex justifyContent='center' mt='68px'>
            <InterestSelectionIcon />
          </Flex>
          <Text color='primary' textAlign='center' textStyle='h1'>
            Select Interests
          </Text>
          <Text maxW='lg' textAlign='center'>
            Select at least 5 interest to help us tailor your timeline to your needs
          </Text>
          <Grid templateColumns='repeat(3, 1fr)' rowGap='22px' columnGap='9px' mt='22px'>
            <GridItem>
              <InterestButton text='Clothing' />
            </GridItem>
            <GridItem>
              <InterestButton text='New in Town' />
            </GridItem>
            <GridItem>
              <InterestButton text='Barber' />
            </GridItem>
            <GridItem>
              <InterestButton text='Food' />
            </GridItem>
            <GridItem>
              <InterestButton text='Event Planner' />
            </GridItem>
            <GridItem>
              <InterestButton text='Vacation' />
            </GridItem>
            <GridItem>
              <InterestButton text='Photography' />
            </GridItem>
            <GridItem>
              <InterestButton text='Handyman' />
            </GridItem>
          </Grid>
          <Button w='full' mt='104px' mb={1}>
            Save interest
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

type InterestButtonProps = {
  text?: string;
};
const InterestButton = ({ text = '' }: InterestButtonProps) => {
  return (
    <Button
      display='inline-flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        color: 'primary',
        _hover: {
          bg: 'transparent',
          borderColor: 'blue.hover'
        }
      }}
      w='142px'
      h='50px'
      borderRadius='4px'
      border='1px solid'
      borderColor='primary'
      variant='outline'
    >
      {text}
    </Button>
  );
};
