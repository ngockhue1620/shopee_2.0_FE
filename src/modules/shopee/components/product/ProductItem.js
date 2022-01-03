import styled from "styled-components";
import { Card } from "@material-ui/core";
import { NormalText } from "../../../common/components/text/NormalText";
import { SmallText } from "../../../common/components/text/SmallText";
import { useHistory } from "react-router";
import { useLinks } from "../../../common/hooks/useLinks";

export const ProductItem = (props) => {
  const history = useHistory();
  const links = useLinks();
  
  return (
    <Root
      onClick={() => {
        history.push(links.shopee.productDetail(props.product?.id));
      }}
    >
      <img src={props.product.image} />
      <div>
        <SmallText>{props.product.name}</SmallText>
        <NormalText>
          {props.product.price.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </NormalText>
      </div>
    </Root>
  );
};
const Root = styled(Card)`
  box-shadow: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  img {
    flex-grow: 1;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  div {
    padding: 8px 16px;
    ${SmallText} {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      display: -webkit-box;
    }
    ${NormalText} {
      color: red;
    }
  }
`;
