import { useState } from 'react';
import {
  Heading,
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Alert,
  FormControl,
  FormLabel,
  AlertDescription,
  AlertIcon,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { WarningIcon, ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
import { getUser, setId } from '../../utils/LocalStorage';
import { checkForgotAction, resetPasswordAction } from '../../utils/Actions';

const LoginForm = () => {
  let history = useHistory();
  const user = getUser();
  if (user) {
    history.push('/user/home');
  }

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [resetMode, setReset] = useState(false);
  const [blur, setBlur] = useState({ date: false });
  const [error, setError] = useState({ message: '' });
  const [errorType, setErrorType] = useState({
    field: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [forgotInfo, setForgotInfo] = useState({
    email: '',
    dateOfBirth: '',
  });
  const [resetInfo, setResetInfo] = useState({
    password: '',
    resetPassword: '',
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForgotInfo((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };
  const handleResetInput = (e) => {
    const { name, value } = e.target;
    setResetInfo((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };
  const checkForgot = () => {
    setLoading(true);
    checkForgotAction(forgotInfo)
      .then((response) => {
        setError(response);
        setLoading(false);
        console.log(error);
        if (response.message === 'success') {
          setReset(true);
          setId(response);
          setError({ message: '' });
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log(error);
      });
  };
  const resetPassword = () => {
    setLoading(true);
    resetPasswordAction(resetInfo)
      .then((response) => {
        setError(response);
        setLoading(false);
        console.log(error);
        if (response.message.includes('password')) {
          setErrorType({ type: 'error', field: 'password' });
        }
        if (response.message.includes('ref')) {
          setErrorType({ type: 'error', field: 'resetPassword' });
          setError({ message: 'Password mismatch' });
        }
        if (response.message === 'success') {
          setReset(true);
          setErrorType({ field: '' });
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log(error);
      });
  };
  const blurColor = (e) => {
    const { name } = e.target;
    if (name === 'dateOfBirth') {
      setBlur((i) => {
        return { ...i, date: true };
      });
    }
  };
  return (
    <Box w={['full', 'sm']}>
      <Stack spacing={6} mt={10}>
        <Flex>
          <Heading color="brand.300" fontSize="18px">
            Forgot Password
          </Heading>
        </Flex>
        {resetMode ? (
          <FormControl>
            <FormLabel color="#8F90A6">Enter a new password</FormLabel>
            <InputGroup>
              <Input
                isInvalid={errorType.field === 'password'}
                onFocus={() => setErrorType({ emailInv: false })}
                p="20px 32px"
                borderRadius="md"
                type={show ? 'text' : 'password'}
                placeholder="New password"
                name="password"
                onChange={handleResetInput}
                value={resetInfo.password}
              />
              <InputRightElement width="4.5rem">
                <Button onClick={handleClick} variant="unstyled" fontSize="xs">
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Flex mt="7px" fontSize="10px" color="brand.error" align="center">
              {errorType.field === 'password' && (
                <>
                  <WarningIcon mr={2} />
                  {error.message}
                </>
              )}{' '}
            </Flex>
            <FormLabel color="#8F90A6">Confirm new password</FormLabel>
            <InputGroup>
              <Input
                isInvalid={errorType.field === 'resetPassword'}
                onFocus={() => setErrorType({ emailInv: false })}
                p="20px 32px"
                borderRadius="md"
                type={show ? 'text' : 'password'}
                placeholder="Confirm password"
                name="resetPassword"
                onChange={handleResetInput}
                value={resetInfo.resetPassword}
              />
              <InputRightElement width="4.5rem">
                <Button onClick={handleClick} variant="unstyled" fontSize="xs">
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Flex color="brand.error" align="center" fontSize="10px">
              {errorType.field === 'resetPassword' && (
                <>
                  <WarningIcon mr={2} />
                  {error.message}
                </>
              )}
            </Flex>
          </FormControl>
        ) : (
          <FormControl>
            <FormLabel color="#8F90A6" fontSize="12px">
              Please enter the email address and date of birth associated with
              this account. If it matches the information in our database,
              you'll be able to reset your password
            </FormLabel>
            <Input
              isInvalid={errorType.emailInv}
              onFocus={() => setErrorType({ emailInv: false })}
              p="20px 32px"
              borderRadius="md"
              type="email"
              placeholder="johndoe@gmail.com"
              name="email"
              onChange={handleInput}
              value={forgotInfo.email}
              mb={4}
            />
            <Input
              onFocusCapture={blurColor}
              color={blur.date ? '' : '#8F90A6'}
              isInvalid={errorType.emailInv}
              onFocus={() => setErrorType({ emailInv: false })}
              borderRadius="md"
              type="date"
              value={forgotInfo.dateOfBirth}
              placeholder="Date of Birth"
              name="dateOfBirth"
              onChange={handleInput}
            />
          </FormControl>
        )}
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
          isLoading={loading}
          onClick={() => {
            if (!resetMode) {
              checkForgot();
            } else {
              resetPassword();
            }
          }}
        >
          Reset Password
        </Button>
        {!errorType.field && error.message && (
          <Alert
            fontSize="14px"
            status={error.message === 'success' ? 'success' : 'error'}
          >
            <AlertIcon />
            <AlertDescription>
              {error.message}
              {error.message === 'success' && (
                <Text as="a" href="/login" textDecoration="underline" ml="5px">
                  Go to login
                </Text>
              )}
            </AlertDescription>
          </Alert>
        )}
        <Flex color="brand.300" fontSize="13px">
          <Text>Still can't resolve the issue?</Text>
          <Text as="a" href="/#ContactUs" textDecoration="underline" ml="5px">
            Contact us
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default LoginForm;
