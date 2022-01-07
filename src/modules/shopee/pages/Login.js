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
import { SpinnerPrimary } from "../../common/components/spinner/SpinnerPrimary";
import { useSnackbar } from "notistack";
import { Card } from "@material-ui/core";
import { useLinks } from "../../common/hooks/useLinks";
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";
import { useAuth } from "../../common/contexts/AuthProvider";

export default function Login() {
  const links = useLinks();
  const history = useHistory();
  const { setUser } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const api = useShopeeApiClient();
  const login = useAsync(async (data) => {
    var formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    const result = await api.login(formData);
    if (result) {
      console.log(result);

      localStorage.setItem("access_token", result.access_token);
      localStorage.setItem("refresh_token", result.refresh_token);
      setUser(jwt_decode(result.access_token).user);
      enqueueSnackbar(t("shopee.login.messages.dangNhapThanhCong"), {
        variant: "success",
      });
      history.push(links.shopee.home());
    } else {
      enqueueSnackbar("Tài khoản hoặc mật khẩu không chính xác !", {
        variant: "error",
      });
    }
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    login.run(data);
  };
  return (
    <MainLayout>
      <HeaderLogin>
        <HeaderLeft>
          <Link to="/">
            <Logo src={Shopee2}></Logo>
          </Link>

          <LoginLabel>{t("shopee.login.labels.login")}</LoginLabel>
        </HeaderLeft>

        <Link>
          <NeedHelp>{t("shopee.login.actions.NeedHelp")}</NeedHelp>
        </Link>
      </HeaderLogin>
      <Root>
        <Wrapper>
          <CustomCard>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <LoginLabel>{t("shopee.login.labels.login")}</LoginLabel>

              <InputLogin
                autoFocus
                required
                {...register("username")}
                type="text"
                placeholder="Email đăng nhập"
              />

              <InputLogin
                {...register("password", {
                  required: "required",
                  minLength: {
                    value: 5,
                    message: "min length is 5",
                  },
                })}
                type="password"
                placeholder="Mật khẩu"
              />

              {errors.password && (
                <ErrorMessage role="alert">
                  {errors.password.message}
                </ErrorMessage>
              )}

              {login.loading ? (
                <SpinnerPrimary />
              ) : (
                <SubmitButton type="submit">
                  {t("shopee.login.labels.login")}
                </SubmitButton>
              )}

              <TextWhite>
                {t("shopee.login.labels.NewToShopee?")}
                <Link to="/register">
                  <Register>{t("shopee.login.labels.register")}</Register>
                </Link>
              </TextWhite>
            </Form>
          </CustomCard>
        </Wrapper>
      </Root>
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

const NeedHelp = styled(NormalText)`
  color: #ee4d2d;
  font-size: 0.875rem;
  margin-right: 0.9375rem;
  cursor: pointer;
`;
const Root = styled.div`
  width: 100vw;

  display: block;
  background-color: rgb(238, 77, 45);
`;
const Wrapper = styled.div`
  padding: 4rem 0;
  margin: 0 auto;
  min-height: 37rem;
  width: 60rem;
  display: flex;
  justify-content: flex-end;
  background-image: url(${BodyShopeeLogin});
`;

const LoginLabel = styled(LargeText)`
  font-size: 1.5rem;
  width: 100%;
`;
const CustomCard = styled(Card)`
  border-radius: 0.25rem;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  overflow: hidden;
  box-sizing: border-box;
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
const Register = styled(NormalText)`
  color: #ee4d2d;

  margin-right: 0.9375rem;
  cursor: pointer;
`;
