import { Typography } from "@material-ui/core";
import styled from "styled-components";

export const SmallestText = styled(Typography).attrs((props) => ({
  variant: "subtitle2",
  ...props,
}))``;
