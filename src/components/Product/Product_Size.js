import React, { useState } from 'react';
import { Box, Button, Text, HStack } from '@chakra-ui/react';

const ProductSize = () => {
  // State to store the selected size
  const [selectedSize, setSelectedSize] = useState(null);

  // Component for the circular size button
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

  // Function to handle the size button click
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <Box>
      {/* Heading for size */}
      <Text ml={2} mt={1} fontWeight={600} fontSize="1rem">
        Size
      </Text>

      {/* Size buttons */}
      <HStack spacing={2} mt={4} ml={5}>
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
