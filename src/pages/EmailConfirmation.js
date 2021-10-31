// import {useState} from 'react';
import { Heading, Center, Stack, Text, Image } from '@chakra-ui/react';
// import { useHistory } from 'react-router-dom';
import check from '../components/icons/success.svg';
// import { removeUser } from '../utils/LocalStorage';
const EmailConfirmation = () => {
  return (
    <Center h="80vh">
      <Stack align="center" p={2}>
        <Image src={check} boxSize="140px" />
        <Heading> Successful </Heading>
        <Text textAlign={['center', 'start']}>
          We sent a mail to the email account used in registration.
          <br /> Kindly click the link in the email to activate your account.
        </Text>
        <Text textAlign="center" fontSize="10px">
          Tip: Check your spam folder if you can't find the email
        </Text>
        <Text as="a" href="/#ContactUs" fontSize="12px" color="brand.300">
          Still can't find it?{' '}
        </Text>
      </Stack>
    </Center>
  );
};

export default EmailConfirmation;
