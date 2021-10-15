import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BroIcon from '../components/icons/bro.svg';
import { Box, Flex, Image } from '@chakra-ui/react';

const Login = () => {
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
        <LoginForm />
      </Flex>
      <Footer />
    </Box>
  );
};

export default Login;
