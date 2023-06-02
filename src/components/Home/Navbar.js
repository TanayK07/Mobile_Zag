import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import '@fontsource/poppins';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
    >
      <Box>
        <Image src="/menu.png" alt="Left Image" w={50} />
      </Box>
      <Box>
        <Image src="/iconman.png" alt="Right Image" w={70}/>
      </Box>
    </Flex>
  );
};

export default Navbar;
