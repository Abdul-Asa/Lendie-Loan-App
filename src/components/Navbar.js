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
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { HiX, HiOutlineMenu } from 'react-icons/hi';
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Box
      position="Sticky"
      top="0"
      left="0"
      width="100%"
      bg="brand.100"
      as="nav"
    >
      <Flex align="center" px="4" h="88px" minW="300px">
        <Box
          alignItems="center"
          ml={[0, 16, 2, 28]}
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
          <Text as="a" href="/about-us">
            About
          </Text>
          <Text as="a" href="/why-lendie">
            Why Lendie
          </Text>
          <Text as="a" href="/FAQS">
            FAQs
          </Text>
          <Text as="a" href="/contact-us">
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
            onClick={() => setOpenMenu(!openMenu)}
          />
        </Flex>
      </Flex>
      <Collapse in={openMenu} animateOpacity>
        <Box h="full" display={{ base: 'block', md: 'none' }}>
          <Stack alignItems="center">
            <Text as="a" href="/about-us">
              About
            </Text>
            <Text as="a" href="/why-lendie">
              Why Lendie
            </Text>
            <Text as="a" href="/FAQS">
              FAQs
            </Text>
            <Text as="a" href="/contact-us">
              Contact Us
            </Text>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
