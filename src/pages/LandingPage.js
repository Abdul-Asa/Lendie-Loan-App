// import {useState} from 'react';
import {
  Heading,
  // Center,
  Icon,
  Flex,
  VStack,
  // Stack,
  Button,
  // Text,
} from '@chakra-ui/react';
import { IoIosHourglass } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { getUser } from '../utils/LocalStorage';
import Navbar from '../components/Navbar';
import HeroSection from '../components/landing page/HeroSection';
import About from '../components/landing page/About';

const LandingPage = () => {
  let history = useHistory();
  const user = getUser();
  if (user) {
    history.push('/user/home');
  }
  return (
    <VStack bg="#fff" h="100%">
      <Navbar />
      <HeroSection />
      <About />
      <Flex>
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
    </VStack>
  );
};

export default LandingPage;
