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
import { useEffect, useState } from "react";
import { color } from "../../../theme";
import { useHistory } from "react-router";
import { useLinks } from "../../../common/hooks/useLinks";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";
import { applyMiddleware } from "redux";
import { useShopeeApiClient } from "../../hooks/useShopeeApiClient";

export const CartItem = (props) => {
  const regexNumber = /^[0-9]+$/;
  const api = useShopeeApiClient();
  const dispatch = useDispatch();
  const { cartItem } = props;
  const { product } = cartItem;
  const history = useHistory();
  const links = useLinks();
  const [qty, setQty] = useState(cartItem?.quantity || 1);
  const onChange = (e) => {
    setQty(e.target.value);
  };
  const onBlur = async () => {
    setQty(cartItem.quantity);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (regexNumber.test(qty) && +qty > 0) {
      dispatch(
        cartActions.changeQty({
          id: product?.id,
          quantity: +qty,
        })
      );
      await api.updateQtyOfProductInCart({
        id: cartItem?.id,
        quantity: +qty,
      });
    } else {
      onBlur();
    }

    document.activeElement.blur();
  };
  const onChangeQty = async (number) => {
    const newQty = cartItem?.quantity + number;
    if (newQty <= 0) {
      dispatch(cartActions.removeProduct(product?.id));
      await api.removeProductOutCart(cartItem?.id);
    } else {
      dispatch(
        cartActions.changeQty({
          id: product?.id,
          quantity: newQty,
        })
      );
      await api.updateQtyOfProductInCart({
        id: cartItem?.id,
        quantity: newQty,
      });
    }
  };

  const onRemoveProduct = () => {
    dispatch(cartActions.removeProduct(product?.id));
    api.removeProductOutCart(cartItem?.id);
  };

  useEffect(() => {
    setQty(cartItem.quantity);
  }, [cartItem.quantity]);
  return (
    <Root>
      <TableCell
        onClick={() => history.push(links.shopee.productDetail(product?.id))}
      >
        <ProductInfo>
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
        <form onSubmit={onSubmit}>
          <TextField
            onBlur={onBlur}
            onChange={onChange}
            value={qty}
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment
                  onClick={() => onChangeQty(-1)}
                  position="start"
                >
                  <RemoveIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment onClick={() => onChangeQty(1)} position="end">
                  <AddIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>
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
        <ButtonPrimary onClick={onRemoveProduct}>Xóa</ButtonPrimary>
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
