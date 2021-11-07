import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import styled from "styled-components";
import { CartItem } from "./CartItem";

export const CartList = (props) => {
  return (
    <Root>
      {props.cartList?.map((cartItem) => (
        <CartItem key={cartItem.product?.id} cartItem={cartItem} />
      ))}
    </Root>
  );
};
const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
