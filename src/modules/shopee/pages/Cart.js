import { useSelector } from "react-redux";
import { EmptyLayout } from "../../common/layouts/EmptyLayout";
import { CartList } from "../components/cart/CartList";
import { HeaderLayout } from "../layouts/HeaderLayout";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <EmptyLayout>
      <HeaderLayout>
        <CartList cartList={cart} />
      </HeaderLayout>
    </EmptyLayout>
  );
};
