import { Card, InputAdornment, TextField, Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Rating } from "@material-ui/lab";
import { useParams } from "react-router";
import styled from "styled-components";
import { LargeText } from "../../common/components/text/LargeText";
import { NormalText } from "../../common/components/text/NormalText";
import { SmallText } from "../../common/components/text/SmallText";
import useAsync from "../../common/hooks/useAsync";
import { EmptyLayout } from "../../common/layouts/EmptyLayout";
import { color } from "../../theme";
import { useShopeeApiClient } from "../hooks/useShopeeApiClient";
import { HeaderLayout } from "../layouts/HeaderLayout";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useState } from "react";
import { ButtonPrimary } from "../../common/components/buttons/ButtonPrimary";
import { ButtonBase } from "../../common/components/buttons/ButtonBase";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { useSelector } from "react-redux";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const api = useShopeeApiClient();
  const params = useParams();
  const getProduct = useAsync(() => api.getProductById(params.id), true);
  const product = getProduct.result;
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const onChangeQty = (e) => {
    setQuantity(e.target.value);
  };
  const onBlur = () => {
    const newQty = parseInt(+quantity);
    setQuantity(Math.min(product?.quantity, Math.max(newQty, 1)));
  };
  const onAddProductToCart = async () => {
    dispatch(
      cartActions.addProduct({
        product,
        quantity,
      })
    );
    const isExistProduct = cart.find((x) => x.product.id === product?.id);
    const newProduct = isExistProduct
      ? await api.updateQtyOfProductInCart({
          id: isExistProduct?.id,
          quantity: isExistProduct.quantity + quantity,
        })
      : await api.addProductToCart({
          product: product?.id,
          quantity,
        });
    newProduct &&
      !isExistProduct &&
      dispatch(
        cartActions.updateId({
          productId: product?.id,
          id: newProduct.id,
        })
      );
  };
  return (
    <EmptyLayout>
      <HeaderLayout>
        <Root>
          <ProductData>
            <img src={product?.image} />
            <ProductInfo>
              <NormalText>{product?.name}</NormalText>
              <Rate>
                <u>{product?.rate > 0 ? product.rate : "5.0"}</u>
                <Rating
                  readOnly
                  size="small"
                  value={product?.rate > 0 ? product.rate : 5.0}
                />
              </Rate>
              <LargeText>
                {product?.price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </LargeText>
              <Quantity>
                <SmallText>Số Lượng</SmallText>
                <TextField
                  onBlur={onBlur}
                  onChange={onChangeQty}
                  value={quantity}
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                        position="start"
                      >
                        <RemoveIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        onClick={() =>
                          setQuantity(Math.min(quantity + 1, product?.quantity))
                        }
                        position="end"
                      >
                        <AddIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <SmallText>{`${product?.quantity} sản phẩm có sẵn`}</SmallText>
              </Quantity>
              <Actions>
                {product && (
                  <ButtonBase
                    onClick={onAddProductToCart}
                    variant="contained"
                    color="default"
                    startIcon={<AddShoppingCartIcon color="primary" />}
                  >
                    Thêm Vào Giỏ Hàng
                  </ButtonBase>
                )}
                <ButtonPrimary>Mua Ngay</ButtonPrimary>
              </Actions>
            </ProductInfo>
          </ProductData>
        </Root>
      </HeaderLayout>
    </EmptyLayout>
  );
};
const Root = styled(Card)`
  width: 100%;
  box-shadow: none;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
`;
const ProductData = styled.div`
  width: 100%;
  display: flex;
  gap: 35px;
  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    flex-shrink: 0;
  }
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 15px;
  ${NormalText} {
    font-weight: bold;
    text-transform: capitalize;
  }
  ${LargeText} {
    color: ${color.orange1};
  }
`;
const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  u {
    color: #ffb400;
    font-weight: bold;
    font-size: 25px;
  }
`;
const Quantity = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  input {
    text-align: center;
  }
`;
const Actions = styled.div`
  display: flex;
  gap: 15px;
  ${ButtonBase}:first-child {
    color: ${color.orange1};
  }
`;