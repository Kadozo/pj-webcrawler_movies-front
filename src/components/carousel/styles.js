import { Button as ButtonMui, styled } from "@mui/material";

export const Container = styled("div")`
  position: relative;
`;

export const Content = styled("div")`
  white-space: nowrap;
  width: 100%;
  min-height: 300px;
  background-color: #343F4F;
  font-size: 0px;
  overflow: hidden;

  ${(props) => props.isDrag ? 
    `
      cursor: grab;
      scroll-behavior: auto;
    `
  :
    `
      cursor: pointer;
      scroll-behavior: smooth;
    `
  }

`; 

export const Image = styled("img")`
  height: 300px;
  width: 240px;
  margin: 15px;
  object-fit: cover;
  opacity: 0.5;
  transition: all ease 0.3s;

  :hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

export const Button = styled(ButtonMui)`
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
  min-width: 0;
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  :hover{
    background-color: black;
    color: white;
  }

  ${(props) => props.show === "false" ? "display: none;" : "display: block;"}
`;