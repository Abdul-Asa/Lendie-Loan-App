// import {useState} from 'react';
import { Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { getUser } from '../utils/LocalStorage';
import Navbar from '../components/Navbar';
import TeamInfo from '../components/landing page/TeamInfo';
import Footer from '../components/Footer';

const Team = () => {
  let history = useHistory();
  const user = getUser();
  if (user) {
    history.push('/user/home');
  }
  return (
    <Box minh="100vh">
      <Navbar />
      <TeamInfo />
      <Footer />
    </Box>
  );
};

export default Team;
