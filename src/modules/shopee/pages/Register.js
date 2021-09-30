import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import styled from "styled-components";
import Shopee2 from "../../../assets/images/shopee2.png";
import { useTranslation } from "react-i18next";
import { LargeText } from "../../common/components/text/LargeText";
import { NormalText } from "../../common/components/text/NormalText";
import { Link } from "react-router-dom";
import BodyShopeeLogin from "../../../assets/images/BodyShopeeLogin.png";
import { useShopeeApiClient } from "../hooks/useShopeeApiClient";
import useAsync from "../../common/hooks/useAsync";
import { useForm } from "react-hook-form";
export default function Register() {
  const { t } = useTranslation();
  const api = useShopeeApiClient();
  const login = useAsync(async (data) => {
    const result = await api.login(data);
    if (result) {
    }
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    await login(data.email, data.password);
    reset();
  };
  return (
    <MainLayout>
      <HeaderRegister>
        <HeaderLeft>
          <Logo src={Shopee2}></Logo>
          <LoginLabel>{t("shopee.login.labels.register")}</LoginLabel>
        </HeaderLeft>

        <Link>
          {" "}
          <NeedHelp>{t("shopee.login.actions.NeedHelp")}</NeedHelp>
        </Link>
      </HeaderRegister>
      <BodyRegister>
        <Wrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <LoginLabel>{t("shopee.login.labels.register")}</LoginLabel>

            <InputLogin
              id="email"
              aria-invalid={errors.email ? "true" : "false"}
              type="email"
              placeholder="Email đăng nhập"
            />

            <InputLogin
              id="password"
              aria-invalid={errors.passward ? "true" : "false"}
              type="password"
              placeholder="Mật khẩu"
            />

            <SubmitButton type="submit">
              {t("shopee.login.labels.register")}
            </SubmitButton>
            <TextWhite>
              {t("shopee.login.labels.HadAnAccount?")}
              <Link to="/login">
                <Login>{t("shopee.login.labels.login")}</Login>
              </Link>
            </TextWhite>
          </Form>
        </Wrapper>
      </BodyRegister>
    </MainLayout>
  );
}
const HeaderRegister = styled.nav`
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

const BodyRegister = styled.div`
  width: 100vw;

  display: block;
  background-color: rgb(238, 77, 45);
`;
const Wrapper = styled.div`
  margin: 0 auto;
  min-height: 37.2rem;
  width: 60rem;
  display: flex;
  justify-content: flex-end;
  background-image: url(${BodyShopeeLogin});
`;

const Form = styled.form`
  display: block;
  background-color: #fff;
  width: 24.8125rem;
  border-radius: 0.25rem;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
  padding: 34px;
  margin: 60px 0;
`;
const InputLogin = styled.input`
  width: 100%;
  padding: 10px 19px;
  margin: 20px 0;
  cursor: text;
`;
const SubmitButton = styled.button`
  color: #fff;
  background-color: #ee4d2d;
  box-shadow: 0 1px 1px rgb(0 0 0 / 9%);
  height: 2.5rem;
  width: 100%;
  border: none;
  &:hover {
    background-color: #ff3b13;
  }
  margin: 36px 0;
`;
const ErrorMessage = styled.div`
  color: red;
`;
const TextWhite = styled.p`
  font-family: sans-serif;
  text-align: center;
  color: rgba(0, 0, 0, 0.26);
`;
const Login = styled(NormalText)`
  color: #ee4d2d;

  margin-right: 0.9375rem;
  cursor: pointer;
`;
