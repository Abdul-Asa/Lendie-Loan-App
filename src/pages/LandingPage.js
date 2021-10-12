// import {useState} from 'react';
import { Heading, Icon, Flex, VStack, Button, } from '@chakra-ui/react';
import { IoIosHourglass } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { getUser } from '../utils/LocalStorage';
import TopNav from '../components/entry-pages/TopNav';
import HeroSection from '../components/entry-pages/HeroSection';
import About from '../components/About';

const LandingPage = () => {
  let history = useHistory();
  const user = getUser();
  if (user) {
    history.push('/user/home');
  }
  return (
    <VStack bg='#fff' h='100%'>
      <TopNav />
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
