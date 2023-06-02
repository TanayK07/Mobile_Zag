import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Card2 = ({ image, title, description, price }) => {

  return (
    <Box w="155px" h="240px" bg="white" borderRadius="md" position="relative">
      <Image src={image} alt="Card Image" w="155px" h="170px" objectFit="cover" />
      <Box position="absolute" top="0" right="0" p="2" zIndex="1">
        <Image           style={{ filter: "invert(100%)" }}

        src="love.png" alt="Love Logo Inverted" w="24px" h="24px" />
      </Box>
      <Text
        position="absolute"
        bottom="48px"
        left="0"
        width="100%"
        textAlign="center"
        fontFamily="Poppins"
        fontWeight="700"
        fontSize="14px"
        lineHeight="150%"
        color="#000000"
      >
        {title}
      </Text>
      <Text
        position="absolute"
        bottom="28px"
        left="0"
        width="100%"
        textAlign="center"
        fontFamily="Poppins"
        fontSize="12px"
        lineHeight="150%"
        color="#666666"
      >
        {description}
      </Text>
      <Text
        position="absolute"
        bottom="8px"
        left="0"
        width="100%"
        textAlign="center"
        fontFamily="Poppins"
        fontSize="12px"
        lineHeight="150%"
        color="#666666"
      >
        {price}
      </Text>
    </Box>
  );
};

export default Card2;
