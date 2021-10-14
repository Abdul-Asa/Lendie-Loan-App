import { Button } from '@chakra-ui/button';
import {
  Flex,
  // HStack,
  Box,
  Text,
  // Container,
  // Stack,
  Heading,
} from '@chakra-ui/layout';
// import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';

function HeroSection() {
  // const [isNotSmallerScreen] = useMediaQuery('min-width:600px');

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      m={[2, 10, 20]}
      justify="space-around"
    >
      <Box p={10} maxW="600px">
        <Heading color="brand.300" pb={4}>
          Are you In need of extra cash? Getting a loan for quick short- term
          financial crunches should not be so tough...
        </Heading>
        <Text color="brand.400" fontSize="20px" pb={4}>
          Now you can access loans upto #500,000 with a flat monthly interest
          rate of 2.5% in a few minutes.
        </Text>
        <Button color="white" bg="brand.300" w={{ base: 'full', md: 'auto' }}>
          Request Loan
        </Button>
      </Box>
      <Box width="420px" shadow="md">
        Loan Calc
      </Box>
    </Flex>
  );
}

export default HeroSection;
