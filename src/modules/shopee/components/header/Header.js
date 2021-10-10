import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, spacing, theme } from "../../../theme";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";
import { ButtonPrimary } from "../../../common/components/buttons/ButtonPrimary";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import shopee from "../../../../assets/images/shopee.jpg";
import { SmallText } from "../../../common/components/text/SmallText";
import { SmallestText } from "../../../common/components/text/SmallestText";
import { useTranslation } from "react-i18next";
import { SearchForm } from "./SearchForm";
import { useLinks } from "../../../common/hooks/useLinks";

export const Header = () => {
  const { t } = useTranslation();
  const links = useLinks();
  return (
    <Root>
      <Wrapper>
        <Navbar>
          <OptionLeft>
            <li>
              <Link>
                <TextWhite>{t("shopee.header.actions.kenhNguoiBan")}</TextWhite>
              </Link>
            </li>

            <li>
              <Link>
                <TextWhite>
                  {t("shopee.header.actions.troThanhNguoiBanShopee")}
                </TextWhite>
              </Link>
            </li>
            <li>
              <Link>
                <TextWhite>{t("shopee.header.actions.taiUngDung")}</TextWhite>
              </Link>
            </li>
            <li>
              <TextWhite>{t("shopee.header.labels.ketNoi")}</TextWhite>
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
                <TextWhite>
                  <NotificationsNoneIcon
                    style={{ color: color.white1, fontSize: 20 }}
                  />{" "}
                  {t("shopee.header.actions.thongBao")}
                </TextWhite>
              </Link>
            </li>
            <li>
              <Link>
                <TextWhite>
                  <HelpOutlineIcon
                    style={{ color: color.white1, fontSize: 20 }}
                  />{" "}
                  {t("shopee.header.actions.hoTro")}
                </TextWhite>
              </Link>
            </li>
            <li>
              <Link to={links.shopee.login()}>
                <TextWhite>{t("shopee.header.actions.dangNhap")}</TextWhite>
              </Link>
            </li>
            <li>
              <Link to={links.shopee.register()}>
                <TextWhite>{t("shopee.header.actions.dangKy")}</TextWhite>
              </Link>
            </li>
          </OptionRight>
        </Navbar>

        <Searchbar>
          <Link>
            {/* <ShopeeImage/> */}
            <Logo src={shopee} />
          </Link>
          <WrapSearch>
            <SearchForm
              placeholder={t("shopee.header.labels.shopeePay&DichVuTienIch")}
            />
            <ListCategory>
              <li>
                <Link>
                  <CustomSmallestText>Áo Khoác</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link>
                  <CustomSmallestText>Balo</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link>
                  <CustomSmallestText>Váy</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link>
                  <CustomSmallestText>Quần</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link>
                  <CustomSmallestText>Bông Tẩy Trang</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link>
                  <CustomSmallestText>Áo Phông</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link>
                  <CustomSmallestText>Nồi Chiên Không Dầu</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link>
                  <CustomSmallestText>Bánh Trung Thu</CustomSmallestText>
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
};
const Root = styled.header`
  width: 100vw;

  background-color: ${color.orange1};
  position: fixed;
  z-index: 999999;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: ${spacing.m} 0;
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Option = styled.ul`
  display: flex;
  align-items: center;
  li {
    padding: 0 ${spacing.m};
    &:hover {
      opacity: 0.7;
    }
  }
`;
const OptionLeft = styled(Option)`
  li {
    &:nth-last-child(1) {
      border: none;
      display: flex;
      align-items: center;
      * {
        margin: 0 ${spacing.xxs};
      }
    }
  }
`;
const OptionRight = styled(Option)`
  li {
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
  margin-top: ${spacing.m};
  display: flex;
  li {
    margin-right: ${spacing.m};
  }
`;

const TextWhite = styled(SmallText)`
  color: white;
  display: flex;
  align-items: center;
  svg {
    margin-right: ${spacing.s};
  }
`;

const CustomSmallestText = styled(SmallestText)`
  color: white;
`;
