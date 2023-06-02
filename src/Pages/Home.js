import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import BottomNav from '../components/bottomnav';
import SearchBarHome from '../components/searchbar_home';
import Middlecardshome from '../components/Middlecards_home';

const Home = () => {


  return (
    <Box>
      <Navbar />
    <SearchBarHome />
    <Middlecardshome />
      <BottomNav />
    </Box>
  );
};

export default Home;
