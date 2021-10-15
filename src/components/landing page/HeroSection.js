import { Button } from '@chakra-ui/button';
import {
  Flex,
  Box,
  Text,
  Stack,
  Select,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Heading,
  Tag,
} from '@chakra-ui/react';
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
      <Box p={[6, 10]} maxW="500px">
        <Heading
          color="brand.300"
          pb={6}
          fontSize={{ base: '24px', md: '35px' }}
          fontWeight="bold"
        >
          Are you In need of extra cash? Getting a loan for quick short- term
          financial crunches should not be so tough...
        </Heading>
        <Text color="brand.400" fontSize="20px" pb={8}>
          Now you can access loans up to #500,000 with a flat monthly interest
          rate of 2.5% in a few minutes.
        </Text>
        <Button
          size="lg"
          color="whiteAlpha.900"
          _hover={{
            bgColor: '#0E6BA8',
          }}
          _disabled={{
            bgColor: '#9DBFF9',
            cursor: 'not-allowed',
            _hover: { bgColor: '#9DBFF9' },
          }}
          bgColor="brand.300"
          w={['full', 'auto', '50%']}
          as="a"
          href="/login"
        >
          Request Loan
        </Button>
      </Box>
      <Stack shadow="lg" h="fit-content" align="center" mt={[8, 0, 0]}>
        <Tag size="md" variant="solid" borderRadius="none" bgColor="#0063F7">
          Loan Calculator
        </Tag>
        <FormControl px={[6, 8, 12]} py={6} maxW="470px">
          <FormLabel color="#8F90A6" fontSize="sm">
            Purpose of Loan
          </FormLabel>
          <Select
            borderRadius="md"
            placeholder="Select..."
            name="loanAmount"
            bgColor="#E5F3FF"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="P/N">Prefer not to say</option>
          </Select>
          <FormLabel color="#8F90A6" fontSize="sm" pt={8}>
            For how long?
          </FormLabel>
          <Text color="brand.300">1 week</Text>
          <Slider
            aria-label="slider-ex-1"
            defaultValue={30}
            max={300}
            step={30}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <FormLabel color="#8F90A6" fontSize="sm" pt={8}>
            How much do you want to borrow?
          </FormLabel>
          <Select
            borderRadius="md"
            placeholder="Select..."
            name="loanPurpose"
            bgColor="#E5F3FF"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="P/N">Prefer not to say</option>
          </Select>
          <Flex justify="space-between" fontSize="12px" p="7px">
            <Text color="#8F90A6">Min: ₦1,000</Text>
            <Text color="#8F90A6">Max: ₦500,000</Text>
          </Flex>
          <Text color="#0063F7" textAlign="center" fontSize="16px" pt={4}>
            Total payable amount(2.5% flat interest rate per month){' '}
          </Text>
          <Text color="#0E6BA8" textAlign="center" fontSize="30px">
            ₦99,999.99
          </Text>
        </FormControl>
      </Stack>
    </Flex>
  );
}

export default HeroSection;
