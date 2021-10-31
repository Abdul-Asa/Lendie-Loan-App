import { useState } from 'react';
import {
  Heading,
  Box,
  Flex,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Select,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';
import {
  WarningIcon,
  InfoIcon,
  ViewIcon,
  ViewOffIcon,
  ArrowBackIcon,
} from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
import { getUser } from '../../utils/LocalStorage';
import { signupAction } from '../../utils/Actions';

const SignupForm = () => {
  let history = useHistory();
  const user = getUser();
  if (user) {
    history.push('/user/home');
  }
  const [error, setError] = useState({ message: '' });
  const [errorType, setErrorType] = useState({
    type: '',
    field: '',
  });
  // const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [blur, setBlur] = useState({ gender: false, date: false });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [tabIndex, setTabIndex] = useState(0);

  const validateForm = () => {
    return (
      signupInfo.lastName &&
      signupInfo.firstName &&
      signupInfo.gender &&
      signupInfo.dateOfBirth
    );
  };
  const blurColor = (e) => {
    const { name } = e.target;
    if (name === 'gender') {
      setBlur((i) => {
        return { ...i, gender: true };
      });
    }
    if (name === 'dateOfBirth') {
      setBlur((i) => {
        return { ...i, date: true };
      });
    }
  };

  const nextTab = () => {
    setTabIndex(1);
  };
  const prevTab = () => {
    setTabIndex(0);
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  const [signupInfo, setsignupInfo] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    hasAgreed: false,
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (e.target.type === 'checkbox') {
      const { checked } = e.target;
      return setsignupInfo((inputDetails) => {
        return { ...inputDetails, [name]: checked };
      });
    }
    setsignupInfo((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };
  const submitSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    signupAction(signupInfo)
      .then((response) => {
        setError(response);
        if (response.message.includes('firstName')) {
          prevTab();
          setErrorType({ type: 'error', field: 'firstName' });
        }
        if (response.message.includes('lastName')) {
          prevTab();
          setErrorType({ type: 'error', field: 'lastName' });
        }
        if (response.message.includes('gender')) {
          prevTab();
          setErrorType({ type: 'error', field: 'gender' });
        }
        if (response.message.includes('dateOfBirth')) {
          prevTab();
          setErrorType({ type: 'error', field: 'dateOfBirth' });
          setError({
            message:
              'You are not old enough to use Lendie services (21 years or older)',
          });
        }
        if (response.message.includes('Email')) {
          setErrorType({ type: 'info', field: 'email' });
        }
        if (response.message.includes('email')) {
          setErrorType({ type: 'error', field: 'email' });
        }
        if (response.message.includes('phoneNumber')) {
          setErrorType({ type: 'error', field: 'phoneNumber' });
        }
        if (response.message.includes('password')) {
          setErrorType({ type: 'error', field: 'password' });
        }
        if (response.message.includes('confirmPassword')) {
          setErrorType({ type: 'error', field: 'confirmPassword' });
          setError({ message: 'Password mismatch' });
        }
        if (response.message.includes('hasAgreed')) {
          setErrorType({ type: 'error', field: 'hasAgreed' });
          setError({ message: 'You have to accept the Terms & Condition' });
        }
        setLoading(false);
        if (response.message === 'success') {
          history.push('/email-confirmation');
        }
        console.log(error);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <Box w={['full', 'sm']}>
      <Stack spacing={6} mt={4}>
        <Box>
          <Heading color="brand.300" fontSize="30px">
            Create your free Lendie account
          </Heading>
          <Text fontSize="12px" color="#6B7588" pt="5px">
            Sign up below and take advantage of our quick and easy loan offers
          </Text>
        </Box>
        <Tabs
          isFitted
          variant="enclosed"
          colorScheme="brand.300"
          align="center"
          size="sm"
          index={tabIndex}
          onChange={handleTabsChange}
        >
          <TabList>
            <Tab _selected={{ color: 'white', bg: 'brand.300' }}>
              <Text fontSize="12px">Personal Info</Text>
            </Tab>
            <Tab
              _selected={{ color: 'white', bg: 'brand.300' }}
              isDisabled={!validateForm()}
            >
              <Text fontSize="12px">Contact Info</Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FormControl>
                <FormLabel color="#8F90A6" fontSize="sm">
                  First Name
                </FormLabel>
                <Input
                  isInvalid={errorType.emailInv}
                  onFocus={() => setErrorType({ emailInv: false })}
                  borderRadius="md"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleInput}
                  value={signupInfo.firstName}
                />{' '}
                <Flex
                  mt="7px"
                  fontSize="10px"
                  color={
                    errorType.type === 'error' ? 'brand.error' : 'brand.info'
                  }
                  align="center"
                >
                  {errorType.field === 'firstName' && (
                    <>
                      {errorType.type === 'error' ? (
                        <WarningIcon mr={2} />
                      ) : (
                        <InfoIcon mr={2} />
                      )}
                      {error.message}
                    </>
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel color="#8F90A6" fontSize="sm">
                  Last Name
                </FormLabel>
                <Input
                  autoComplete="none"
                  isInvalid={errorType.emailInv}
                  onFocus={() => setErrorType({ emailInv: false })}
                  borderRadius="md"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleInput}
                  value={signupInfo.lastName}
                />{' '}
                <Flex
                  mt="7px"
                  fontSize="10px"
                  color={
                    errorType.type === 'error' ? 'brand.error' : 'brand.info'
                  }
                  align="center"
                >
                  {errorType.field === 'lastName' && (
                    <>
                      {errorType.type === 'error' ? (
                        <WarningIcon mr={2} />
                      ) : (
                        <InfoIcon mr={2} />
                      )}
                      {error.message}
                    </>
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel color="#8F90A6" fontSize="sm">
                  Gender
                </FormLabel>
                <Select
                  onFocusCapture={blurColor}
                  color={blur.gender ? '' : '#8F90A6'}
                  isInvalid={errorType.emailInv}
                  onFocus={() => setErrorType({ emailInv: false })}
                  borderRadius="md"
                  placeholder="Gender"
                  name="gender"
                  onChange={handleInput}
                  value={signupInfo.gender}
                  // p="30px"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="P/N">Prefer not to say</option>
                </Select>
                <Flex
                  mt="7px"
                  fontSize="10px"
                  color={
                    errorType.type === 'error' ? 'brand.error' : 'brand.info'
                  }
                  align="center"
                >
                  {errorType.field === 'gender' && (
                    <>
                      {errorType.type === 'error' ? (
                        <WarningIcon mr={2} />
                      ) : (
                        <InfoIcon mr={2} />
                      )}
                      {error.message}
                    </>
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel color="#8F90A6" fontSize="sm">
                  Date of Birth
                </FormLabel>
                <Input
                  onFocusCapture={blurColor}
                  color={blur.date ? '' : '#8F90A6'}
                  isInvalid={errorType.emailInv}
                  onFocus={() => setErrorType({ emailInv: false })}
                  borderRadius="md"
                  type="date"
                  placeholder="Date of Birth"
                  _placeholder={{ color: '#8F90A6' }}
                  name="dateOfBirth"
                  onChange={handleInput}
                  value={signupInfo.dateOfBirth}
                />{' '}
                <Flex
                  mt="7px"
                  fontSize="10px"
                  color={
                    errorType.type === 'error' ? 'brand.error' : 'brand.info'
                  }
                  align="center"
                >
                  {errorType.field === 'dateOfBirth' && (
                    <>
                      {errorType.type === 'error' ? (
                        <WarningIcon mr={2} />
                      ) : (
                        <InfoIcon mr={2} />
                      )}
                      {error.message}
                    </>
                  )}
                </Flex>
              </FormControl>
              <Flex mt={4}>
                <Button
                  w={['full', '60%']}
                  padding="14px 32px"
                  alignSelf={{ sm: 'center', md: 'auto' }}
                  onClick={nextTab}
                  disabled={!validateForm()}
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
                >
                  Next
                </Button>
              </Flex>
            </TabPanel>
            <TabPanel>
              <FormControl>
                <FormLabel color="#8F90A6" fontSize="sm">
                  Phone Number
                </FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+234" />
                  <Input
                    isInvalid={errorType.emailInv}
                    onFocus={() => setErrorType({ emailInv: false })}
                    borderRadius="md"
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    onChange={handleInput}
                    value={signupInfo.phoneNumber}
                  />
                </InputGroup>

                <Flex
                  mt="7px"
                  fontSize="10px"
                  color={
                    errorType.type === 'error' ? 'brand.error' : 'brand.info'
                  }
                  align="center"
                >
                  {errorType.field === 'phoneNumber' && (
                    <>
                      {errorType.type === 'error' ? (
                        <WarningIcon mr={2} />
                      ) : (
                        <InfoIcon mr={2} />
                      )}
                      {error.message}
                    </>
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel color="#8F90A6" fontSize="sm">
                  Email
                </FormLabel>
                <Input
                  autoComplete="none"
                  isInvalid={errorType.emailInv}
                  onFocus={() => setErrorType({ emailInv: false })}
                  borderRadius="md"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleInput}
                  value={signupInfo.email}
                />{' '}
                <Flex
                  mt="7px"
                  fontSize="10px"
                  color={
                    errorType.type === 'error' ? 'brand.error' : 'brand.info'
                  }
                  align="center"
                >
                  {errorType.field === 'email' && (
                    <>
                      {errorType.type === 'error' ? (
                        <WarningIcon mr={2} />
                      ) : (
                        <InfoIcon mr={2} />
                      )}
                      {error.message}
                    </>
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel color="#8F90A6" fontSize="sm">
                  Password:
                </FormLabel>
                <InputGroup>
                  <Input
                    isInvalid={errorType.isInvalid}
                    justifyContent="center"
                    borderRadius="md"
                    type={show ? 'text' : 'password'}
                    placeholder="* * * * * * * *"
                    name="password"
                    onChange={handleInput}
                    onFocus={() => setErrorType({ isInvalid: false })}
                    value={signupInfo.password}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      onClick={handleClick}
                      variant="unstyled"
                      fontSize="xs"
                    >
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Flex
                  mt="7px"
                  fontSize="10px"
                  color={
                    errorType.type === 'error' ? 'brand.error' : 'brand.info'
                  }
                  align="center"
                >
                  {errorType.field === 'password' && (
                    <>
                      {errorType.type === 'error' ? (
                        <WarningIcon mr={2} />
                      ) : (
                        <InfoIcon mr={2} />
                      )}
                      {error.message}
                    </>
                  )}
                </Flex>
              </FormControl>
              <FormControl>
                <FormLabel color="#8F90A6" fontSize="sm">
                  Confirm password:
                </FormLabel>
                <InputGroup>
                  <Input
                    isInvalid={errorType.isInvalid}
                    justifyContent="center"
                    borderRadius="md"
                    type={show ? 'text' : 'password'}
                    placeholder="* * * * * * * *"
                    name="confirmPassword"
                    onChange={handleInput}
                    onFocus={() => setErrorType({ isInvalid: false })}
                    value={signupInfo.confirmPassword}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      onClick={handleClick}
                      variant="unstyled"
                      fontSize="xs"
                    >
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Flex
                  mt="7px"
                  fontSize="10px"
                  color={
                    errorType.type === 'error' ? 'brand.error' : 'brand.info'
                  }
                  align="center"
                >
                  {errorType.field === 'confirmPassword' && (
                    <>
                      {errorType.type === 'error' ? (
                        <WarningIcon mr={2} />
                      ) : (
                        <InfoIcon mr={2} />
                      )}
                      {error.message}
                    </>
                  )}
                </Flex>
              </FormControl>{' '}
              <FormControl>
                <CheckboxGroup>
                  <Flex mt="2">
                    <Checkbox
                      borderColor="gray.500"
                      name="hasAgreed"
                      checked={signupInfo.hasAgreed}
                      onChange={handleInput}
                    />
                    <FormLabel color="#8F90A6" ml="10px" my="0" fontSize="sm">
                      I agree to Terms & Conditions
                    </FormLabel>
                  </Flex>
                </CheckboxGroup>{' '}
                <Flex
                  mt="7px"
                  fontSize="10px"
                  color={
                    errorType.type === 'error' ? 'brand.error' : 'brand.info'
                  }
                  align="center"
                >
                  {errorType.field === 'hasAgreed' && (
                    <>
                      {errorType.type === 'error' ? (
                        <WarningIcon mr={2} />
                      ) : (
                        <InfoIcon mr={2} />
                      )}
                      {error.message}
                    </>
                  )}
                </Flex>
              </FormControl>
              <Flex pt={4}>
                <IconButton icon={<ArrowBackIcon />} mr={4} onClick={prevTab} />
                <Button
                  w={['full', '60%']}
                  padding="14px 32px"
                  alignSelf={{ sm: 'center', md: 'auto' }}
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
                  onClick={submitSignup}
                  isLoading={loading}
                >
                  Sign up
                </Button>
              </Flex>
            </TabPanel>
          </TabPanels>
          <Flex ml={5} color="brand.300" fontSize="13px">
            <Text>Already have an account?</Text>
            <Text as="a" href="/login" textDecoration="underline" ml="5px">
              Login
            </Text>
          </Flex>
        </Tabs>
      </Stack>
    </Box>
  );
};

export default SignupForm;
