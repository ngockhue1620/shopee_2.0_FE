import { EmptyLayout } from "../../common/layouts/EmptyLayout";
import { useShopeeApiClient } from "../hooks/useShopeeApiClient";
import { HeaderLayout } from "../layouts/HeaderLayout";
import { useEffect, useState } from "react";
import OrderList from "../components/order/OrderList";

export const HistoryOrder = () => {
  const api = useShopeeApiClient();
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const result = await api.getHistoryOrder();
    result && setOrders(result);
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <EmptyLayout>
      <HeaderLayout>
        <OrderList orders={orders} />
      </HeaderLayout>
    </EmptyLayout>
  );
};
