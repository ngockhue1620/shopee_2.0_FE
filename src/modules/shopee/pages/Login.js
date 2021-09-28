import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import styled from "styled-components";
import Shopee2 from "../../../assets/images/shopee2.png";
import { useTranslation } from "react-i18next";
import { LargeText } from "../../common/components/text/LargeText";
import { NormalText } from "../../common/components/text/NormalText";
import { Link } from "react-router-dom";
import BodyLogin from "../components/BodyLogin";

export default function Login() {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <HeaderLogin>
        <HeaderLeft>
          <Logo src={Shopee2}></Logo>
          <LoginLabel>{t("shopee.login.label.login")}</LoginLabel>
        </HeaderLeft>

        <Link>
          {" "}
          <NeedHelp>{t("shopee.login.action.NeedHelp")}</NeedHelp>
        </Link>
      </HeaderLogin>
      <BodyLogin></BodyLogin>
    </MainLayout>
  );
}
const HeaderLogin = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.img`
  width: 60px;
  height: 90px;
  margin-right: 40px;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const LoginLabel = styled(LargeText)`
  font-size: 1.5rem;
`;
const NeedHelp = styled(NormalText)`
  color: #ee4d2d;
  font-size: 0.875rem;
  margin-right: 0.9375rem;
  cursor: pointer;
`;
