import { useSelector } from "react-redux";
import { EmptyLayout } from "../../common/layouts/EmptyLayout";
import { CartList } from "../components/cart/CartList";
import { HeaderLayout } from "../layouts/HeaderLayout";
import styled from "styled-components";
import { Card, Grid, Modal, TextField } from "@material-ui/core";
import { NormalText } from "../../common/components/text/NormalText";
import { LargeText } from "../../common/components/text/LargeText";
import { ButtonPrimary } from "../../common/components/buttons/ButtonPrimary";
import { useState } from "react";
import { useShopeeApiClient } from "../hooks/useShopeeApiClient";
import useAsync from "../../common/hooks/useAsync";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

export const Cart = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const cart = useSelector((state) => state.cart);
  const api = useShopeeApiClient();
  const [open, setOpen] = useState(false);
  const checkout = useAsync(async (data) => {
    const success = api.checkout(data);
    if (success) {
      dispatch(cartActions.setCart([]));
      handleClose();
      enqueueSnackbar("Đặt hàng thành công !", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Đặt hàng thất bại !", {
        variant: "error",
      });
    }
  });
  const [dataCheckout, setDataCheckout] = useState({
    address: "",
    note: "",
  });

  const onChange = (e) => {
    setDataCheckout({
      ...dataCheckout,
      [e.target.name]: e.target.value,
    });
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const total = () => {
    return cart
      .reduce((acc, item) => acc + item.quantity * item.product.price, 0)
      .toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (dataCheckout.address.trim().length === 0) {
      enqueueSnackbar("Địa chỉ không hợp lệ !", {
        variant: "error",
      });
      return;
    }
    checkout.run(dataCheckout);
  };

  return (
    <EmptyLayout>
      <HeaderLayout>
        <CartList cartList={cart} />
        <PayBar>
          <NormalText>
            Tổng thanh toán ({cart.length} Sản phẩm):{" "}
            <LargeText color="primary">{total()}</LargeText>
          </NormalText>
          <ButtonPrimary onClick={handleOpen}>Mua hàng</ButtonPrimary>
          <Modal open={open} onClose={handleClose}>
            <ModalBody>
              {cart.length > 0 ? (
                <form onSubmit={handleCheckout}>
                  <TextField
                    name="address"
                    label="Địa chỉ"
                    variant="outlined"
                    required
                    onChange={onChange}
                    value={dataCheckout.address}
                  />
                  <TextField
                    onChange={onChange}
                    name="note"
                    label="Ghi chú"
                    variant="outlined"
                    value={dataCheckout.note}
                  />
                  <ButtonPrimary disable={checkout.loading} type="submit">
                    Đặt hàng
                  </ButtonPrimary>
                </form>
              ) : (
                <>
                  <NormalText>
                    Bạn vẫn chưa chọn sản phẩm nào để mua.
                  </NormalText>
                  <ButtonPrimary onClick={handleClose}>OK</ButtonPrimary>
                </>
              )}
            </ModalBody>
          </Modal>
        </PayBar>
      </HeaderLayout>
    </EmptyLayout>
  );
};

const ModalBody = styled(Card)`
  width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: none;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${NormalText} {
    height: 100px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
const PayBar = styled(Card)`
  border-radius: 0;
  box-shadow: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  bottom: 0;
  z-index: 2;
  padding: 1rem;

  ${NormalText} {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  ${ButtonPrimary} {
    width: 200px;
  }
`;
