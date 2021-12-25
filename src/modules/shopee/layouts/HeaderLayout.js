import { useEffect } from "react";
import styled from "styled-components";
import { Header } from "../components/header/Header";

// Layout for pages have header
export const HeaderLayout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Header />
      <Root> {props.children}</Root>
    </Layout>
  );
};

const Layout = styled.div``;
const Root = styled.main`
  padding: 150px 0;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
