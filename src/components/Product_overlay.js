import React from "react";
import { Box, Flex, Image, HStack } from "@chakra-ui/react";
import "@fontsource/poppins";

const ProductOverlay = () => { 
    return (

<Flex justifyContent="center" alignItems="center" h={430}>
<Box position="relative" width={375} height={430} bg="gray.200">
  {/* Product Image */}
  <Image src="lady.png" alt="Product Image" width={375} height={430} />
  
  {/* Logos */}
  <HStack
    position="absolute"
    top={0}
    left={0}
    right={0}
    spacing={0}
    justifyContent="space-between"
    ml={25}
    mt={10}
    mr={25}
  >
    {/* Logo Top Left */}
    <Image src="arrow.png" alt="Logo 1" width={35} height={35} />
    {/* Logo Top Right */}
    <Image src="cart1.png" alt="Logo 2" width={30} height={30} />
  </HStack>
  
  {/* Logo Bottom Right */}
  <Image src="love.png" alt="Logo 3"     mb={5}       mr={25}
 position="absolute" bottom={0} right={0} width={30} height={30} />
 
  {/* Logo Bottom Center */}
  <Image
    src="dots.png"
    alt="Logo 4"
    position="absolute"
    bottom={5}
    left="50%"
    transform="translateX(-50%)"
    width={49}
    height={15}
  />

  {/* Box Shape */}

</Box>
</Flex>
    );
};
export default ProductOverlay;