import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Slider(props) {
  const { listImage } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    // console.log(listImage);
    setInterval(() => {
      setCurrentIndex(currentIndex % listImage.length);
    }, 3000);
  }, []);
  return <Root url={listImage[currentIndex]}></Root>;
}
const Root = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
`;
