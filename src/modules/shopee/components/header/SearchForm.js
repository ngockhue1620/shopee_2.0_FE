import styled from "styled-components";
import { ButtonPrimary } from "../../../common/components/buttons/ButtonPrimary";
import { spacing } from "../../../theme";
import SearchIcon from "@material-ui/icons/Search";
import { Card, TextField, InputAdornment } from "@material-ui/core";

export const SearchForm = (props) => {
  return (
    <Root>
      <SearchContainer>
        <SearchInput
          placeholder={props.placeholder}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {" "}
                <CustomButton type="submit">
                  <SearchIcon style={{ fontSize: 20 }} />
                </CustomButton>
              </InputAdornment>
            ),
          }}
        />
      </SearchContainer>

      <CategoryList>
        <CategoryItem>{props.placeholder}</CategoryItem>
      </CategoryList>
    </Root>
  );
};
const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 100%;

  padding: ${spacing.xs};
  border-radius: 2px;
  /* input {
    flex-grow: 1;
    border: none;
    font-size: 0.9rem;
    padding: 0 ${spacing.m};
    &:hover,
    :focus,
    :active {
      outline: none;
    }
  } */
`;
const CustomButton = styled(ButtonPrimary)`
  height: 100%;
  flex-shrink: 0;
`;
const CategoryList = styled(Card)`
  position: absolute;
  top: 3rem;
  z-index: 1;
  width: 100%;
`;
const CategoryItem = styled.div`
  padding: ${spacing.l} ${spacing.m};
  width: 100%;
`;
const SearchInput = styled(TextField)`
  width: 100%;

  div {
    &::before,
    ::after {
      display: none;
    }
    div {
      height: 100%;
    }
    input {
      font-size: 14px;
      padding: 10px ${spacing.m};
    }
  }
`;
