import React, { useState } from 'react';
import { Box, Text, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';

const Product = () => {
  const [size, setSize] = useState('Small');
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const totalPrice = calculateTotalPrice();

  function calculateTotalPrice() {
    // Calculate the total price based on size, quantity, and other factors
    // You can define your own logic here
    return quantity * 10; // Assuming each product costs $10
  }

  return (
    <Box>
      <Text fontSize="xl">Product Screen</Text>
      <Select value={size} onChange={handleSizeChange}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </Select>
      <NumberInput value={quantity} onChange={handleQuantityChange} min={1}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>Total Price: ${totalPrice}</Text>
    </Box>
  );
};

export default Product;
