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
import { getUser, setUser } from '../../utils/LocalStorage';
import { loginAction } from '../../utils/Actions';

const LoginForm = () => {
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
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginInfo((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };
  const submitLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    loginAction(loginInfo)
      .then((response) => {
        setError(response);
        if (response.message === 'Email is not found') {
          setErrorType({ type: 'info', emailInv: false });
          setError({
            message: 'This email is not registered. You should sign up first',
          });
        } else {
          setErrorType({ type: 'error', isInvalid: true });
        }
        if (response.message.includes('email')) {
          setErrorType({ type: 'info', emailInv: true });
        }
        if (response.message.includes('Pending')) {
          setErrorType({ type: 'info', emailInv: false });
        }

        setLoading(false);
        console.log(error);
        if (response.message === 'success') {
          setUser(response);
          history.push('user/home');
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
            Please Input your details below
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
            value={loginInfo.email}
          />{' '}
          <Flex
            mt="7px"
            fontSize="10px"
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
              value={loginInfo.password}
            />
            <InputRightElement width="4.5rem">
              <Button onClick={handleClick} variant="unstyled" fontSize="xs">
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Flex justify="space-between" mt="7px">
            <Flex color="brand.error" align="center" fontSize="10px">
              {errorType.type === 'error' && (
                <>
                  <WarningIcon mr={2} />
                  {error.message}
                </>
              )}{' '}
            </Flex>

            <Text
              as="a"
              href="/forgot-password"
              fontSize="12px"
              color="brand.300"
            >
              Forgot password?
            </Text>
          </Flex>
        </FormControl>
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
          onClick={submitLogin}
          isLoading={loading}
        >
          Login
        </Button>{' '}
        {/* {alert && (
          <Alert maxW="500px" isTruncated overflowX="auto">
            {error.message}
          </Alert>
        )} */}
        <Flex color="brand.300" fontSize="13px">
          <Text>Don't have an account?</Text>
          <Text as="a" href="/signup" textDecoration="underline" ml="5px">
            Sign up
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default LoginForm;
