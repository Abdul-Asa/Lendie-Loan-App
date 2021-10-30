import React, { useState } from 'react';
import Info from './Info';
import {
  Box,
  Heading,
  Stack,
  Flex,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Text,
  Button,
  InputGroup,
  InputLeftElement,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
//
function RequestLoan() {
  function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          bg="brand.100"
          color="brand.300"
          cursor="pointer"
          w={['full', '50%', 'full']}
          fontWeight="bold"
          _checked={{
            bg: 'brand.300',
            color: 'white',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={6}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    );
  }
  const options = ['1 WEEK', '2 WEEKS', '1 MONTH', '2 MONTHS', '3 MONTHS'];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'time',
    defaultValue: '1 MONTH',
    onChange: (value) => {
      if (value === '1 WEEK') {
        setLoanCalc((inp) => {
          return { ...inp, time: 1 };
        });
      }
      if (value === '2 WEEKS') {
        setLoanCalc((inp) => {
          return { ...inp, time: 2 };
        });
      }
      if (value === '1 MONTH') {
        setLoanCalc((inp) => {
          return { ...inp, time: 4 };
        });
      }
      if (value === '2 MONTHS') {
        setLoanCalc((inp) => {
          return { ...inp, time: 8 };
        });
      }
      if (value === '3 MONTHS') {
        setLoanCalc((inp) => {
          return { ...inp, time: 12 };
        });
      }
    },
  });
  const group = getRootProps();

  const [editable, setEditable] = useState({ amount: false, time: false });
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
  const [blur, setBlur] = useState({ amount: false, purpose: false });
  const blurColor = (e) => {
    const { name } = e.target;
    if (name === 'amount') {
      setBlur((i) => {
        return { ...i, amount: true };
      });
    }
    if (name === 'purpose') {
      setBlur((i) => {
        return { ...i, purpose: true };
      });
    }
  };
  const [loanCalculator, setLoanCalc] = useState({
    amount: 0,
    time: 4,
    purpose: '',
  });
  const handleInput = (e) => {
    if (typeof e === 'number') {
      setLoanCalc((inp) => {
        return { ...inp, time: e };
      });
    } else {
      const { name, value } = e.target;
      if (name === 'amount') {
        return setLoanCalc((inputDetails) => {
          return { ...inputDetails, [name]: Number(value) };
        });
      }
      setLoanCalc((inputDetails) => {
        return { ...inputDetails, [name]: value };
      });
    }
  };
  return (
    <Stack ml={{ base: 0, md: '250px' }} mr={{ base: 0, md: 10 }}>
      <Info />
      <Box
        mt="6"
        p={[3, 8, 10]}
        bg="whiteAlpha.900"
        maxH="610px"
        shadow="lg"
        overflow="auto"
      >
        <Heading color="#333333" fontSize="24px">
          Hello Floppa 👋
        </Heading>
        <Heading
          color="#333333"
          fontFamily="Lato"
          fontStyle="normal"
          fontSize="30px"
          fontWeight="600"
          pt={4}
        >
          Request Loan
        </Heading>
        <Flex
          pl={1}
          pt={8}
          direction={['column', 'column', 'row']}
          mr={[0, 20]}
        >
          <FormControl>
            <FormLabel color="#00072D" fontSize="14px">
              Select Loan Amount
            </FormLabel>
            {editable.amount ? (
              <Flex justify="space-between" maxW="400px">
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
                  defaultValue={50000}
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
            ) : (
              <Select
                onFocusCapture={blurColor}
                color={blur.amount ? '' : '#8F90A6'}
                placeholder="Select a loan amount"
                name="amount"
                borderColor="#C7C9D9"
                borderRadius="8px"
                maxW="400px"
                value={loanCalculator.amount}
                onChange={handleInput}
              >
                <option value={1000}> ₦1,000</option>
                <option value={10000}>₦10,000</option>
                <option value={50000}>₦50,000</option>
                <option value={100000}>₦100,000</option>
                <option value={250000}>₦250,000</option>
                <option value={500000}>₦500,000</option>
              </Select>
            )}

            <FormHelperText
              color="#0063F7"
              fontSize="14px"
              as="button"
              onClick={() =>
                setEditable((inputDetails) => {
                  return { ...inputDetails, amount: !editable.amount };
                })
              }
            >
              Want a different amount?
            </FormHelperText>
          </FormControl>
          <FormControl mt={[3, 0]}>
            <FormLabel color="#00072D" fontSize="14px">
              Purpose of Loan
            </FormLabel>
            <Select
              onFocusCapture={blurColor}
              color={blur.purpose ? '' : '#8F90A6'}
              name="purpose"
              placeholder="Purpose of loan"
              borderColor="#C7C9D9"
              borderRadius="8px"
              maxW="400px"
              value={loanCalculator.purpose}
              onChange={handleInput}
            >
              <option value="Debt consolidation">Debt consolidation</option>
              <option value="Emergency expenses">Emergency expenses</option>
              <option value="House remodeling">House remodeling</option>
              <option value="Vehicle finances">Vehicle finances</option>
              <option value="Enterprise/Start-up funding">
                Enterprise/Start-up funding
              </option>
              <option value="Wedding expenses">Wedding expenses</option>
              <option value="Vacation finances">Vacation finances</option>
              <option value="Other">Other...</option>
            </Select>
          </FormControl>
        </Flex>
        <Box pl={1} pt={8} mb={[32, 28, 0]}>
          <FormControl>
            <Text color="#333333">Loan Period</Text>
            {editable.time ? (
              <>
                <Text color="brand.300" pt={2} px={[2, 0]} fontSize="18px">
                  {loanCalculator.time}{' '}
                  {loanCalculator.time === 1 ? 'week' : 'weeks'}
                </Text>
                <Stack spacing="15px" px={[2, 0]}>
                  <Slider
                    aria-label="slider-ex-1"
                    max={12}
                    min={1}
                    step={1}
                    name="time"
                    maxW="400px"
                    value={loanCalculator.time}
                    onChange={handleInput}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Stack>
              </>
            ) : (
              <Stack
                {...group}
                pt={2}
                spacing="15px"
                direction={['column', 'column', 'row']}
                px={[2, 0]}
              >
                {options.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  );
                })}
              </Stack>
            )}
            <FormHelperText
              color="#0063F7"
              fontSize="14px"
              as="button"
              onClick={() =>
                setEditable((inputDetails) => {
                  return { ...inputDetails, time: !editable.time };
                })
              }
            >
              Want a different duration?
            </FormHelperText>
          </FormControl>
          <Flex
            pl={1}
            pt={8}
            direction={['column', 'column', 'row']}
            mr={[0, 20]}
          >
            <FormControl>
              <FormLabel color="#00072D" fontSize="14px">
                Loan Interest
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children="₦ |" />
                <Input
                  borderColor="#C7C9D9"
                  maxW="400px"
                  isReadOnly
                  value={(
                    (loanCalculator.amount * (loanCalculator.time / 4) * 2.5) /
                    100
                  ).toLocaleString('en-US')}
                />
              </InputGroup>
            </FormControl>
            <FormControl mt={[3, 0]}>
              <FormLabel color="#00072D" fontSize="14px">
                Total Amount Payable
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children="₦ |" />
                <Input
                  borderColor="#C7C9D9"
                  maxW="400px"
                  isReadOnly
                  value={(
                    loanCalculator.amount +
                    (loanCalculator.amount * (loanCalculator.time / 4) * 2.5) /
                      100
                  ).toLocaleString('en-US')}
                />
              </InputGroup>
            </FormControl>
          </Flex>

          <Button
            mt={10}
            w={['full', '30%']}
            padding="14px 32px"
            color="whiteAlpha.900"
            _hover={{
              bgColor: '#0E6BA8',
            }}
            bgColor="brand.300"
          >
            Request Loan
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}

export default RequestLoan;
