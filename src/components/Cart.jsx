import { Box, Image } from "@chakra-ui/react";
import React from "react";

function Cart({e}) {
    // console.group(e)
  return (
    <Box
      boxShadow={"xl"}
      borderRadius={"5px"}
      p={"10px"}
      border={"1px solid black"}
      h={"350px"}
    >
      <Image w={"100%"} h={"100%"} src={e}  />
    </Box>
  );
}

export default Cart;
