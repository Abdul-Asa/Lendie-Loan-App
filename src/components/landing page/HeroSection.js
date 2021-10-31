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
  Input,
  Heading,
  Tag,
} from '@chakra-ui/react';
// import { useMediaQuery } from '@chakra-ui/media-query';
import React, { useState } from 'react';

function HeroSection() {
  const [loanCalculator, setLoanCalc] = useState({ amount: 50000, time: 4 });
  const handleInput = (e) => {
    if (typeof e === 'number') {
      setLoanCalc((inp) => {
        return { ...inp, time: e };
      });
    } else {
      setLoanCalc((inp) => {
        return { ...inp, [e.target.name]: Number(e.target.value) };
      });
    }
  };

  const checkMax = (e) => {
    const { name, value } = e.target;

    if (value > 500000) {
      setLoanCalc((inp) => {
        return { ...inp, [name]: 500000 };
      });
    }
    if (value < 1000) {
      setLoanCalc((inp) => {
        return { ...inp, [name]: 1000 };
      });
    }
  };
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
            How much do you want to borrow?
          </FormLabel>
          <Text color="brand.300" mb={2} fontSize="20px">
            ₦ {loanCalculator.amount.toLocaleString('en-US')}
          </Text>
          <Flex justify="space-between">
            <Button
              bgColor="#E5F3FF"
              mr={2}
              onClick={() => {
                if (loanCalculator.amount <= 490000) {
                  setLoanCalc((inp) => {
                    return {
                      ...inp,
                      amount: Number(loanCalculator.amount) + 10000,
                    };
                  });
                } else {
                  setLoanCalc((inp) => {
                    return {
                      ...inp,
                      amount: 500000,
                    };
                  });
                }
              }}
            >
              +
            </Button>
            <Input
              type="number"
              min={1000}
              max={500000}
              value={loanCalculator.amount}
              onChange={handleInput}
              onBlur={checkMax}
              name="amount"
            />
            <Button
              ml={2}
              bgColor="#E5F3FF"
              onClick={() => {
                if (loanCalculator.amount >= 11000) {
                  setLoanCalc((inp) => {
                    return {
                      ...inp,
                      amount: Number(loanCalculator.amount) - 10000,
                    };
                  });
                } else {
                  setLoanCalc((inp) => {
                    return {
                      ...inp,
                      amount: 1000,
                    };
                  });
                }
              }}
            >
              -
            </Button>
          </Flex>
          <Flex justify="space-between" fontSize="12px" p="7px">
            <Text color="#8F90A6">Min: ₦1,000</Text>
            <Text color="#8F90A6">Max: ₦500,000</Text>
          </Flex>
          <FormLabel color="#8F90A6" fontSize="sm" pt={6}>
            For how long?
          </FormLabel>
          <Text color="brand.300" fontSize="20px">
            {loanCalculator.time} {loanCalculator.time === 1 ? 'week' : 'weeks'}
          </Text>
          <Slider
            aria-label="slider-ex-1"
            max={12}
            min={1}
            step={1}
            name="time"
            value={loanCalculator.time}
            onChange={handleInput}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <FormLabel color="#8F90A6" fontSize="sm" pt={8}>
            Purpose of Loan
          </FormLabel>
          <Select
            borderRadius="md"
            placeholder="Select..."
            name="loanAmount"
            bgColor="#E5F3FF"
          >
            <option value="DB">Debt consolidation</option>
            <option value="EE">Emergency expenses</option>
            <option value="HR">House remodeling</option>
            <option value="VF">Vehicle finances</option>
            <option value="SU">Enterprise/Start-up funding</option>
            <option value="WE">Wedding expenses</option>
            <option value="CA">Vacation finances</option>
            <option value="Other">Other...</option>
          </Select>

          <Text color="#0063F7" textAlign="center" fontSize="16px" pt={4}>
            Total payable amount(2.5% flat interest rate per month){' '}
          </Text>
          <Text color="#0E6BA8" textAlign="center" fontSize="30px">
            ₦
            {(loanCalculator.amount +
              (loanCalculator.amount * (loanCalculator.time / 4) * 2.5) / 100) %
              1 ===
            0
              ? (
                  loanCalculator.amount +
                  (loanCalculator.amount * (loanCalculator.time / 4) * 2.5) /
                    100
                ).toLocaleString('en-US')
              : (
                  loanCalculator.amount +
                  (loanCalculator.amount * (loanCalculator.time / 4) * 2.5) /
                    100
                )
                  .toFixed(2)
                  .toLocaleString('en-US')}
          </Text>
        </FormControl>
      </Stack>
    </Flex>
  );
}

export default HeroSection;
