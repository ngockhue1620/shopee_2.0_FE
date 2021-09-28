import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color, spacing } from "../../../theme";
import CardCategory from "./CardCategory";
import { NormalText } from "../text/NormalText";
export default function ItemCategory(props) {

  const {listCategory} = props;

  const listFirst=listCategory.filter(item=> item.id<15);
  const listSecond=listCategory.filter(item=> item.id>14);
  return (
    <Root>
      <TextGray>DANH MỤC</TextGray>
        <ContainerCategory>
          <Category>
            {
              listFirst.map(item=>(
                <CardCategory name={item.name} img={item.image}/>
              ))    
            }
          </Category>
          <Category>
            {
              listSecond.map(item=>(
                <CardCategory name={item.name} img={item.image}/>
              ))    
            }
          </Category>
        </ContainerCategory>
    </Root>
  );
}
const ContainerCategory = styled.div`
  max-width: 1200px;
  height:300px;
  display:flex;
  flex-direction: column;
`;

const Category= styled.div`
    display: flex;
    
`;

const Root = styled.section`
  max-width: 1200px;
  height:350px;
  border:1px solid ${color.gray1};
`;
const TextGray = styled(NormalText)`
    color: ${color.gray1};
    margin:${spacing.l} 5px;
`;