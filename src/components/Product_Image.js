import React from 'react';
import { Image, HStack } from '@chakra-ui/react';

const ProductImage = () => {
  return (
    <>
      <Image src="lady.png" alt="Product Image" width={375} height={430} />

      {/* Logos */}
      <HStack position="absolute" top={0} left={0} right={0} spacing={0} justifyContent="space-between" ml={2} mt={2} mr={2}>
        {/* Logo Top Left */}
        <Image src="arrow.png" alt="Logo 1" width={35} height={35} />
        {/* Logo Top Right */}
        <Image src="cart1.png" alt="Logo 2" width={30} height={30} />
      </HStack>

      {/* Logo Bottom Right */}
      <Image src="love.png" alt="Logo 3" position="absolute" bottom={2} right={2} width={30} height={30} />

      {/* Logo Bottom Center */}
      <Image src="dots.png" alt="Logo 4" position="absolute" bottom={5} left="50%" transform="translateX(-50%)" width={49} height={15} />
    </>
  );
};

export default ProductImage;
