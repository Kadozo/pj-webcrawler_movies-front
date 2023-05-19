import React from "react";
import { CardMedia, CardHeader, Typography } from "@mui/material";
import {
  StyledCard,
  MediaBox,
  InformationBox,
  StyledCardHeader,
} from "./style";
export default function Card() {
  return (
    <StyledCard>
      <MediaBox>
        <CardMedia
          component="img"
          image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSU9oDFhGM-tcSSsqNfZi23Ckj71wynxFk1IWqL9aHo2YhHdtQV"
          alt="cover"
        />
      </MediaBox>
      <InformationBox>
        <StyledCardHeader
          title="Casa de Cera"
          subheader="2005"
        ></StyledCardHeader>
        <Typography fontSize={"small"} variant="caption" color={"GrayText"}>
          5,4/10
        </Typography>
        <Typography fontSize={"medium"} variant="subtitle1">
          Um grupo de adolescentes ficam encalhados num estranho museu de cera e
          logo deveram lutar para sobreviver.
        </Typography>
        <Typography fontSize={"small"} variant="caption">
          Terror, Suspense
        </Typography>
      </InformationBox>
    </StyledCard>
  );
}
