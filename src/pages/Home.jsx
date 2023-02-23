import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { breakpoints } from "../components/Responsive";

function Home() {
  const [dogs, setDogs] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((e) => {
      setDogs(e.data.message);
    });
  }, []);

  return (
    <Box>
      <Grid  p={"50px"} templateColumns={breakpoints} gap={6}>
        {Object.keys(dogs).map((e, i) => (
          <Box
          borderRadius={'10px'}
            onClick={() => navigate("/puppy/" + e)}
            p={"20px"}
            boxShadow={"xl"}
            cursor={"pointer"}
            border={"1px solid black"}
            textAlign={"center"}
            key={i}
          >
            {e}
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
