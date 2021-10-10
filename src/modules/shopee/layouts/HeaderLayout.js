import styled from "styled-components";
import { Header } from "../components/header/Header";

// Layout for pages have header
export const HeaderLayout = (props) => {
  return (
    <Layout>
      <Header />
      <Root> {props.children}</Root>
    </Layout>
  );
};

const Layout = styled.div``;
const Root = styled.main`
  padding-top: 150px;
`;
