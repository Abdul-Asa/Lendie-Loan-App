import React from 'react';
import ForgotForm from '../components/forms/ForgotForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BroIcon from '../components/icons/bro.svg';
import { Box, Flex, Image } from '@chakra-ui/react';

const ForgotPassword = () => {
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
        <ForgotForm />
        {/* <Box>Hello, I am under the water</Box> */}
      </Flex>
      <Footer />
    </Box>
  );
};

export default ForgotPassword;
