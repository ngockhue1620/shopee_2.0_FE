import { Button } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, spacing } from "../../../theme";
export default function CardCategory(props) {

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
    width:200px;
    height:150px;
    display: flex;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-right:1px solid ${color.gray1};
    border-top:1px solid ${color.gray1};
    img{
        object-fit: center;
        width:120px;
    }
    p{
      text-align: center;
      font-size: 14px;
    }
`;