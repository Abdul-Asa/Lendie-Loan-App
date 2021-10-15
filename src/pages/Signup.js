import React from 'react';
import SignupForm from '../components/forms/SignupForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BroIcon from '../components/icons/bro.svg';
import { Box, Flex, Image } from '@chakra-ui/react';

const Signup = () => {
  return (
    <Box>
      <Navbar />
      <Flex
        py={[4, 10, 16]}
        direction={{ base: 'column-reverse', md: 'row' }}
        mx={[4, 10, 6, '15%']}
        align="center"
        justify="space-between"
      >
        <Image src={BroIcon} boxSize="sm" mt={{ base: 10, md: '0' }} />
        <SignupForm />
      </Flex>
      <Footer />
    </Box>
  );
};

export default Signup;
