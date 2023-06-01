import React from 'react';
import { Box, Button,Input,Text, Image, Flex, HStack, VStack } from '@chakra-ui/react';

import { useNumberInput } from '@chakra-ui/react';


const ProductPage = () => {


    const HookUsage = () => {
        const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
          useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 0,
          });
      
        const inc = getIncrementButtonProps();
        const dec = getDecrementButtonProps();
        const input = getInputProps();
      
        return (
          <HStack w={150} spacing={1}>
            <Button {...dec} size="sm">
              -
            </Button>
            <Input {...input} w={10} size="sm" />
            <Button {...inc} size="sm">
              +
            </Button>
          </HStack>
        );
      };
      
  return (
    <Box>
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
          <Image
            src="love.png"
            alt="Logo 3"
            position="absolute"
            bottom={0}
            right={0}
            width={30}
            height={30}
          />
          
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
          
          {/* White Box */}
       
          
        </Box>
        
      </Flex>
      <Box
            position="absolute"
            width={375}
       //     height={412}
            bg="#FFFFFF"
            borderRadius="30px 30px 0px 0px"
            p={4}
          >





            <HStack justifyContent={"space-between"} p={1}>
            <Box p={1}>
              {/* Stacked Text */}
              <Text>Roller Rabit</Text>
              <Text>Vade Oller Dress</Text>
              <Text>(320 views)</Text>
            </Box>
            <Flex mr={-10} justifyContent={'flex-end'} flexDirection={'column'} >
              {/* Stacked Text */}
              <HookUsage/>
              <Text justifyContent={'flex-end'} ml={50}>Text 5</Text>
            </Flex>
            </HStack>
            <Box> <Text ml={5} mt={5}>Size</Text>

            
</Box>








          </Box>
    </Box>
    
    
  );
};

export default ProductPage;
