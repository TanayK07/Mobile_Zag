import React from "react";
import { Input, InputGroup, InputLeftElement, InputRightAddon, Image, VStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
    return (
<VStack spacing={2} p={2} alignItems="center">
<InputGroup w={280}>
  <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
  <Input placeholder="Search" />
  <InputRightAddon bg="white" p={1}>
    <Image src="lelvel.png" alt="Logo" w={50} ml={5} />
  </InputRightAddon>
</InputGroup>
</VStack>

    );
};
export default SearchBar;