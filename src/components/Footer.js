import {
  VStack,
  Box,
  HStack,
  Text,
  Flex,
  Heading,
  // Stack,
} from '@chakra-ui/react';
import React from 'react';
import { IconButton } from '@chakra-ui/button';
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

function Footer() {
  return (
    <Box as="footer" bottom="0">
      <Flex
        mt={20}
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'flex-start' }}
        w="full"
        justify="space-evenly"
      >
        <Flex
          direction={['column', 'row', 'row']}
          justify="space-between"
          minWidth={['0', '300px', '450px']}
        >
          <VStack align={['auto', 'flex-start']} pb={8}>
            <Heading color="#0A2472" fontSize="20" fontWeight="bold" pb={4}>
              Useful Links
            </Heading>
            <Text
              color="#00072D"
              pb={2}
              as="a"
              href="/about-us"
              _hover={{ color: 'brand.200' }}
            >
              About
            </Text>
            <Text
              color="#00072D"
              pb={2}
              as="a"
              href="/#About"
              _hover={{ color: 'brand.200' }}
            >
              Why Lendie
            </Text>
            <Text
              color="#00072D"
              pb={2}
              as="a"
              href="/#FAQs"
              _hover={{ color: 'brand.200' }}
            >
              FAQs
            </Text>
            <Text
              color="#00072D"
              pb={2}
              as="a"
              href="/#ContactUs"
              _hover={{ color: 'brand.200' }}
            >
              Contact Us
            </Text>
          </VStack>
          <VStack align={['auto', 'flex-start']} pb={8}>
            <Heading color="#0A2472" fontSize="20" fontWeight="bold" pb={4}>
              Services
            </Heading>
            <Text
              color="#00072D"
              pb={2}
              as="a"
              href="/about-us"
              _hover={{ color: 'brand.200' }}
            >
              About
            </Text>
            <Text
              color="#00072D"
              pb={2}
              as="a"
              href="/#About"
              _hover={{ color: 'brand.200' }}
            >
              Why Lendie
            </Text>
            <Text
              color="#00072D"
              pb={2}
              as="a"
              href="/#FAQs"
              _hover={{ color: 'brand.200' }}
            >
              FAQs
            </Text>
            <Text
              color="#00072D"
              pb={2}
              as="a"
              href="/#ContactUs"
              _hover={{ color: 'brand.200' }}
            >
              Contact Us
            </Text>
          </VStack>
        </Flex>
        <VStack
          pr={[0, 0, 10]}
          align={{ base: 'center', md: 'flex-start' }}
          pb={8}
        >
          <Heading color="#0A2472" fontSize="20" fontWeight="bold" pb={[2, 4]}>
            Follow Us
          </Heading>
          <HStack>
            <IconButton
              as="a"
              href="/"
              icon={<FaFacebook size="20px" />}
              target="_blank"
              variant="ghost"
            />
            <IconButton
              as="a"
              href="/"
              icon={<FaInstagram size="20px" />}
              variant="ghost"
              target="_blank"
            />
            <IconButton
              as="a"
              href="/"
              icon={<FaTwitter size="20px" />}
              variant="ghost"
              target="_blank"
            />
            <IconButton
              as="a"
              href="/"
              icon={<FaLinkedin size="20px" />}
              target="_blank"
              variant="ghost"
            />
            <IconButton
              as="a"
              href="/"
              icon={<FaYoutube size="20px" />}
              variant="ghost"
              target="_blank"
            />
          </HStack>
        </VStack>
      </Flex>
      <Flex
        borderTop="1px solid "
        w="100%"
        justifyContent="space-around"
        borderColor="gray.300"
        align="center"
        p="16px"
        direction={{ base: 'column', md: 'row' }}
      >
        <Text color="black" fontSize="13px" pb={[2, 2, 0]}>
          © 2020, All rights reserved
        </Text>
        <Text color="black" fontSize="13px" textAlign={['center', 'start']}>
          Privacy Policy Cookie Policy Terms and Condition Revoke Cookie Consent
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
