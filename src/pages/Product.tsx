import { IconButton, PanelHeader } from '@/components';
import {
  Box,
  BoxProps,
  Text as ChakraText,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  TextProps,
  UnorderedList
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { RiHeart2Line, RiHistoryFill, RiShoppingCartLine } from 'react-icons/ri';

interface ProductItem {
  src?: string;
  title?: string;
  stockNumber?: number;
  amount: string;
}
const similarProducts: ProductItem[] = [
  {
    amount: '120',
    src: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    stockNumber: 4,
    title: "Classic men's watch extravert"
  },
  {
    amount: '12.43',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe64aH9_J7iEo8tqio1UZ0FE6nWPUT1MIWQp1xENkowQ&s',
    stockNumber: 24,
    title: 'Plain Black T-shirt'
  },
  {
    amount: '120',
    src: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    stockNumber: 4,
    title: "Classic men's watch extravert"
  },
  {
    amount: '12.43',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe64aH9_J7iEo8tqio1UZ0FE6nWPUT1MIWQp1xENkowQ&s',
    stockNumber: 24,
    title: 'Plain Black T-shirt'
  }
];

const productDetails = [
  { label: 'Product Type', value: 'Others' },
  { label: 'Vendors', value: 'Adam' },
  { label: 'Tags', value: 'Fashion, Men' }
];

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 600,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   accessibility: true
// };

const ProductPage = () => {
  return (
    <Box bgColor='#F1F5F9' p={8}>
      <Grid templateColumns='repeat(12, 1fr)' gap='34px'>
        <GridItem colSpan={7}>
          <Flex justifyContent='space-between'>
            <Stack spacing={3}>
              <ChakraText color='primary' textStyle='h1'>
                Blue coast T-shirt
              </ChakraText>
              <ChakraText color='gray.400' textStyle='h1-subtext'>
                SKU:4245 - 5373
              </ChakraText>
            </Stack>
            <ChakraText textStyle='h1'>$12.43</ChakraText>
          </Flex>
          <Flex minH='400px' gap='120px'>
            <Box w='90px'></Box>
            <Box>
              <Image
                h='458px'
                w='359px'
                objectFit='cover'
                src='https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
              />
            </Box>
          </Flex>
          <Divider my={2} />
          <Stack spacing={3}>
            <ChakraText as='h3' color='#000' textStyle='h1'>
              Description
            </ChakraText>
            <Box fontWeight={400} textStyle='body-regular'>
              <ChakraText>
                Lorem ipsum dolor sit amet consectetur. Dignissim pretium semper hendrerit a
                ullamcorper ultrices pulvinar. Ornare viverra ut sollicitudin convallis viverra amet
                et tellus. Sed et pharetra diam ut lacinia feugiat. Feugiat et sed amet adipiscing
                quis viverra proin feugiat. Faucibus sem diam feugiat vestibulum ultrices id.
                Aliquam nunc ipsum aliquet iaculis quisque nec sit elit. Massa dolor fusce aenean
                pellentesque lobortis. In elit amet sem ullamcorper eget.
              </ChakraText>
              <UnorderedList>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
            </Box>
          </Stack>
          <Container
            header={
              <Flex alignItems='center' justifyContent='space-between'>
                <ChakraText as='h3' textStyle='h1'>
                  Reviews (60)
                </ChakraText>
                <Link color='black' href='#'>
                  See all
                </Link>
              </Flex>
            }
          >
            reviews
          </Container>
        </GridItem>
        <GridItem colSpan={5}>
          <Stack direction='row' spacing={3}>
            <IconButton icon={<RiHeart2Line />}>Save for later</IconButton>
            <IconButton icon={<RiShoppingCartLine />}>Add to cart</IconButton>
          </Stack>
          <Container header='Product Details'>
            {productDetails.map((productDetail, i) => (
              <Box key={i}>
                <Flex justifyContent='space-between'>
                  <Text>{productDetail.label}</Text>
                  <ChakraText as='span' textStyle='body-regular'>
                    {productDetail.value}
                  </ChakraText>
                </Flex>
                {i !== productDetails.length - 1 && <Divider />}
              </Box>
            ))}
          </Container>
          <Container header='Product Variants'>
            <Flex justifyContent='space-between'>
              <Text>Sizes</Text>
              <Flex
                alignItems='center'
                justifyContent='center'
                bgColor='#E6F2F7'
                color='primary'
                h='29px'
                w='29px'
                textStyle='body-regular'
              >
                L
              </Flex>
            </Flex>
            <Flex justifyContent='space-between'>
              <Text>Colors</Text>
              <ChakraText as='span' textStyle='body-regular'>
                Black
              </ChakraText>
            </Flex>
          </Container>
          <Container header='Seller Details'>
            <Flex justifyContent='space-between'>
              <Flex gap='10px' alignItems='center'>
                <Image
                  objectFit='cover'
                  rounded='full'
                  src='https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
                  h='48px'
                  w='48px'
                />
                <Stack spacing={0}>
                  <Text color='primary' textStyle='h1-subtext'>
                    IluzBrandNigeriaLimited God Grace
                  </Text>
                  <Text>Ajipowo Road, Akure, ondo, NG , 234034</Text>
                </Stack>
              </Flex>
              <Stack spacing={0}>
                <Text>Seller Score</Text>
                <Text textAlign='center'>4.5</Text>
              </Stack>
            </Flex>
          </Container>
          <Container header='Delivery Information'>
            <RadioGroup>
              <Stack>
                <Radio value='local-delivery'>Local Delivery</Radio>
                <Radio value='local-pickup'>Local Pickup</Radio>
                <Radio value='international-delivery'>International Delivery</Radio>
              </Stack>
            </RadioGroup>
            <Stack ml={4} spacing={0}>
              <Text>4517 Washington Ave. Manchester, Kentucky 39495</Text>
              <Link color='primary' href='#' textStyle='subtext-bold'>
                Change location
              </Link>
            </Stack>
            <Divider my='14px' />
            <Flex>
              <Flex gap='10px'>
                <Box
                  sx={{
                    svg: {
                      w: '30px',
                      h: '30px'
                    }
                  }}
                >
                  <RiHistoryFill />
                </Box>
                <Stack>
                  <Text textStyle='h1'>Return Policy</Text>
                  <Text textStyle='body-regular'>
                    Lorem ipsum dolor sit amet consectetur. Egestas massa lobortis justo in quam et.
                    Blandit risus iaculis nisi ridiculus in. Sagittis tellus eget sed pellentesque
                    lectus diam eu viverra risus. Leo.
                  </Text>
                </Stack>
              </Flex>
            </Flex>
          </Container>
        </GridItem>
      </Grid>
      <Box mt='78px'>
        <PanelHeader
          header='Similar Products'
          rightAction={
            <Link color='#fff' href='#'>
              See all
            </Link>
          }
        />
        <Grid templateColumns='repeat(4, 1fr)' mt='38px' columnGap={6}>
          {similarProducts.map((product, i) => (
            <GridItem key={i}>
              <ProductItem
                amount={product.amount}
                src={product.src}
                title={product.title}
                stockNumber={product.stockNumber}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductPage;

interface ContainerProps extends BoxProps {
  children: ReactNode;
  header?: ReactNode;
}
const Container = ({ children, header = 'Heading', ...rest }: ContainerProps) => {
  return (
    <Box
      bgColor='#fff'
      w='full'
      mt='21px'
      borderTop='5px solid'
      borderColor='primary'
      borderRadius='8px'
      px={7}
      py='36px'
      {...rest}
    >
      {typeof header === 'string' ? (
        <ChakraText as='h3' textStyle='h1'>
          {header}
        </ChakraText>
      ) : (
        <>{header}</>
      )}

      {children}
    </Box>
  );
};

const Text = ({ children, ...rest }: TextProps) => {
  return (
    <ChakraText as='span' color='gray.400' textStyle='body-regular' fontWeight={400} {...rest}>
      {children}
    </ChakraText>
  );
};

const ProductItem = ({ amount = '0', title = '', stockNumber = 0, src = '' }: ProductItem) => {
  return (
    <Flex flexDir='column' p={4} bgColor='#fff' h='340px'>
      <Image alt={title} src={src} objectFit='cover' h='206px' w='307px' />
      <Flex alignItems='center' mt='auto' gap={2}>
        <Stack spacing={0}>
          <ChakraText
            color='black'
            overflow='hidden'
            textOverflow='ellipsis'
            whiteSpace='nowrap'
            maxW='217px'
            textStyle='h1-subtext'
            fontWeight={400}
          >
            {title}
          </ChakraText>
          <ChakraText textStyle='subtext'>
            {`${stockNumber} piece${stockNumber > 0 ? 's' : ''}`} remaining{' '}
          </ChakraText>
        </Stack>
        <ChakraText textStyle='h1'>${amount}</ChakraText>
      </Flex>
    </Flex>
  );
};
