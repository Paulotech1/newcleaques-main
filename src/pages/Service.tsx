// import Carousel from 'react-bootstrap/Carousel';
// import { mockApi } from './mockApi';
import Banner from '@/assets/dummy-banner.png';
import { FormInput, IconButton, Rating } from '@/components';
import { PanelHeader } from '@/components/panel';
import { path } from '@/routes/path';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react';
import { RiFilter3Line, RiSearch2Line } from 'react-icons/ri';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const spacing = [4, 5];
const avatar = 'https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg';

export const ServicePage = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <Box bg='neutral.100' pb={4} pt='100px'>
      <Flex px={spacing} sx={{ svg: { fontSize: '20px' } }}>
        <IconButton display={['none', 'block']} icon={<RiFilter3Line />} />
        <FormInput bgColor='#fff' />
        <IconButton icon={<RiSearch2Line />}>Search</IconButton>
      </Flex>

      <PanelHeader mx={spacing} header='Highlights' mt={['30px', '90px']} />

      <Box mx={[0, spacing[1]]}>
        <Center h='fit-content' w='full' bg='gradient.100' mt={['30px', '42px']}>
          <Carousel>
            <Image src={avatar} h='304px' w='full' />

            <Image src={avatar} h='304px' w='full' />
          </Carousel>
        </Center>
      </Box>

      <PanelHeader
        mt={['46px', '80px']}
        mx={spacing}
        header={
          <Text as='h1' textTransform='uppercase' textStyle='h1'>
            Trending Services
          </Text>
        }
        rightAction={
          <Link as='h1' color='primary' textTransform='uppercase' href='#'>
            View all
          </Link>
        }
        bgColor='transparent'
        p={0}
      />

      <Flex gap={4} mt={10} mx={spacing} overflowX='auto'>
        {Array.from({ length: 5 }, (_, i) => (
          <Box bgColor='#fff' p={4} w='fit-content' key={i}>
            <Image
              w='full'
              h='123px'
              src='https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
            />
            <Text fontSize='30px' fontWeight={400} textAlign='center'>
              Auto Care
            </Text>
          </Box>
        ))}
      </Flex>

      <PanelHeader
        mx={spacing}
        header='Services'
        mb={8}
        mt='90px'
        rightAction={
          <Link as='h1' color='#fff' href='#'>
            See all
          </Link>
        }
      />
      <Grid
        templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
        columnGap={[4, 7]}
        rowGap={[3, '30px']}
        mx={spacing}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <GridItem key={i}>
            <Box bgColor='#fff' borderRadius='8px'>
              <Box borderRadius='8px 8px 0px 0px'>
                <Image objectFit='cover' src={avatar} h='197px' w='344px' alt='John Doe' />
              </Box>
              <Stack p={4}>
                <Flex justifyContent='space-between'>
                  <Stack spacing={0}>
                    <Link
                      color='black'
                      href={path.SERVICES_DETAIL.replace(':id', '1')}
                      textStyle='h1-subtext'
                    >
                      Front End Developer
                    </Link>
                    <Text color='primary' textStyle='subtext'>
                      Available Slots: 7slots
                    </Text>
                  </Stack>
                  <Text textStyle='subtext-bold'>$1,000</Text>
                </Flex>
                <Link
                  color='#000'
                  textStyle='subtext'
                  href={`/TabbedService/${i}`}
                  textDecor='underline'
                  mt={3}
                >
                  Oludare Abimbola Daniels
                </Link>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Flex justifyContent='center' mx={['44px', 0]} my={[10, '66px']}>
        <Button w='600px'>Load More</Button>
      </Flex>

      {/* my services */}
      <PanelHeader
        mx={spacing}
        header='My Services'
        mb={8}
        mt='90px'
        rightAction={
          <Link as='h1' color='#fff' href='#'>
            See all
          </Link>
        }
      />
      <Grid
        templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
        columnGap={[4, 7]}
        rowGap={[3, '30px']}
        mx={spacing}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <GridItem key={i}>
            <Box bgColor='#fff' borderRadius='8px' onClick={scrollToTop}>
              <Box borderRadius='8px 8px 0px 0px'>
                <Image objectFit='cover' src={avatar} h='197px' w='344px' alt='John Doe' />
              </Box>
              <Stack p={4}>
                <Flex justifyContent='space-between'>
                  <Stack spacing={0}>
                    <Text textStyle='h1-subtext'>Front End Developer</Text>
                    <Text color='primary' textStyle='subtext'>
                      Available Slots: 7slots
                    </Text>
                  </Stack>
                  <Text textStyle='subtext-bold'>$1,000</Text>
                </Flex>
                <Link
                  color='#000'
                  textStyle='subtext'
                  href={`/TabbedService/${i}`}
                  textDecor='underline'
                  mt={3}
                >
                  Oludare Abimbola Daniels
                </Link>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Flex justifyContent='center' mx={['44px', 0]} my={[10, '66px']}>
        <Button w='600px'>Load More</Button>
      </Flex>
    </Box>
  );
};

