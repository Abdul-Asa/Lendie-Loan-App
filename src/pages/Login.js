import { useState } from 'react';
import {
  Heading,
  Center,
  Flex,
  Stack,
  Text,
  Button,
  Alert,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { getUser, setUser } from '../utils/LocalStorage';
import { useHistory } from 'react-router-dom';

import { loginAction } from '../utils/Actions';

const Login = () => {
  let history = useHistory();
  const user = getUser();
  if (user) {
    history.push('/user/home');
  }
  const [error, setError] = useState({ message: '' });
  const [alert, showAlert] = useState(false);
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
        setLoading(false);
        showAlert(true);
        console.log(error);
        if (response.message === 'success') {
          setUser(response);
          history.push('user/home');
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        showAlert(true);
        console.log(error);
      });
  };

  return (
    <Center h="90vh" p={2}>
      <Stack spacing={6}>
        <Flex align="center" my={6}>
          <Heading> Login </Heading>
        </Flex>
        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInput}
            value={loginInfo.email}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password:</FormLabel>
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              name="password"
              onChange={handleInput}
              value={loginInfo.password}
            />
            <InputRightElement width="4.5rem">
              <Button onClick={handleClick} variant="unstyled" fontSize="xs">
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          size="lg"
          colorScheme="teal"
          onClick={submitLogin}
          isLoading={loading}
        >
          Submit
        </Button>{' '}
        {alert && (
          <Alert maxW="500px" isTruncated overflowX="auto">
            {error.message}
          </Alert>
        )}
        <Text as="a" href="/" textAlign="center" textDecoration="underline">
          Home
        </Text>
      </Stack>
    </Center>
  );
};

export default Login;
