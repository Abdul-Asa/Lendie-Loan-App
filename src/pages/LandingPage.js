// import {useState} from 'react';
import { VStack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { getUser } from '../utils/LocalStorage';
import TopNav from '../components/entry-pages/TopNav';
import HeroSection from '../components/entry-pages/HeroSection';
import About from '../components/About';
import WhyLendie from '../components/WhyLendie';
import Footer from '../components/Footer';

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
      <About pb={160} h="100vh" />
      <WhyLendie />
      <Footer />
    </VStack>
  );
};

export default LandingPage;