export const ServiceDetailPage = () => {
  return (
    <>
      <Box mt='98px' bg='neutral.100'>
        <Box mx={[4, 20]}>
          <Flex justifyContent='center'>
            <Image src={Banner} />
          </Flex>
          <Flex flexDir={['column', 'row']} justifyContent='space-between'>
            <Flex gap={[2, 10]} mt={['26px', 0]}>
              <Image
                src={avatar}
                h={['50px', '146px']}
                w={['50px', '146px']}
                pos={['static', 'relative']}
                top={[0, '-40px']}
              />
              <Stack mt={[0, 8]} spacing={0}>
                <Text textStyle={['body-regular', 'h1']}>John Doe</Text>
                <Text>
                  <Text as='span' color='primary' textStyle={['body-regular', 'h1-subtext']}>
                    Video Editor{' '}
                  </Text>
                  <Text as='span' color='gray.400' textStyle='subtext'>
                    Akure, Ondo
                  </Text>
                </Text>
              </Stack>
            </Flex>
            <Flex mt={[3, 8]} flexDir={['row', 'column']} alignItems='flex-start'>
              <Text color='primary' textStyle='body'>
                56 Reviews
              </Text>
              <Rating scale={5} strokeColor='grey' />
            </Flex>
          </Flex>
          <Box>
            <Box
              bgColor={['transparent', '#fff']}
              boxShadow={['none', 'px 2px 12px 0px rgba(0, 0, 0, 0.15)']}
              borderRadius='8px'
              pt='36px'
              px={[0, 6]}
            >
              <Text as='h2' textStyle='h1'>
                Alun Visuals Video editor
              </Text>
              <Divider my='10px' />
              <Tabs>
                <TabList
                  sx={{
                    '.chakra-tabs__tab': {
                      color: 'black',
                      textStyle: 'h1-subtext',
                      fontWeight: 400,
                      _selected: {
                        color: 'primary'
                      }
                    }
                  }}
                >
                  <Tab>Services Description</Tab>
                  <Tab>Available Services</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur. Tempus dui in nibh eu quam tortor.
                      Dolor hendrerit est morbi sem nisl morbi tempus. Quis amet phasellus vel
                      commodo nunc habitant.
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    <Flex flexDir='column'>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Box key={i}>
                          <Flex mb={4} justifyContent='space-between'>
                            <Stack>
                              <Text textStyle='h1-subtext' fontWeight={400}>
                                <Text as='span' fontWeight={600}>
                                  Service 1:
                                </Text>{' '}
                                Small description
                              </Text>
                              <Text color='primary' fontWeight={400} textStyle='h1-subtext'>
                                Available slots: 05
                              </Text>
                            </Stack>
                            <HStack spacing={4}>
                              <Text textStyle='h1-subtext'>$24.00</Text>
                              <Button>Book Services</Button>
                            </HStack>
                          </Flex>
                          <Text>
                            Elementum viverra sed in suspendisse id. Ut risus suscipit praesent
                            varius. Ornare pharetra magna pellentesque lacus. Sit lectus eget congue
                            ut ipsum a. Interdum enim quam morbi orci quam. Cursus at et sit elit.
                            Leo volutpat et duis pellentesque amet. Vitae viverra curabitur a nam.
                          </Text>
                          <Divider my={6} />
                        </Box>
                      ))}
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <PanelHeader
              mx={[0, spacing[1]]}
              header='Services'
              mb={8}
              mt='56px'
              rightAction={
                <Link as='h1' color='#fff' href='#'>
                  See all
                </Link>
              }
            />
            <Grid
              templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
              columnGap={[4, 7]}
              rowGap={[3, '30px']}
              mx={[0, spacing[1]]}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <GridItem key={i}>
                  <Box bgColor='#fff' borderRadius='8px'>
                    <Box borderRadius='8px 8px 0px 0px'>
                      <Image objectFit='cover' src={avatar} h='197px' w='344px' alt='John Doe' />
                    </Box>
                    <Stack p={4}>
                      <Flex justifyContent='space-between'>
                        <Stack spacing={0}>
                          <Link
                            color='black'
                            href={path.SERVICES_DETAIL.replace(':id', '1')}
                            textStyle='h1-subtext'
                          >
                            Front End Developer
                          </Link>
                          <Text color='primary' textStyle='subtext'>
                            Available Slots: 7slots
                          </Text>
                        </Stack>
                        <Text textStyle='subtext-bold'>$1,000</Text>
                      </Flex>
                      <Link
                        color='#000'
                        textStyle='subtext'
                        href={`/TabbedService/${i}`}
                        textDecor='underline'
                        mt={3}
                      >
                        Oludare Abimbola Daniels
                      </Link>
                    </Stack>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
