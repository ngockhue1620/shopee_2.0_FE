import React, { useEffect, useState } from "react";
import { EmptyLayout } from "../../layouts/EmptyLayout";
import styled from "styled-components";
import { color, spacing } from "../../../theme";
import useAsync from "../../hooks/useAsync";
import {CategoryItem } from "./CategoryItem";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { NormalText } from "../text/NormalText";
import { useShopeeApiClient } from "../../../shopee/hooks/useShopeeApiClient";
import { IconButton ,Card} from "@material-ui/core";
import { useTranslation } from "react-i18next";

export function ListCategory() {
  const { t } = useTranslation();
  const [listCategory,setListCategory]= useState([]);
  const [currentIndex,setCurrentIndex]= useState(0);

  const maxIndex=Math.ceil(listCategory.length/2);
  
  const nextIndex=()=>{
      
      const newIndex=currentIndex+10;//10
      
      setCurrentIndex(newIndex+10>maxIndex?(newIndex-((newIndex+10)-maxIndex)):newIndex); 
  }

  const lastIndex=()=>{
    const newIndex=currentIndex-10;// -7
    setCurrentIndex(newIndex<0?0:newIndex);
}

  const api = useShopeeApiClient();
  const getCategory = useAsync(async () => {
    const result = await api.getCategory();
    if (result) {
      setListCategory(result);
    }
  },true);

  return (
      <Root>
            <TextGray>{t("shopee.listCategory.labels.danhMuc")}</TextGray>
          <Container>
                <ButtonLeft isInvisible={currentIndex === 0}  onClick={lastIndex}>
                  <ChevronLeftIcon>
                  </ChevronLeftIcon>
                </ButtonLeft>
            <Wrapper>
              <ContainerCategory translateX={-currentIndex*120}>
                  {
                    listCategory.map(item=>(
                      <CategoryItem name={item.name} img={item.image}/>
                    ))    
                  }
              </ContainerCategory>
            </Wrapper>
                <ButtonRight isInvisible={currentIndex === maxIndex-10} onClick={nextIndex}>
                  <ChevronRightIcon>
                  </ChevronRightIcon>
                </ButtonRight>
          </Container>
      </Root>
  );
}
const Root = styled(Card)`
  width: 100%;
  display:flex;
  flex-direction: column;
  margin: 1rem 0;
  border-radius:0;
  box-shadow:none;
  overflow:visible;
`;


const ContainerCategory = styled.div`
  width:100%;
  height:300px;
  transform:translateX(${ props => props.translateX}px);
  display:flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  transition:transform 0.5s;
  &:hover{
    transform:translateX(${ props => props.translateX}px);
  }
  `;

const TextGray = styled(NormalText)`
    color: ${color.gray1};
    padding:${spacing.l};
    border-bottom:1px solid ${color.transparent2};
    `;

const ChangeCategoryButton= styled(IconButton)`
  position: absolute;
  width:25px;
  height:25px;
  border:1px solid ${color.graylight1};
  box-shadow: 1px 1px 6px 2px  ${color.transparent2};
  background:${color.white1};
  top:50%;
  transition: width height .5s ;
  z-index:9999;
  svg{
    font-size: 20px;
  }
  display: ${props => props.isInvisible && "none"};
  `;

const ButtonLeft = styled(ChangeCategoryButton)`
  left:0;
  transform: translate(-50%,-50%);
  
  `;

const ButtonRight = styled(ChangeCategoryButton)`
  right:0;
  transform: translate(50%,-50%);
  `;

const Wrapper = styled.div`
  width: 100%;
  position:relative;
  overflow:hidden;
  
  `;

  const Container=styled.div`
      width:100%;
      position:relative;
      &:hover{
      ${ChangeCategoryButton}{
        width:50px;
              height:50px;
              svg{
                font-size: 40px;
              }
          }
      }
  `;