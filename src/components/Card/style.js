import { styled } from "@mui/material";
import { Box, Card as CardMui, CardMedia, CardHeader } from "@mui/material";

export const StyledCard = styled(CardMui)`
  display: flex;
  margin-top: 20px;
`;
export const MediaBox = styled(Box)`
  display: flex;
  width: 150px;
`;
export const InformationBox = styled(Box)`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 15px;
  gap: 5px;
  justify-content: space-between;
`;
export const StyledCardHeader = styled(CardHeader)`
  text-align: start;
  padding: 0;
`;
