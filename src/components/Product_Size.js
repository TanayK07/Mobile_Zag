import React, { useState } from 'react';
import { Box, Button,Text, HStack } from '@chakra-ui/react';


const ProductSize = () => {

const [selectedSize, setSelectedSize] = useState(null);

const CircleButton = ({ children, onClick, selected }) => (
    <Button
      size="sm"
      p={0}
      width={8}
      height={8}
      borderRadius="50%"
      bg={selected ? 'black' : 'transparent'}
      color={selected ? 'white' : 'gray'}
      onClick={onClick}
    >
      {children}
    </Button>
  );
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
<Box>
<Text ml={5} mt={5}>
  Size
</Text>
<HStack spacing={2} mt={5}ml={5}>
  <CircleButton onClick={() => handleSizeClick('S')} selected={selectedSize === 'S'}>
    S
  </CircleButton>
  <CircleButton onClick={() => handleSizeClick('M')} selected={selectedSize === 'M'}>
    M
  </CircleButton>
  <CircleButton onClick={() => handleSizeClick('L')} selected={selectedSize === 'L'}>
    L
  </CircleButton>
  <CircleButton onClick={() => handleSizeClick('XL')} selected={selectedSize === 'XL'}>
    XL
  </CircleButton>
  <CircleButton onClick={() => handleSizeClick('XXL')} selected={selectedSize === 'XXL'}>
    XXL
  </CircleButton>
</HStack>
</Box>

    );
};
export default ProductSize;