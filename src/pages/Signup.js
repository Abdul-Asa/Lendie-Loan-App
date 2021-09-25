import { useState } from 'react';
import {
  Heading,
  Center,
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
const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Center h="90vh">
      <Stack spacing="10px">
        <Flex align="center" my={6}>
          <Heading> Signup </Heading>
        </Flex>
        <FormControl>
          <FormLabel>First Name:</FormLabel>
          <Input type="text" placeholder="Enter first name" name="firstName" />
        </FormControl>
        <FormControl>
          <FormLabel>LastName:</FormLabel>
          <Input type="text" placeholder="Enter last name" name="lastName" />
        </FormControl>
        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input type="email" placeholder="Enter Email" name="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password:</FormLabel>
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              name="password"
            />
            <InputRightElement width="4.5rem">
              <Button onClick={handleClick} variant="unstyled" fontSize="xs">
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button size="lg" colorScheme="teal">
          Submit
        </Button>{' '}
        <Text as="a" href="/" textAlign="center" textDecoration="underline">
          Home
        </Text>
      </Stack>
    </Center>
  );
};

export default Signup;
