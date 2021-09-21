import { Typography } from "@material-ui/core";
import styled from "styled-components";
export const NormalText = styled(Typography).attrs((props) => ({
  variant: "caption",
  ...props,
}))`

`;
