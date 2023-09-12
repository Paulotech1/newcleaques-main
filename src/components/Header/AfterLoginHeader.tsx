//import { useEffect, useState } from 'react';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShop } from 'react-icons/ai';
import { BiChat } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { TbShoppingCart } from 'react-icons/tb';

import {
  Box,
  Link,
  Text,
  Flex,
  Image,
  chakra,
  Spacer,
  IconButton,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react';

interface NavLink {
  link: string;
  icon: JSX.Element;
  name: string;
}

const AfterLoginHeader: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 767px)');
  const [isTablet] = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

  return (
    <chakra.header id='header'>
      <Box>{isMobile ? <MobileView /> : isTablet ? <MobileView /> : <DesktopView />}</Box>
    </chakra.header>
  );
};

const navLinks: NavLink[] = [
  { name: 'Shop', link: '/shop', icon: <AiOutlineShop /> },
  { name: 'Social', link: '/social', icon: <AiOutlineShop /> },
  { name: 'Chat', link: '/chat', icon: <BiChat /> },
  { name: 'Cart', link: '/cart', icon: <TbShoppingCart /> }
];

// const [users, setUsers] = useState([]);
// const fetchUserData = () => {
//   fetch('url')
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setUsers(data);
//     });

//   useEffect(() => {
//     fetchUserData();
//   }, []);
// };

// const dummyData = {
//   profile: {
//     profilePicture: 'https://bit.ly/dan-abramov',
//     fullName: 'John Doe',
//     accountType: 'personal'
//   }
// };

//console.log(dummyData.profile.profilePicture);

const DesktopView = () => {
  return (
    <Flex alignItems='center' justify='space-around' maxW='1920px' h='124px' bg='#212529' p='6'>
      <Box display='flex' alignItems='center'>
        <Link href='/home' display='flex' alignItems='center' textDecoration='none'>
          <Image
            src='https://generation-sessions.s3.amazonaws.com/748f748c525335ed31db362685342e09/img/image-32@2x.png'
            alt='logo'
            bg='#212529'
            w='290px'
            h='44.86px'
          />
        </Link>
      </Box>

      <Spacer />

      <Box display='flex' alignItems='center' color='white' maxW='875px' h='48px' ml='6'>
        {navLinks.map((navLink, i) => (
          <Link
            href={navLink.link}
            key={`navlink_${i}`}
            display='flex'
            alignItems='center'
            color='white'
            _hover={{ color: '#00B0F3' }}
            mr='55'
            fontFamily='Lato'
            fontWeight='400'
            fontSize='24px'
            h='36.13px'
          >
            {navLink.icon} <Text ml='1'>{navLink.name}</Text>
          </Link>
        ))}
      </Box>
      <Box display='flex' alignContent='center' color='#E6E7E8'>
        <Box w='48px' h='33px' fontSize='24px' borderRadius='5px'>
          <span className='fi fi-ng'></span>
        </Box>
        <Box fontFamily='Lato' fontWeight='600' fontSize='24px' lineHeight='34.5px'>
          NGN
        </Box>
      </Box>
      <Spacer />

      <Box display='flex' alignItems='center'>
        <IconButton
          aria-label='Search database'
          bg='balck'
          mr='4'
          icon={<BsBell fontSize='25' w='24px' h='24px' color='#00B0F3' />}
        />
        <Box display='flex' p='2'>
          {/* <UserProfile /> */}
          <Image
            borderRadius='full'
            w={50}
            h={50}
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
          />
          <Box fontFamily='Open Sans'>
            <Text size='lg' color='#FFFFFF' p='2' fontWeight='600' fontSize='16px'>
              Ayodeji Iyanuoluwa
            </Text>
            <Text
              color='#FFFFFF'
              fontWeight='400'
              fontSize='12px'
              lineHeight='23.5px'
              ml='2'
              mt='-2'
            >
              vendor
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

const MobileView = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box display='flex' alignItems='center' bg='#212529' h='79px' p='4'>
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? (
              <GrClose fontSize='xl' color='#EBE9E9' h={24} />
            ) : (
              <GiHamburgerMenu fontSize='xl' color='#EBE9E9' h={24} />
            )
          }
          aria-label={'Toggle Navigation'}
        />
        <Spacer />
        <Box>
          <Link href='/home'>
            <Image
              src='https://generation-sessions.s3.amazonaws.com/748f748c525335ed31db362685342e09/img/image-32@2x.png'
              alt='logo'
              bg='#212529'
              w='181px'
              h='28px'
            />
          </Link>
        </Box>
        <Spacer />
        <Box display='flex' alignItems='center'>
          <Box as={BsBell} fontSize='xl' mr='4' w='24px' h='24px' color='#00B0F3' />
          <Box as={BiUserCircle} fontSize='xl' w='24px' h='24px' color='#00B0F3' />
        </Box>
      </Box>
      <Box display={isOpen ? 'flex' : 'none'} flexDirection='column' p='2'>
        {navLinks.map((navLink, i) => (
          <Link
            href={navLink.link}
            key={`navlink_${i}`}
            display='flex'
            alignItems='center'
            color='#212529'
            fontFamily='Lato'
            fontSize='16px'
            h='36.13px'
          >
            {navLink.icon} <Text ml='1'>{navLink.name}</Text>
          </Link>
        ))}
      </Box>
    </>
  );
};
export default AfterLoginHeader;
