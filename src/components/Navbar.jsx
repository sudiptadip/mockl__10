import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box pt={'80px'} >
    <Flex
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bg={"whatsapp.500"}
      fontWeight={"500"}
      fontSize={"22px"}
      border={"1px solid black"}
      h={"80px"}
      position={'fixed'}
      top={'0'}
      w={'100%'}
    >
      <Box>
        <Link to={"/"}>Home</Link>
      </Box>
      <Box>
        <Link to={"/search"}>Search</Link>
      </Box>
    </Flex>
    </Box>
  );
}

export default Navbar;
