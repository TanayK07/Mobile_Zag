import React, { useState } from 'react';
import { Box, Button, Input, Text, Image, Flex, HStack, VStack, Link } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { useNumberInput } from '@chakra-ui/react';

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const calculateTotalPrice = () => {
    const basePrice = 198.5;
    return (quantity * basePrice).toFixed(2);
  };

  const HandleBuyNow = () => {
    // const history = useHistory();
    // Redirect to the "payments" page
    <Link to="/payments" />;
    // history.push('/payments');
  };
  

  return (
    <Flex justifyContent="center" alignItems="center" h={430} bg="gray.200">
      <Box position="relative" width={375} height={430}>
        {/* Product Image */}
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

        {/* White Box */}
        <Box position="fixed" h={375} bottom={0} width="100%" bg="#FFFFFF" borderRadius="30 30 0 0" p={4}>
          <HStack justifyContent="space-between" p={1}>
            <Box p={1}>
              {/* Stacked Text */}
              <Text>Roller Rabbit</Text>
              <Text>Vade Oller Dress</Text>
              <Text>(320 views)</Text>
            </Box>
            <Flex justifyContent="flex-end" flexDirection="column">
              {/* Stacked Text */}
              <HookUsage />
              <Text justifyContent="flex-end">Text 5</Text>
            </Flex>
          </HStack>
          <Box ml={4} mt={5} mb={4}> {/* Updated the margin-bottom value */}
            <Text fontSize="lg">Size</Text>
            <HStack spacing={2} mt={2}>
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

          <Flex flexDirection={'column'}>
            <Text fontSize="lg">Color</Text>
            <Text fontSize="0.6875rem" maxW={350}>
              Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties,
              while a braided jute sole makes a fresh statement for summer.
            </Text>

            <HStack mt={3} justifyContent={'space-between'}>
              <VStack spacing={1}>
                <Text color="#AAAAAA" fontSize={"0.5625rem"}>Total Price</Text>
                <Text color="#000000" fontWeight={700} ml={4} fontSize={"18/16rem"}>
                  ${calculateTotalPrice()}
                </Text>
              </VStack>
              <Button
                width={200}
                height={50}
                background="black"
                borderRadius={30}
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={HandleBuyNow}
              >
                <Image src="bagicon.png" alt="Logo" width={3} height={3.5} mr={5} />
                <Text color={"white"} fontWeight={600} fontSize={"1rem"} mr={15}>Buy Now</Text>
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
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

export default ProductPage;
