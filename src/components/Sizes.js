import React, { useState } from 'react';
import { Box, Button, Text, HStack } from '@chakra-ui/react';

const ProductSize = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

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

  return (
    <>
      <Box ml={4} mt={3} mb={1}>
        <Text fontSize={"1rem"} mb={-1}>
          Size
        </Text>
        <HStack spacing={0} mt={-1}>
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
    </>
  );
};

export default ProductSize;
