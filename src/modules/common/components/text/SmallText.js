import { Typography } from "@material-ui/core";
import styled from "styled-components";

export const SmallText = styled(Typography).attrs((props) => ({
  variant: "subtitle1",
  ...props,
}))``;
