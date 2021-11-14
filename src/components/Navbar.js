import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Button,
  Spacer,
  Collapse,
  Heading,
  Text,
  Divider,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { HiX, HiOutlineMenu } from 'react-icons/hi';
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Box
      position="sticky"
      top="0"
      left="0"
      width="100%"
      bg="brand.100"
      as="nav"
      zIndex="overlay"
    >
      <Flex align="center" px="4" h="88px" minW="300px">
        <Box
          alignItems="center"
          ml={[0, 2, 2, 28]}
          p="16px"
          borderRadius="60px"
          bg="white"
          as="a"
          href="/"
        >
          <Heading size="md" color="brand.300" fontFamily="Montserrat">
            Lendie
          </Heading>
        </Box>
        <HStack
          ml="10"
          color="brand.400"
          spacing="8"
          display={{ base: 'none', md: 'block' }}
        >
          <Text as="a" href="/about-us" _hover={{ color: 'brand.200' }}>
            About Us
          </Text>

          <Text as="a" href="/#About" _hover={{ color: 'brand.200' }}>
            Why Lendie
          </Text>
          <Text as="a" href="/#FAQs" _hover={{ color: 'brand.200' }}>
            FAQs
          </Text>
          <Text as="a" href="/#ContactUs" _hover={{ color: 'brand.200' }}>
            Contact Us
          </Text>
        </HStack>
        <Spacer />
        <Flex
          alignItems="center"
          mr={[2, 8, 2, 16]}
          display={{ base: 'none', md: 'block' }}
        >
          <HStack spacing={[2, 6, 2, 10]}>
            <Button
              as="a"
              href="/login"
              variant="solid"
              borderWidth="1px"
              h="80%"
              bg="inherit"
              borderColor="gray.300"
              padding="14px 32px"
              color="brand.300"
              _hover={{
                textDecoration: 'none',
                bg: 'transparent',
                borderColor: 'brand.300',
              }}
            >
              Login
            </Button>
            <Button
              as="a"
              href="/signup"
              variant="solid"
              h="80%"
              borderWidth="1px"
              bg="whiteAlpha.900"
              borderColor="gray.300"
              padding="14px 32px"
              color="brand.300"
              _hover={{
                textDecoration: 'none',
                borderColor: 'brand.300',
              }}
            >
              Signup
            </Button>
          </HStack>
        </Flex>
        <Flex
          alignItems="center"
          mr={{ base: '2', md: '20' }}
          display={{ base: 'block', md: 'none' }}
        >
          <IconButton
            icon={
              openMenu ? <HiX size="20px" /> : <HiOutlineMenu size="20px" />
            }
            bg="whiteAlpha.800"
            color="brand.300"
            onClick={() => setOpenMenu(!openMenu)}
          />
        </Flex>
      </Flex>
      <Collapse in={openMenu} animateOpacity>
        <Box h="full" display={{ base: 'block', md: 'none' }}>
          <Stack p="16px" color="brand.300" ml={8} fontWeight="600">
            <Flex h="30px">
              <Text as="a" href="/about-us">
                About Us
              </Text>
            </Flex>
            <Divider />
            <Flex h="30px">
              <Text as="a" href="/#About">
                Why Lendie
              </Text>
            </Flex>
            <Divider />
            <Flex h="30px">
              <Text as="a" href="/#FAQs">
                FAQs
              </Text>
            </Flex>
            <Divider />
            <Flex h="30px">
              <Text as="a" href="/#ContactUs">
                Contact Us
              </Text>
            </Flex>
            <Divider />
            <Flex h="30px">
              <Text as="a" href="/login">
                Login
              </Text>
            </Flex>
            <Divider />
            <Flex h="30px">
              <Text as="a" href="/signup">
                Sign up
              </Text>
            </Flex>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
