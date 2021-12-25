import styled from "styled-components";
import { ProductItem } from "./ProductItem";

export const ProductList = (props) => {
  return (
    <Root>
      {props.products?.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Root>
  );
};
const Root = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 8px;
`;
