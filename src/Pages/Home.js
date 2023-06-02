import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/Home/Navbar';
import SearchBarHome from '../components/Home/searchbar_home';
import Middlecardshome from '../components/Home/Middlecards_home';
import BottomNav from '../components/Home/bottomnav';
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
