import React, { useState } from 'react';
import { Box, Button, Input, Text, Image, Flex, HStack, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNumberInput } from '@chakra-ui/react';
import ProductSize from '../components/Product/Product_Size';

const ProductPage = () => {
  // State for the quantity of the product
  const [quantity, setQuantity] = useState(1);

  // Component for number input with increment and decrement buttons
  const HookUsage = () => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 0,
    });

    const inc = getIncrementButtonProps({
      onClick: () => setQuantity((prevQuantity) => prevQuantity + 1),
    });

    const dec = getDecrementButtonProps({
      onClick: () => {
        if (quantity > 1) {
          setQuantity((prevQuantity) => prevQuantity - 1);
        }
      },
    });

    const input = getInputProps();

    return (
      <HStack spacing={1}>
        <Button {...dec} size="sm">
          -
        </Button>
        <Input {...input} w={10} size="sm" value={quantity} readOnly />
        <Button {...inc} size="sm">
          +
        </Button>
      </HStack>
    );
  };

  // Function to calculate the total price based on quantity
  const calculateTotalPrice = () => {
    const basePrice = 198.5;
    return (quantity * basePrice).toFixed(2);
  };

  // Component for the "Buy Now" button
  const HandleBuyNow = () => {
    return (
      <Button
        as={Link}
        to="/payments"
        width={200}
        height={50}
        background="black"
        borderRadius={30}
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src="/bagicon.png" alt="Logo" width={3} height={3.5} mr={5} />
        <Text color="white" fontFamily="PoppinsSemi-Bold" fontSize="1rem" mr={15}>
          Buy Now
        </Text>
      </Button>
    );
  };

  return (
    <Flex justifyContent="center" alignItems="center" bg="white">
      <Box position="relative" width={375} height={430}>
        {/* Product Image */}
        <Image src="/lady.png" alt="Product Image" width={375} height={430} />

        {/* Logos */}
        <HStack position="absolute" top={0} left={0} right={0} spacing={0} justifyContent="space-between" ml={5} mt={10} mr={5}>
          {/* Logo Top Left */}
          <Image src="/arrow.png" alt="Logo 1" width={35} height={35} />
          {/* Logo Top Right */}
          <Image src="/cart1.png" alt="Logo 2" width={30} height={30} />
        </HStack>

        {/* Logo Bottom Right */}
        <Image src="/love.png" alt="Logo 3" position="absolute" bottom={5} right={5} width={30} height={30} />

        {/* Logo Bottom Center */}
        <Image src="/dots.png" alt="Logo 4" position="absolute" bottom={5} left="50%" transform="translateX(-50%)" width={49} height={15} />

        {/* White Box */}
        <Box width="100%" bg="#FFFFFF" borderRadius="30 30 0 0" p={4}>
          <HStack justifyContent="space-between" p={1}>
            <Box p={1}>
              {/* Stacked Text */}
              <Text fontFamily="PoppinsBold" fontSize="18/16rem">
                Roller Rabbit
              </Text>
              <Text fontWeight={400} color="#666666" fontSize="0.6875rem">
                Vade Oller Dress
              </Text>
              <HStack spacing={1}>
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} style={{ color: '#ffab07', width: 11 }} />
                ))}
                <Text color="black" fontWeight={400} fontSize="0.6875rem">
                  (320 reviews)
                </Text>
              </HStack>
            </Box>
            <Flex justifyContent="flex-end" flexDirection="column">
              {/* Stacked Text */}
              <HookUsage />
              <Text justifyContent="flex-end" fontSize="0.625rem" fontWeight={600} lineHeight="17/16rem" textAlign="right">
                Available in Stock
              </Text>
            </Flex>
          </HStack>

          {/* ProductSize component */}
          <ProductSize />

          <Flex flexDirection="column" mt={5}>
            <Text fontSize="1rem" fontWeight={600} mb={15} lineHeight="150%" color="black">
              Description
            </Text>
            <Text fontSize="0.6875rem" maxW={350} color="#666666" mb={1}>
              Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole
              makes a fresh statement for summer.
            </Text>

            <HStack mt={3} justifyContent="space-between">
              <VStack spacing={0}>
                <Text color="#AAAAAA" fontSize="0.5625rem">
                  Total Price
                </Text>
                <Text color="#000000" fontWeight={700} ml={4} fontSize="18/16rem">
                  ${calculateTotalPrice()}
                </Text>
              </VStack>

              {/* "Buy Now" button */}
              <HandleBuyNow />
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProductPage;
