import { Button, Card } from "@material-ui/core";
import Storefront from "@material-ui/icons/Storefront";
import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../../../common/components/buttons/ButtonPrimary";
import { SmallText } from "../../../common/components/text/SmallText";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { LargeText } from "../../../common/components/text/LargeText";
import { NormalText } from "../../../common/components/text/NormalText";

export default function OrderItem(props) {
  const { order } = props;
  return (
    <div>
      <OrderInfo>
        <Head>
          <ShopInfo>
            <Storefront style={{ fontSize: 20 }} />
            <SmallText>{order.product__shop__name}</SmallText>
            <ButtonPrimary startIcon={<QuestionAnswerIcon />}>
              Chat
            </ButtonPrimary>
            <Button>Xem Shop</Button>
          </ShopInfo>
          <Status>
            <LocalShippingIcon style={{ fontSize: 20 }} />
            <SmallText>Giao hàng thành công</SmallText>
            <HelpOutlineIcon style={{ fontSize: 20 }} />
            <SmallText>ĐÃ GIAO</SmallText>
          </Status>
        </Head>
        <ProductInfo>
          <div>
            <img src={order.product__image} />
            <div>
              <NormalText>{order.product__name}</NormalText>
              <SmallText>x{order.quantity}</SmallText>
            </div>
          </div>
          <SmallText>
            {order.price.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </SmallText>
        </ProductInfo>
      </OrderInfo>
      <PriceInfo>
        <div>
          <SmallText>Không nhận được đánh giá</SmallText>
        </div>
        <div>
          <Price>
            <SmallText>Tổng số tiền :</SmallText>
            <LargeText>
              {(order.price * order.quantity).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </LargeText>
          </Price>
          <Actions>
            <ButtonPrimary>Mua lại</ButtonPrimary>
            <Button>Liên Hệ Người Bán</Button>
          </Actions>
        </div>
      </PriceInfo>
    </div>
  );
}
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  ${LargeText} {
    color: #ee4d2d;
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  button {
    font-weight: 400;
    font-size: 15px;
    text-transform: capitalize;
    box-shadow: none;
    border-radius: 0;

    :last-child {
      border: 1px solid rgba(0, 0, 0, 0.09);
    }
  }
`;
const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fffefb;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
const ProductInfo = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    img {
      width: 100px;
      height: 100px;
      border: 1px solid rgba(0, 0, 0, 0.09);
    }
    display: flex;
    gap: 10px;
    & > div {
    }
  }
`;
const OrderInfo = styled(Card)`
  box-shadow: none;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  padding: 1rem;
  padding-bottom: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;
const Head = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;
const ShopInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  ${SmallText} {
    font-weight: bold;
  }
  button {
    border-radius: 1px;
    height: 25px;
    box-shadow: none;
    text-transform: capitalize;
    .MuiButton-label {
      font-weight: 400;
      font-size: 15px;
    }
    &:last-child {
      border: 1px solid rgba(0, 0, 0, 0.09);
    }
  }
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
    :first-child {
      color: #26aa99;
    }
  }
  ${SmallText} {
    :nth-child(2) {
      color: #26aa99;
    }
    :last-child {
      border-left: 1px solid rgba(0, 0, 0, 0.09);
      padding-left: 5px;
      color: #ee4d2d;
    }
  }
`;
