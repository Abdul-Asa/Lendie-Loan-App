// import {useState} from 'react';
import { Heading, Center, Icon, Flex, Stack, Text } from '@chakra-ui/react';
// import { useHistory } from 'react-router-dom';
import { IoIosHourglass } from 'react-icons/io';
// import { removeUser } from '../utils/LocalStorage';
const EmailConfirmation = () => {
  return (
    <Center h="90vh">
      <Stack>
        <Flex align="center">
          <Icon as={IoIosHourglass} mr={2} boxSize={8} />
          <Heading> Email Confirmation </Heading>
        </Flex>
        <Text>Check your email</Text>
        <Center>
          <Text as="a" href="/login">
            Go to Login
          </Text>
        </Center>
      </Stack>
    </Center>
  );
};

export default EmailConfirmation;
