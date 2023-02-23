import { Box, Grid, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "../components/Cart";
import { breakpoints } from "../components/Responsive";

function Puppy() {
  const [img, setImg] = useState([]);
  const { dog } = useParams();

  useEffect(() => {
    if (dog) {
      axios.get(`https://dog.ceo/api/breed/${dog}/images`).then((e) => {
        setImg(e.data.message);
      });
    }
  }, []);

  return (
    <Box>
      <Text textAlign={"center"} mt={"20px"} fontSize={"4xl"}>
        {dog}
      </Text>
      <Grid p={"50px"} templateColumns={breakpoints} gap={6}>
        {img.map((e, i) => (
          <Cart key={i} e={e} />
        ))}
      </Grid>
    </Box>
  );
}

export default Puppy;
