import { Typography } from "@material-ui/core";
import styled from "styled-components";
export const LargeText = styled(Typography).attrs((props) => ({
  variant: "h6",
  ...props,
}))``;
