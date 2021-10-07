import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

export const SpinnerPrimary = styled(CircularProgress).attrs((props) => ({
  color: "primary",
  ...props,
}))``;
