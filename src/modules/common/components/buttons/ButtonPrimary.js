
import styled from "styled-components"
import { ButtonBase } from "./ButtonBase"

export const ButtonPrimary = styled(ButtonBase).attrs((props) => ({
  color: "primary",
  variant: "contained",
  ...props,
}))``
