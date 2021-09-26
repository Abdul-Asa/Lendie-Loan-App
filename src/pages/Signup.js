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
import { getUser } from '../utils/LocalStorage';
import { useHistory } from 'react-router-dom';
import { signupAction } from '../utils/Actions';

const Signup = () => {
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
        showAlert(true);
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
        showAlert(true);
        console.log(error);
      });
  };

  return (
    <Center h="90vh">
      <Stack spacing="10px">
        <Flex align="center" my={6}>
          <Heading> Signup </Heading>
        </Flex>
        <FormControl>
          <FormLabel>First Name:</FormLabel>
          <Input
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={signupInfo.firstName}
            onChange={handleInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel>LastName:</FormLabel>
          <Input
            type="text"
            placeholder="Enter last name"
            name="lastName"
            value={signupInfo.lastName}
            onChange={handleInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={signupInfo.email}
            onChange={handleInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password:</FormLabel>
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              name="password"
              value={signupInfo.password}
              onChange={handleInput}
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
          onClick={submitSignup}
          isLoading={loading}
        >
          Submit
        </Button>
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

export default Signup;
