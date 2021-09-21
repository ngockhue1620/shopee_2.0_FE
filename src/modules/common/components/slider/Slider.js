import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { color, spacing } from "../../../theme";

export default function Slider(props) {
  const { listImage } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChangeIndex = (number) => {
    setCurrentIndex(
      (listImage.length + currentIndex + number) % listImage.length
    );
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % listImage.length);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);
  return (
    <Root url={listImage[currentIndex]}>
      <ButtonPre onClick={() => onChangeIndex(-1)}>
        <KeyboardArrowLeftIcon />
      </ButtonPre>
      <ButtonNext onClick={() => onChangeIndex(1)}>
        <KeyboardArrowRightIcon />
      </ButtonNext>
      <Bar>
        {listImage.map((img, idx) => (
          <ButtonPoint
            isCurrent={idx === currentIndex}
            onClick={() => setCurrentIndex(idx)}
          ></ButtonPoint>
        ))}
      </Bar>
    </Root>
  );
}

const CustomButton = styled(Button)`
  padding: 0;
  height: 4rem;
  min-width: 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${color.transparent1};
  display: none;
  animation-name: example;
  animation-duration: 1s;
  svg {
    color: white;
  }
`;

const ButtonPre = styled(CustomButton)`
  left: 0;
`;
const ButtonNext = styled(CustomButton)`
  right: 0;
`;
const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-image 300ms;
  &:hover {
    ${CustomButton} {
      display: flex;
    }
  }
`;
const Bar = styled.div`
  position: absolute;
  bottom: ${spacing.l};
  left: 50%;
  transform: translateX(-50%);
`;
const ButtonPoint = styled(Button)`
  padding: 5px;
  min-width: 5px;
  height: 1px;
  border-radius: 100%;
  background-color: ${(props) => (props.isCurrent ? color.orange1 : "white")};
  opacity: 0.5;
  margin: 0 ${spacing.s};
`;
