// import {useState} from 'react';
import {
  Heading,
  Center,
  Icon,
  Flex,
  Stack,
  Button,
  Text,
} from '@chakra-ui/react';
import { IoIosHourglass } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { getUser } from '../utils/LocalStorage';

const LandingPage = () => {
  let history = useHistory();
  const user = getUser();
  if (user) {
    history.push('/user/home');
  }
  return (
    <Center h="90vh">
      <Stack>
        <Text color="brand.300" fontSize="3xl">
          Test
        </Text>
        <Flex align="center">
          <Icon as={IoIosHourglass} mr={2} boxSize={8} />
          <Heading> Lendie App </Heading>
        </Flex>
        <Flex justify="space-around" pt={4}>
          <Button size="lg" colorScheme="teal" as="a" href="/signup">
            Signup
          </Button>
          <Button size="lg" colorScheme="teal" as="a" href="/login" ml={4}>
            Login
          </Button>
        </Flex>
      </Stack>
    </Center>
  );
};

export default LandingPage;
