import { ReactComponent as UserCartBlack } from '@/assets/user-cart-black.svg';
import { ReactComponent as UserCartWhite } from '@/assets/user-cart-white.svg';
import { ReactComponent as UserOctagonBlack } from '@/assets/user-octagon-black.svg';
import { ReactComponent as UserOctagonWhite } from '@/assets/user-octagon-white.svg';
import { FormInput, FormLeftAddonInput, PasswordInput } from '@/components';
import { AuthButton, Modal } from '@/components/auth';
import {
  Button,
  Link as ChakraLink,
  Checkbox,
  Divider,
  Flex,
  Grid,
  GridItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UseDisclosureProps
} from '@chakra-ui/react';
import { useState } from 'react';

export const SignupModal = ({ isOpen = true, onClose = () => null }: UseDisclosureProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const personalTabSelected = tabIndex === 0;

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
        <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
          <Flex justifyContent='center'>
            <TabList
              as={Flex}
              gap='18px'
              border={0}
              sx={{
                '.chakra-tabs__tab': {
                  outline: 0,
                  border: 0,
                  w: '150px',
                  h: '150px',
                  color: '#000',
                  _selected: {
                    color: '#fff',
                    bg: 'primary'
                  }
                }
              }}
            >
              <Tab>
                <Stack>
                  {personalTabSelected ? <UserOctagonWhite /> : <UserOctagonBlack />}
                  <Text>Personal</Text>
                </Stack>
              </Tab>
              <Tab>
                <Stack>
                  {personalTabSelected ? <UserCartBlack /> : <UserCartWhite />}
                  <Text>Vendor</Text>
                </Stack>
              </Tab>
            </TabList>
          </Flex>

          <TabPanels>
            <TabPanel>
              <AuthButton />

              <Divider my={8} />

              <Stack spacing={4}>
                <FormInput label='Email Address' placeholder='johndoe@email.com' />
                <FormLeftAddonInput label='Phone number' addonText='+234' />
                <PasswordInput placeholder='Password' />
                <Stack spacing={2}>
                  <Checkbox>
                    <Text textStyle='body' fontWeight={400}>
                      Agree to Cleaques <ChakraLink href='#'>Terms and Conditions </ChakraLink> and{' '}
                      <ChakraLink href='#'>and Use of Privacy Policy</ChakraLink>
                    </Text>
                  </Checkbox>
                  <Text textStyle='subtext' ml={6}>
                    You consent to receive phone calls and SMS from Cleaques to provide updates on
                    your order and/or for msrketing purposes.
                  </Text>
                </Stack>
              </Stack>
              <Flex justifyContent='center' mt='25px'>
                <Stack spacing={4}>
                  <Button w={['full', '312px']}>Sign Up</Button>
                  <Text textAlign='center' textStyle='body-regular' fontWeight={400}>
                    Already have an account?{' '}
                    <ChakraLink href='/login' textStyle='body'>
                      Login
                    </ChakraLink>
                  </Text>
                </Stack>
              </Flex>
            </TabPanel>
            <TabPanel>
              <AuthButton />
              <Divider my={8} />
              <Grid templateColumns='repeat(2, 1fr)' rowGap={4} columnGap={5}>
                <GridItem colSpan={2}>
                  <FormInput label='Company Name' placeholder='Cleaques Limited' />
                </GridItem>
                <GridItem colSpan={2}>
                  <FormInput label='Email Address' placeholder='johndoe@email.com' />
                </GridItem>
                <GridItem colSpan={2}>
                  <PasswordInput label='Password' />
                </GridItem>
                <GridItem colSpan={2}>
                  <FormLeftAddonInput label='Phone number' addonText='+234' />
                </GridItem>
                <GridItem colSpan={2}>
                  <FormInput label='Address' />
                </GridItem>
                <GridItem>
                  <FormInput label='Country' />
                </GridItem>
                <GridItem>
                  <FormInput label='State/Province' />
                </GridItem>
                <GridItem>
                  <FormInput label='City' />
                </GridItem>
                <GridItem>
                  <FormInput label='Zip code' />
                </GridItem>
                <GridItem>
                  <FormInput label='Date of birth' type='date-local' />
                </GridItem>
                <GridItem>
                  <FormInput label='Gender' />
                </GridItem>
                <GridItem colSpan={2}>
                  <FormInput label='Referral Code (optional)' />
                </GridItem>
              </Grid>
              <Divider my='18px' />
              <Stack spacing={1}>
                <FormInput label='EIN/RIC Registration Number' />
                <FormInput label='Upload business registration certificate' />
              </Stack>
              <Divider my='18px' />
              <Stack spacing={2}>
                <Checkbox>
                  <Text textStyle='body' fontWeight={400}>
                    Agree to Cleaques <ChakraLink href='#'>Terms and Conditions </ChakraLink> and{' '}
                    <ChakraLink href='#'>and Use of Privacy Policy</ChakraLink>
                  </Text>
                </Checkbox>
                <Text textStyle='subtext' ml={6}>
                  You consent to receive phone calls and SMS from Cleaques to provide updates on
                  your order and/or for msrketing purposes.
                </Text>
              </Stack>
              <Flex justifyContent='center' mt='25px'>
                <Stack spacing={4}>
                  <Button w={['full', '312px']}>Sign Up</Button>
                  <Text textAlign='center' textStyle='body-regular' fontWeight={400}>
                    Already have an account?{' '}
                    <ChakraLink href='/login' textStyle='body'>
                      Login
                    </ChakraLink>
                  </Text>
                </Stack>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Modal>
    </>
  );
};
