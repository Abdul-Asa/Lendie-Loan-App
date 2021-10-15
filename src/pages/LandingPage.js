// import {useState} from 'react';
import { Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { getUser } from '../utils/LocalStorage';
import Navbar from '../components/Navbar';
import HeroSection from '../components/landing page/HeroSection';
import About from '../components/landing page/About';
import WhyLendie from '../components/landing page/WhyLendie';
import Footer from '../components/Footer';
import FAQs from '../components/landing page/FAQs';
import TalkToUs from '../components/landing page/TalkToUs';

const LandingPage = () => {
  let history = useHistory();
  const user = getUser();
  if (user) {
    history.push('/user/home');
  }
  return (
    <Box minh="100vh">
      <Navbar />
      <HeroSection />
      <About />
      <WhyLendie />
      <FAQs />
      <TalkToUs />
      <Footer />
    </Box>
  );
};

export default LandingPage;
