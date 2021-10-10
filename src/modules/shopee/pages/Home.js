import React, { useEffect, useState } from "react";
import { EmptyLayout } from "../../common/layouts/EmptyLayout";
import { HeaderLayout } from "../layouts/HeaderLayout";
import styled from "styled-components";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.png";
import slider4 from "../../../assets/images/slider4.png";
import slider5 from "../../../assets/images/slider5.png";
import slider6 from "../../../assets/images/slider6.png";
import slider7 from "../../../assets/images/slider7.png";
import slider8 from "../../../assets/images/slider8.png";
import slider9 from "../../../assets/images/slider9.png";
import slider10 from "../../../assets/images/slider10.png";
import slider11 from "../../../assets/images/slider11.png";
import slider13 from "../../../assets/images/slider13.png";
import slider14 from "../../../assets/images/slider14.png";
import slider15 from "../../../assets/images/slider15.png";
import slider16 from "../../../assets/images/slider16.png";
import Slider from "../../common/components/slider/Slider";
import { useShopeeApiClient } from "../hooks/useShopeeApiClient";
import useAsync from "../../common/hooks/useAsync";
import { ListCategory } from "../components/category/ListCategory";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../../store/category-slice";
import { useSelector } from "react-redux";

const listImage = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
  slider9,
  slider10,
  slider11,
  slider13,
  slider14,
  slider15,
  slider16,
];
export default function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);
  const api = useShopeeApiClient();
  const getCategory = useAsync(async () => {
    const result = await api.getCategory();

    if (result) {
      dispatch(categoryActions.setCategory(result));
    }
  }, true);
  return (
    <EmptyLayout>
      <HeaderLayout>
        <Root>
          <ContainerSlider>
            <Slider listImage={listImage}></Slider>
          </ContainerSlider>
          <ListCategory list={categories}></ListCategory>
        </Root>
      </HeaderLayout>
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
  display: flex;
  flex-direction: column;
`;
