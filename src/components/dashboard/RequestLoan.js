import React from 'react';
import Info from './Info';
import {
  Box,
  Heading,
  Stack,
  Flex,
  Input,
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
  // 1. Create a component that consumes the `useRadio` hook
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
    onChange: console.log,
  });

  const group = getRootProps();

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
            <Select
              placeholder="10000"
              color="#C7C9D9"
              borderColor="#C7C9D9"
              borderRadius="8px"
              maxW="400px"
            >
              <option>1000</option>
              <option>2000</option>
              <option>3000</option>
              <option>5000</option>
              <option>8000</option>
            </Select>
            <FormHelperText color="#0063F7" fontSize="14px">
              Want a different amount?
            </FormHelperText>
          </FormControl>
          <FormControl mt={[3, 0]}>
            <FormLabel color="#00072D" fontSize="14px">
              Purpose of Loan
            </FormLabel>
            <Select
              placeholder="Purpose of loan"
              color="gray"
              borderColor="#C7C9D9"
              borderRadius="8px"
              maxW="400px"
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
          </FormControl>
        </Flex>
        <Box pl={1} pt={8} mb={[32, 28, 0]}>
          <FormControl>
            <Text color="#333333">Loan Period</Text>
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
            <FormHelperText color="#0063F7" fontSize="14px">
              Want a different amount?
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
                <InputLeftElement
                  color="#C7C9D9"
                  pointerEvents="none"
                  children="N |"
                />
                <Input borderColor="#C7C9D9" maxW="400px" isReadOnly />
              </InputGroup>
            </FormControl>
            <FormControl mt={[3, 0]}>
              <FormLabel color="#00072D" fontSize="14px">
                Total Amount Payable
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  color="#C7C9D9"
                  pointerEvents="none"
                  children="N |"
                />
                <Input borderColor="#C7C9D9" maxW="400px" isReadOnly />
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
