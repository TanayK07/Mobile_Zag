import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Card2 = ({ image, title, description, price }) => {

  return (
    <Box w={155} h={240} bg="white"  position="relative">
      <Image src={image} alt="Card Image" w={155} h={170} objectFit="cover" borderRadius={15}  />
      <Box position="absolute" top="0" right="0" p="2" zIndex="1">
        <Image           style={{ filter: "invert(100%)" }}

        src="love.png" alt="Love Logo Inverted" w={6} />
      </Box>
      <Text
        position="absolute"
        bottom={9}
        left="0"
        width="100%"
        textAlign="center"
        fontFamily="Poppins"
        fontWeight="700"
        fontSize={"0.875rem"}
        lineHeight="150%"
        color="#000000"
      >
        {title}
      </Text>
      <Text
        position="absolute"
        bottom={5}
        left="0"
        width="100%"
        textAlign="center"
        fontFamily="Poppins"
        fontSize="0.625rem"
        lineHeight="150%"
        color="#666666"
      >
        {description}
      </Text>
      <Text
        position="absolute"
        bottom={0}
        left="0"
        width="100%"
        textAlign="center"
        fontFamily="PoppinsSemi-Bold"
        fontSize="0.725rem"
        lineHeight="150%"
      >
        {price}
      </Text>
    </Box>
  );
};

export default Card2;
