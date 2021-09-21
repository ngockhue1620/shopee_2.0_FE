import React, { useEffect, useState } from "react";
import { EmptyLayout } from "../../common/layouts/EmptyLayout";
import styled from "styled-components";
import slider1 from "../../../assets/images/slider1.jpg";
import Slider from "../../common/components/slider/Slider";
import { useShopeeApiClient } from "../hooks/useShopeeApiClient";
import useAsync from "../../common/hooks/useAsync";

const listImage = [slider1];
export default function Home() {
  return (
    <EmptyLayout>
      <Root>
        <ContainerSlider>
          <Slider listImage={listImage}></Slider>
        </ContainerSlider>
      </Root>
    </EmptyLayout>
  );
}
const ContainerSlider = styled.div`
  max-width: 800px;
  height: 250px;
`;
const Root = styled.main`
  max-width: 1200px;
  margin: auto;
  padding-top: 20vh;
`;
