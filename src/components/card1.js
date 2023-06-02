import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

const Card1 = ({ image, title, description, code }) => {
  return (
    <Flex
      borderRadius="20px"
      justifyContent="flex-start"
      alignItems="flex-start"
      p={1}
    >
      <Box
        backgroundImage={`url(${image})`}
        backgroundSize="cover"
        w={260}
        h={160}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius="20px"
        p={4}
        color="#000000"
      >
        <Text
          fontFamily="PoppinsBold"
          fontSize="25px"
          lineHeight="150%"
        >
          {title}
        </Text>
        <Text
          mb={2}
          fontFamily="Poppins"
         
          fontSize="1rem"
        >
          {description}
        </Text>
        <Text
          fontFamily="Poppins"
          fontSize="11px"
          color="#666666"
          fontWeight={600}
          lineHeight="150%"
          mb={15}
        >
          {code}
        </Text>
        <Button
          bg="#000000"
          borderRadius="30px"
          color="#ffffff"
          fontSize="10px"
          lineHeight="150%"
          w={70}
          h={25}
          px={4}
          py={1}
        >
          Get Now
        </Button>
      </Box>
    </Flex>
  );
};

export default Card1;
