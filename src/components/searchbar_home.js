import React from 'react';
import { Input, InputGroup, InputLeftElement, InputRightAddon, Image, VStack, Box, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';



const SearchBarHome = () => {
    return (
<>
<Box w={180} h={70} flexDirection="column" ml={5} mb={13} p={2}>
<Text fontSize={25} fontFamily={"PoppinsBold"}>Welcome,</Text>
<Text fontFamily={"PoppinsSemi-Bold"} color={"#666666"}style={{ display: 'inline-block' }}>Our Fashions App</Text>
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
</>

    );
};

export default SearchBarHome;