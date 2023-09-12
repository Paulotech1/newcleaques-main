import { BsSearch } from "react-icons/bs";
import { VscListFilter } from "react-icons/vsc";
import { mockApi } from "./mockApi";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { RiFilter3Line, RiSearch2Line } from "react-icons/ri";
import {
  Input,
  InputLeftAddon,
  InputGroup,
  InputLeftElement,
  TabPanel,
  TabPanels,
  Image,
  Text,
} from "@chakra-ui/react";
import { Stack } from "react-bootstrap";

const Donations = () => {
  const avatar = "https://www.johnmeyerwebdev.com/images/Me-Avatar-Maker.svg";
  const Api = useContext(mockApi);
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const spacing = [4, 5];
  return (
    <>
      <Box bg="neutral.100" pb={4} pt="100px" className="flexColumnCenter">
        {" "}
        <Flex px={spacing}>
          <IconButton id="searchMenuBtn" icon={<RiFilter3Line />} />

          <Flex>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BsSearch />
              </InputLeftElement>
              <Input
                type="tel"
                bg="white"
                w="40vw"
                focusBorderColor="#00B0F3"
                placeholder="Search"
              />
            </InputGroup>
          </Flex>
          <Button id="searchBtn">
            {" "}
            <IconButton icon={<RiSearch2Line />} bg="#00B0F3" color="white" />
            Search
          </Button>
        </Flex>
        <Box mt="50px" w="80vw">
          <h6>Categories</h6>
          <Flex justifyContent="center" mt="20px">
            <Button id="eachCategory" type="button">
              Disaster
            </Button>
            <Button id="eachCategory" type="button">
              Missionary
            </Button>{" "}
            <Button id="eachCategory" type="button">
              Children
            </Button>{" "}
            <Button id="eachCategory" type="button">
              Business
            </Button>{" "}
            <Button id="eachCategory" type="button">
              Emergency
            </Button>{" "}
            <Button id="eachCategory" type="button">
              Others
            </Button>
          </Flex>
        </Box>

        <Flex id="Highlight">My Donations</Flex>
        <Box id="donations">
          {Array.from({ length: 12 }, (_, i) => (
            <GridItem key={i}>
              <Box id="eachDonation">
                <Box borderRadius="8px 8px 0px 0px">
                  <Image
                    objectFit="cover"
                    src={avatar}
                    h="130px"
                    w="100%"
                    alt="John Doe"
                  />
                </Box>

                <Box id="donationContent">
                  <Text id="donationTitle">donationTitle</Text>
                  <Text id="donationDetails"> donationDetails</Text>
                  <Flex justifyContent="space-between" mt="10px">
                    <Text id="amountDonated">$ 1,000 Donated</Text>
                    <Link onClick={scrollToTop}>
                      <Button id="donationDetailviewBtn">View Details</Button>
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </GridItem>
          ))}{" "}
        </Box>{" "}
        <Flex id="Highlight">Trending Donations</Flex>
        <Box id="donations">
          {Array.from({ length: 4 }, (_, i) => (
            <GridItem key={i}>
              <Box id="eachDonation">
                <Box borderRadius="8px 8px 0px 0px">
                  <Image
                    objectFit="cover"
                    src={avatar}
                    h="130px"
                    w="100%"
                    alt="John Doe"
                  />
                </Box>

                <Box id="donationContent">
                  <Text id="donationTitle">donationTitle</Text>
                  <Text id="donationDetails"> donationDetails</Text>
                  <Flex justifyContent="space-between" mt="10px">
                    <Text id="amountDonated">$ 1,000 Donated</Text>
                    <Link onClick={scrollToTop}>
                      <Button id="donationDetailviewBtn">View Details</Button>
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </GridItem>
          ))}{" "}
        </Box>
        <Flex id="Highlight">Donations</Flex>
        <Box id="donations">
          {Array.from({ length: 8 }, (_, i) => (
            <GridItem key={i}>
              <Box id="eachDonation">
                <Box borderRadius="8px 8px 0px 0px">
                  <Image
                    objectFit="cover"
                    src={avatar}
                    h="130px"
                    w="100%"
                    alt="John Doe"
                  />
                </Box>

                <Box id="donationContent">
                  <Text id="donationTitle">donationTitle</Text>
                  <Text id="donationDetails"> donationDetails</Text>
                  <Flex justifyContent="space-between" mt="10px">
                    <Text id="amountDonated">$ 1,000 Donated</Text>
                    <Link onClick={scrollToTop}>
                      <Button id="donationDetailviewBtn">View Details</Button>
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </GridItem>
          ))}{" "}
        </Box>
        <Button id="loadMoreBtn" type="button">
          Load More
        </Button>
      </Box>
    </>
  );
};

export default Donations;
