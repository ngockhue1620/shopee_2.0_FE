import React, { useEffect, useState } from "react";
import { EmptyLayout } from "../../common/layouts/EmptyLayout";
import styled from "styled-components";
import { useShopeeApiClient } from "../hooks/useShopeeApiClient";
import useAsync from "../../common/hooks/useAsync";
import ItemCategory from "../../common/components/category/ItemCategory";

export default function Category() {
  const [listCategory,setListCategory]= useState([]);

  useEffect(()=>{
    const axios = require('axios');
    axios.get('https://shopee20.herokuapp.com/api/v1/categories/')
      .then(function (response) {
          setListCategory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  },[])


  return (
    <EmptyLayout>
      <Root>
          <ItemCategory listCategory={listCategory} />
      </Root>
    </EmptyLayout>
  );
}
const Root = styled.main`
  max-width: 1200px;
  margin: auto;
  padding-top: 20vh;
`;
