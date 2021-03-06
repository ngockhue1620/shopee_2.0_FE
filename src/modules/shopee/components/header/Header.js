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
import { Avatar, Badge, Menu, MenuItem } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useAuth } from "../../../common/contexts/AuthProvider";

export const Header = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const links = useLinks();
  const cart = useSelector((state) => state.cart);
  const { user, setUser } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    history.push('/order')
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    history.push("/login");
  };

  return (
    <Root>
      <Wrapper>
        <Navbar>
          <OptionLeft>
            <li>
              <a
                href="https://banhang.shopee.vn/portal/onboarding/"
                target="blank"
              >
                <TextWhite>{t("shopee.header.actions.kenhNguoiBan")}</TextWhite>
              </a>
            </li>

            <li>
              <a href="https://shopee.vn/web" target="blank ">
                <TextWhite>{t("shopee.header.actions.taiUngDung")}</TextWhite>
              </a>
            </li>
            <li>
              <TextWhite>{t("shopee.header.labels.ketNoi")}</TextWhite>
              <a target="blank" href="https://www.facebook.com/ShopeeVN">
                <FacebookIcon style={{ color: color.white1, fontSize: 20 }} />
              </a>
              <a target="blank" href="https://www.instagram.com/Shopee_VN/">
                <InstagramIcon style={{ color: color.white1, fontSize: 20 }} />
              </a>
            </li>
          </OptionLeft>

          <OptionRight>
            <li>
              <Link to="#">
                <TextWhite>
                  <NotificationsNoneIcon
                    style={{ color: color.white1, fontSize: 20 }}
                  />{" "}
                  {t("shopee.header.actions.thongBao")}
                </TextWhite>
              </Link>
            </li>
            <li>
              <a href="https://help.shopee.vn/vn/s/" target="blank">
                <TextWhite>
                  <HelpOutlineIcon
                    style={{ color: color.white1, fontSize: 20 }}
                  />
                  {t("shopee.header.actions.hoTro")}
                </TextWhite>
              </a>
            </li>
            {user ? (
              <>
                <UserInfo onClick={handleClick}>
                  <CustomAvatar>
                    {user.avatar ? (
                      <img src={user.avatar} />
                    ) : (
                      user.first_name[0]?.toUpperCase()
                    )}
                  </CustomAvatar>
                  <TextWhite>
                    {`${user.first_name} ${user.last_name}`}
                  </TextWhite>
                </UserInfo>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>T??i kho???n c???a t??i</MenuItem>
                  <MenuItem onClick={handleClose}>????n mua</MenuItem>
                  <MenuItem onClick={handleLogout}>????ng xu???t</MenuItem>
                </Menu>
              </>
            ) : (
              <>
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
              </>
            )}
          </OptionRight>
        </Navbar>

        <Searchbar>
          <Link to={links.shopee.home()}>
            <Logo src={shopee} />
          </Link>
          <WrapSearch>
            <SearchForm
              placeholder={t("shopee.header.labels.shopeePay&DichVuTienIch")}
            />
            <ListCategory>
              <li>
                <Link to="#">
                  <CustomSmallestText>??o Kho??c</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <CustomSmallestText>Balo</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <CustomSmallestText>V??y</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <CustomSmallestText>Qu???n</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <CustomSmallestText>B??ng T???y Trang</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <CustomSmallestText>??o Ph??ng</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <CustomSmallestText>N???i Chi??n Kh??ng D???u</CustomSmallestText>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <CustomSmallestText>B??nh Trung Thu</CustomSmallestText>
                </Link>
              </li>
            </ListCategory>
          </WrapSearch>

          <CartIcon to={links.shopee.cart()}>
            <CustomBadge badgeContent={cart.length}>
              <ShoppingCartIcon />
            </CustomBadge>
          </CartIcon>
        </Searchbar>
      </Wrapper>
    </Root>
  );
};
const Root = styled.header`
  width: 100vw;
  background-color: ${color.orange1};
  position: sticky;
  top: 0;
  z-index: 100;
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
const CustomBadge = styled(Badge)`
  & > span {
    background-color: white;
    color: ${color.orange1};
    border: 1px solid ${color.orange1};
  }
`;
const CustomAvatar = styled(Avatar)`
  width: 20px;
  height: 20px;
  font-size: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const UserInfo = styled.div`
  display: flex;
  gap: 5px;
  padding: 0 5px;
  align-items: center;
`;
