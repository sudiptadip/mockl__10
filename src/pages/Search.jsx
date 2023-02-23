import { Box, Button, Flex, Grid, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import Cart from "../components/Cart";
import { breakpoints } from "../components/Responsive";

function Search() {
  const [dog, setDog] = useState("");
  const [data, setData] = useState([]);

  function Searching() {
    axios
      .get(`https://dog.ceo/api/breed/${dog}/images`)
      .then((e) => {
        setData(e.data.message);
      })
      .catch((e) => {
        alert("no dogs found");
      });
  }
  return (
    <Box>
      <Flex w={"400px"} margin={"auto"} mt={"50px"}>
        <Input
          onChange={(e) => setDog(e.target.value)}
          placeholder="search"
          type={"text"}
        />
        <Button onClick={Searching} colorScheme={"whatsapp"}>
          Search
        </Button>
      </Flex>

      <Grid p={"50px"} templateColumns={breakpoints} gap={6}>
        {data.map((e, i) => (
          <Cart key={i} e={e} />
        ))}
      </Grid>
    </Box>
  );
}

export default Search;
