import React from "react";
import { CardMedia, Typography } from "@mui/material";
import {
  StyledCard,
  MediaBox,
  InformationBox,
  StyledCardHeader,
} from "./style";
export default function Card({img, title, start_year, end_year, genres, imdb_rating, descripion}) {
  return (
    <StyledCard>
     {img && <MediaBox>
        <CardMedia
          component="img"
          image={img}
          alt="cover"
        />
      </MediaBox>}
      <InformationBox>
        <StyledCardHeader
          title={title}
          subheader={ start_year ? start_year + (end_year ? " - " + end_year : "") : ""}
        ></StyledCardHeader>
        <Typography fontSize={"small"} variant="caption" color={"GrayText"}>
          {imdb_rating + "/10"}
        </Typography>
        {descripion && <Typography fontSize={"medium"} variant="subtitle1">
          {descripion}
        </Typography>}
        {genres && <Typography fontSize={"small"} variant="caption">
          {genres.join(",")}
        </Typography>}
      </InformationBox>
    </StyledCard>
  );
}
