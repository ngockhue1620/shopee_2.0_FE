import { Button } from "@material-ui/core";
import styled from "styled-components";

export const ButtonBase = styled(Button).attrs((props) => ({
  color: "primary",
  variant: "contained",
  ...props,
}))`
  text-transform: none;
`;
