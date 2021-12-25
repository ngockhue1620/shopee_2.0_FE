import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import styled from "styled-components";
import { CartItem } from "./CartItem";
import { NormalText } from "../../../common/components/text/NormalText";

export const CartList = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <NormalText>Sản Phẩm</NormalText>
          </TableCell>
          <TableCell align="right">
            <NormalText>Đơn Giá</NormalText>
          </TableCell>
          <TableCell align="right">
            <NormalText>Số Lượng</NormalText>
          </TableCell>
          <TableCell align="right">
            <NormalText>Số Tiền</NormalText>
          </TableCell>
          <TableCell align="right">
            <NormalText>Thao Tác</NormalText>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.cartList?.map((item) => (
          <CartItem key={item.product.id} cartItem={item} />
        ))}
      </TableBody>
    </Table>
  );
};
