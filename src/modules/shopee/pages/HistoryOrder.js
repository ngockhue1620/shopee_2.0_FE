import {
  Card,
  InputAdornment,
  TextField,
  Button,
  Modal,
  Grid,
} from "@material-ui/core";
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
import { useAuth } from "../../common/contexts/AuthProvider";
import { useHistory } from "react-router";
import { useSnackbar } from "notistack";

export const HistoryOrder = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  return (
    <EmptyLayout>
      <HeaderLayout>
        <Root>
          
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
