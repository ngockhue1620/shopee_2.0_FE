import {
  Box,
  Card,
  InputAdornment,
  TableCell,
  TableRow,
  TextField,
} from "@material-ui/core";
import styled from "styled-components";
import { SmallText } from "../../../common/components/text/SmallText";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { ButtonPrimary } from "../../../common/components/buttons/ButtonPrimary";
import { useEffect } from "react";
import { color } from "../../../theme";
import { useHistory } from "react-router";
import { useLinks } from "../../../common/hooks/useLinks";

export const CartItem = (props) => {
  const { cartItem } = props;
  const { product } = cartItem;
  const history = useHistory();
  const links = useLinks();
  return (
    <Root>
      <TableCell
        onClick={() => history.push(links.shopee.productDetail(product?.id))}
      >
        <ProductInfo>
          {" "}
          <img src={product?.image} />
          <SmallText>{product?.name}</SmallText>
        </ProductInfo>
      </TableCell>

      <TableCell align="right">
        <SmallText>
          {product?.price.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </SmallText>
      </TableCell>
      <TableCell align="right">
        <TextField
          value={cartItem?.quantity}
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RemoveIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <AddIcon />
              </InputAdornment>
            ),
          }}
        />
      </TableCell>
      <TableCell align="right">
        <Total>
          {(product?.price * cartItem?.quantity).toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </Total>
      </TableCell>
      <TableCell align="right">
        <ButtonPrimary>Xóa</ButtonPrimary>
      </TableCell>
    </Root>
  );
};
const ProductInfo = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    flex-shrink: 0;
  }
`;
const Root = styled(TableRow)`
  background-color: white;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
  input {
    text-align: center;
  }
`;

const Total = styled(SmallText)`
  color: ${color.orange1};
`;
