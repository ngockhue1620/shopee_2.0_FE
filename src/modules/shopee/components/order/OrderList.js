import React from "react";
import styled from "styled-components";
import OrderItem from "./OrderItem";

export default function OrderList(props) {
  return (
    <Root>
      {props.orders.map((item) => (
        <OrderItem order={item} />
      ))}
    </Root>
  );
}
const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
