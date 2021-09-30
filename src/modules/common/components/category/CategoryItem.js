import { Button } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, spacing } from "../../../theme";
export function CategoryItem(props) {

  const {name ,img} = props;

  return (
    <ContainerCategory>
          {
            <Card>
              <img src={img}/>
              <p>{name}</p>
            </Card>
          }
    </ContainerCategory>
  );
}
const ContainerCategory = styled.div`
    width:calc(100% / 10 );
    height:150px;
    display: flex;
    &:hover{
        transform: scale(1.01);
        box-shadow:  1px 1px 10px 5px ${color.graydark1};
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-right:1px solid ${color.transparent2};
    border-bottom:1px solid ${color.transparent2};
    p{
      text-align: center;
      font-size: 14px;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
    }
`;