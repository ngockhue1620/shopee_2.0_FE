import styled from "styled-components";
import BodyShopeeLogin from "../../../assets/images/BodyShopeeLogin.png";
import LoginForm from "./LoginForm";
import { useTranslation } from "react-i18next";
export default function BodyLogin() {
  const { t } = useTranslation();
  return (
    <Root>
      <Wrapper>
        <LoginForm></LoginForm>
      </Wrapper>
    </Root>
  );
}
const Root = styled.div`
  width: 100vw;

  display: block;
  background-color: rgb(238, 77, 45);
`;
const Wrapper = styled.div`
  background-color: blue;
  margin: 0 auto;
  min-height: 37.2rem;
  width: 60rem;
  display: flex;
  justify-content: flex-end;
  background-image: url(${BodyShopeeLogin});
`;
