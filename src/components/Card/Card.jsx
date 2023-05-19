import React from "react";
import { Box, Card as CardMui, CardMedia, CardHeader } from "@mui/material";
import { StyledCard, MediaBox, InformationBox } from "./style";
export default function Card() {
  return (
    <StyledCard>
      <MediaBox>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflAzn1SmIwCuhiJqIhORB7_pmhGYNW34zlwT50xSsvr3HcRUe5TU-3-12ijGU5Uo4yh0&usqp=CAU"
          alt="Live from space album cover"
        />
      </MediaBox>
      <InformationBox>
        <CardHeader
          title="Titulo da Série/Filme"
          subheader="Ano da série/filme"
        ></CardHeader>
        <Box>Avaliação</Box>
        <Box>Sinopse</Box>
        <Box>Categorias</Box>
      </InformationBox>
    </StyledCard>
  );
}
