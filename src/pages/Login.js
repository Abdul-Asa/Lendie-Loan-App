import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import Navbar from '../components/Navbar';
import { Box } from '@chakra-ui/react';

const Login = () => {
  return (
    <Box>
      <Navbar />
      <LoginForm />
    </Box>
  );
};

export default Login;
