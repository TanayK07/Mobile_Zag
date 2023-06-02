import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

const Card1 = ({ image, title, description, code }) => {
  return (
    <Flex
      borderRadius={20}
      justifyContent="flex-start"
      alignItems="flex-start"
      p={1}
    >
      {/* Card Box */}
      <Box
        backgroundImage={`url(${image})`}
        backgroundSize="cover"
        w={260}
        h={160}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius={20}
        p={4}
        color="#000000"
      >
        {/* Title */}
        <Text
          fontFamily="PoppinsBold"
          fontSize={"25/16rem"}
          lineHeight="150%"
        >
          {title}
        </Text>
        {/* Description */}
        <Text
          mb={2}
          fontFamily="Poppins"
          fontSize="1rem"
        >
          {description}
        </Text>
        {/* Code */}
        <Text
          fontFamily="Poppins"
          fontSize={"0.625rem"}
          color="#666666"
          fontWeight={600}
          lineHeight="150%"
          mb={15}
        >
          {code}
        </Text>
        {/* Get Now Button */}
        <Button
          bg="#000000"
          borderRadius={30}
          color="#ffffff"
          fontSize={"0.625rem"}
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
