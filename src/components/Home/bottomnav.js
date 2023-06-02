import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";

const BottomNav = () => {
  return (
    <Flex
      justify="space-around"
      px={4}
      py={2}
      bg="gray.100"
      position="sticky"
      bottom={0}
      left={0}
      right={0}
      height={70}
    >
      {/* Home */}
      <Box display="flex" alignItems="center">
        <Image src="/home.png" alt="Home Logo" w={"2em"} mr={2} />
        <Text>Home</Text>
      </Box>

      {/* Cart */}
      <Box display="flex" alignItems="center">
        <Image src="/cart.png" alt="Cart Logo" w={"1.16714em"} />
      </Box>

      {/* Notification */}
      <Box display="flex" alignItems="center">
        <Image src="/notification.png" alt="Notification Logo" w={"13.6/14 em"} />
      </Box>

      {/* Profile */}
      <Box display="flex" alignItems="center">
        <Image src="/profile.png" alt="Profile Logo" w={"12.8/14 em"} />
      </Box>
    </Flex>
  );
};

export default BottomNav;
