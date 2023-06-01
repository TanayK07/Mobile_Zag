import React from 'react';
import { Box, Image, Text, VStack, InputGroup, InputLeftElement, Input, InputRightAddon, HStack, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar';
import BottomNav from '../components/bottomnav';

const Home = () => {
  return (
    <Box>
      <Navbar />

      
      <Box w={180} h={70} flexDirection="column" ml={5} mb={13} p={2}>
        <Text fontSize={25}>Welcome,</Text>
        <Text style={{ display: 'inline-block' }}>Our Fashion App</Text>
      </Box>

      <VStack spacing={2} p={2} alignItems="center">
        <InputGroup w={280}>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input placeholder="Search" />
          <InputRightAddon bg="white" p={1}>
            <Image src="lelvel.png" alt="Logo" w={50} ml={5} />
          </InputRightAddon>
        </InputGroup>
      </VStack>

      <Flex p={4} overflowX="auto">
        <HStack spacing={4}>
          <Box w="260px" h="160px" bg="gray.200" borderRadius="md" />
          <Box w="260px" h="160px" bg="gray.200" borderRadius="md" />
          <Box w="260px" h="160px" bg="gray.200" borderRadius="md" />
          {/* Add more card components here */}
        </HStack>
      </Flex>

      <Flex justify="space-between" px={4}>
        <Text>New Arrivals</Text>
        <Text>View All</Text>
      </Flex>

      <Flex p={4} overflowX="auto">
        <HStack spacing={4}>
          <Box w="155px" h="240px" bg="gray.200" borderRadius="md" />
          <Box w="155px" h="240px" bg="gray.200" borderRadius="md" />
          <Box w="155px" h="240px" bg="gray.200" borderRadius="md" />
          {/* Add more card components here */}
        </HStack>
      </Flex>

     <BottomNav />
    </Box>
  );
};

export default Home;
