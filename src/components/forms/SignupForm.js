import { useState } from 'react';
import {
  Heading,
  Box,
  Flex,
  Stack,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { WarningIcon, InfoIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
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
    isInvalid: false,
    emailInv: false,
  });
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [signupInfo, setsignupInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    hasAgreed: true,
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
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
        setLoading(false);
        console.log(error);
        if (response.message === 'success') {
          setError({
            message:
              'A confirmation email has been sent to your account. If you cannot find the email, copy and paste this link in your browser search bar: ' +
              response.link,
          });
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <Box w={['full', 'sm']}>
      <Stack spacing={6} mt={10}>
        <Flex>
          <Heading color="brand.300" fontSize="18px">
            Create your free Lendie account
          </Heading>
        </Flex>
        <FormControl>
          <FormLabel color="#8F90A6">Email:</FormLabel>
          <Input
            isInvalid={errorType.emailInv}
            onFocus={() => setErrorType({ emailInv: false })}
            p="20px 32px"
            borderRadius="md"
            type="email"
            placeholder="johndoe@gmail.com"
            name="email"
            onChange={handleInput}
            value={signupInfo.email}
          />{' '}
          <Flex
            mt="7px"
            fontSize="12px"
            color={errorType.emailInv ? 'brand.error' : 'brand.info'}
            align="center"
          >
            {errorType.type === 'info' && (
              <>
                {errorType.emailInv ? (
                  <WarningIcon mr={2} />
                ) : (
                  <InfoIcon mr={2} />
                )}
                {error.message}
              </>
            )}{' '}
          </Flex>
        </FormControl>
        <FormControl>
          <FormLabel color="#8F90A6">Password:</FormLabel>
          <InputGroup>
            <Input
              isInvalid={errorType.isInvalid}
              justifyContent="center"
              p="20px 32px"
              borderRadius="md"
              type={show ? 'text' : 'password'}
              placeholder="* * * * * * * *"
              name="password"
              onChange={handleInput}
              onFocus={() => setErrorType({ isInvalid: false })}
              value={signupInfo.password}
            />
            <InputRightElement width="4.5rem">
              <Button onClick={handleClick} variant="unstyled" fontSize="xs">
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Flex justify="space-between" fontSize="12px" mt="7px">
            <Flex color="brand.error" align="center">
              {errorType.type === 'error' && (
                <>
                  <WarningIcon mr={2} />
                  {error.message}
                </>
              )}{' '}
            </Flex>

            <Text as="a" href="/signup" color="brand.300">
              Forgot password?
            </Text>
          </Flex>
        </FormControl>
        <Button
          w={['full', '60%']}
          padding="14px 32px"
          alignSelf={{ sm: 'center', md: 'auto' }}
          color="whiteAlpha.900"
          bgColor="brand.300"
          onClick={submitSignup}
          isLoading={loading}
        >
          Signup
        </Button>{' '}
        {/* {alert && (
          <Alert maxW="500px" isTruncated overflowX="auto">
            {error.message}
          </Alert>
        )} */}
        <Flex color="brand.300" fontSize="13px">
          <Text>Have an account already?</Text>
          <Text as="a" href="/login" textDecoration="underline" ml="5px">
            Login
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default SignupForm;
