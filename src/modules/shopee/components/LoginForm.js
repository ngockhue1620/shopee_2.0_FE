import { Input } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { LargeText } from "../../common/components/text/LargeText";

export default function LoginForm({ login }) {
  const { t } = useTranslation();
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

  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <LoginLabel>{t("shopee.login.label.login")}</LoginLabel>

      <InputLogin
        id="email"
        aria-invalid={errors.email ? "true" : "false"}
        {...register("email", {
          required: "required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
          },
        })}
        type="email"
        placeholder="Email đăng nhập"
      />
      {errors.email && (
        <ErrorMessage role="alert">{errors.email.message}</ErrorMessage>
      )}
      <div>
        <InputLogin
          id="password"
          aria-invalid={errors.passward ? "true" : "false"}
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
      </div>
      {errors.password && (
        <ErrorMessage role="alert">{errors.password.message}</ErrorMessage>
      )}

      <SubmitButton type="submit">ĐĂNG NHẬP</SubmitButton>
    </Form>
  );
}

const LoginLabel = styled(LargeText)`
  font-size: 1.5rem;
  width: 100%;
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
