import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, theme } from "../../theme";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import logoShopee from "../../../assets/logo-shopee.jpg";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ButtonPrimary } from "./buttons/ButtonPrimary";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Header() {
  return (
    <Root>
      <Wrapper>
        <Navbar>
          <OptionLeft>
            <li>
              <Link>
                <CustomSpan>Kênh người bán</CustomSpan>
              </Link>
            </li>

            <li>
              <Link>
                <CustomSpan>Trở thành Người bán Shoppe</CustomSpan>
              </Link>
            </li>
            <li>
              <Link>
                <CustomSpan>Tải ứng dụng</CustomSpan>
              </Link>
            </li>
            <li>
              <CustomSpan>Kết nối</CustomSpan>
              <Link>
                <FacebookIcon style={{ color: color.white1, fontSize: 20 }} />
              </Link>
              <Link>
                <InstagramIcon style={{ color: color.white1, fontSize: 20 }} />
              </Link>
            </li>
          </OptionLeft>

          <OptionRight>
            <li>
              <Link>
                <CustomSpan>
                  <NotificationsNoneIcon
                    style={{ color: color.white1, fontSize: 20 }}
                  />{" "}
                  Thông báo
                </CustomSpan>
              </Link>
            </li>
            <li>
              <Link>
                <CustomSpan>
                  <HelpOutlineIcon
                    style={{ color: color.white1, fontSize: 20 }}
                  />{" "}
                  Hỗ trợ
                </CustomSpan>
              </Link>
            </li>
            <li>
              <Link>
                <CustomSpan>Đăng nhập</CustomSpan>
              </Link>
            </li>
            <li>
              <Link>
                <CustomSpan>Đăng ký</CustomSpan>
              </Link>
            </li>
          </OptionRight>
        </Navbar>

        <Searchbar>
          <Link>
            <Logo src={logoShopee}></Logo>
          </Link>
          <WrapSearch>
            <SearchForm>
              <input placeholder="Perfect diary giảm đến 50%"></input>
              <CustomButton type="submit">
                <SearchIcon style={{ fontSize: 20 }} />
              </CustomButton>
            </SearchForm>
            <ListCategory>
              <li>
                <Link>
                  <Category>Áo Khoác</Category>
                </Link>
              </li>
              <li>
                <Link>
                  <Category>Balo</Category>
                </Link>
              </li>
              <li>
                <Link>
                  <Category>Váy</Category>
                </Link>
              </li>
              <li>
                <Link>
                  <Category>Quần</Category>
                </Link>
              </li>
              <li>
                <Link>
                  <Category>Bông Tẩy Trang</Category>
                </Link>
              </li>
              <li>
                <Link>
                  <Category>Áo Phông</Category>
                </Link>
              </li>
              <li>
                <Link>
                  <Category>Nồi Chiên Không Dầu</Category>
                </Link>
              </li>
              <li>
                <Link>
                  <Category>Bánh Trung Thu</Category>
                </Link>
              </li>
            </ListCategory>
          </WrapSearch>

          <CartIcon>
            <ShoppingCartIcon />
          </CartIcon>
        </Searchbar>
      </Wrapper>
    </Root>
  );
}
const Root = styled.header`
  width: 100vw;
  height: 17vh;
  background-color: ${theme.palette.primary.main};
  position: fixed;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 7px 0;
`;
const CustomSpan = styled.span`
  display: flex;
  align-items: center;
  color: hsla(0,0%,100%,.9);
  font-weight: 500;
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const OptionLeft = styled.ul`
  display: flex;
  align-items: center;

  li {
    padding: 0 0.5rem;
    border-right: 2px solid hsla(0, 0%, 100%, 0.22);
    &:nth-last-child(1) {
      border: none;
      display: flex;
      align-items: center;
      * {
        margin: 0 1px;
      }
    }
  }
`;
const OptionRight = styled.ul`
  display: flex;
  align-items: center;

  li {
    padding: 0 0.5rem;

    &:nth-last-child(2) {
      border-right: 2px solid hsla(0, 0%, 100%, 0.22);
      display: flex;
      align-items: center;
    }
  }
`;

const Searchbar = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 5rem;
  width: 10rem;
  object-fit: cover;
`;
const WrapSearch = styled.div`
  max-width: 70%;
  flex-grow: 1;
`;
const SearchForm = styled.form`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 100%;
  height: 2.5rem;
  padding: 2px;

  border-radius: 2px;
  input {
    flex-grow: 1;
    border: none;
    font-size: 0.9rem;
    padding: 0 1rem;
    &:hover,
    :focus,
    :active {
      outline: none;
    }
  }
`;
const CustomButton = styled(ButtonPrimary)`
  height: 100%;
  flex-shrink: 0;
`;
const CartIcon = styled(Link)`
  color: white;
  width: 10rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
const ListCategory = styled.ul`
  margin-top: 7px;
  display: flex;
  li {
    margin-right: 8px;
  }
`;
const Category = styled.span`
  color: hsla(0,0%,100%,.9);
  font-size: 0.9rem;
`;
