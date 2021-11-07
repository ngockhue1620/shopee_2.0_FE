import styled from "styled-components";
import { ButtonPrimary } from "../../../common/components/buttons/ButtonPrimary";
import { color, spacing } from "../../../theme";
import SearchIcon from "@material-ui/icons/Search";
import { Card, TextField, InputAdornment } from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const getAutoCompleteByKeyword = (keyword, categories) => {
  const searchKeyLower = keyword.trim().toLowerCase();
  if (!searchKeyLower) return [];
  else {
    return categories
      .map((x) => x.name)
      .filter((x) => x.toLowerCase().startsWith(searchKeyLower));
  }
};
export const SearchForm = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);
  const [isFocus, setIsFocus] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [autoCompletes, setAutoCompletes] = useState([]);
  const { register, handleSubmit, reset, getValues } = useForm();

  const onFocus = () => setIsFocus(true);

  const onBlur = () => setIsFocus(false);

  const onChange = (e) => {
    setSearchKey(e.target.value);
  };

  const onSubmit = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    setAutoCompletes(getAutoCompleteByKeyword(searchKey, categories));
  }, [searchKey]);

  return (
    <Root>
      <SearchContainer onSubmit={handleSubmit(onSubmit)}>
        <SearchInput
          autoComplete="off"
          {...register("searchKey")}
          value={searchKey}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={props.placeholder}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CustomButton type="submit">
                  <SearchIcon style={{ fontSize: 20 }} />
                </CustomButton>
              </InputAdornment>
            ),
          }}
        />
      </SearchContainer>
      {isFocus && (
        <CategoryList>
          <CategoryItem>
            {searchKey ? (
              <>
                <StorefrontIcon color="primary" />
                {t("shopee.header.labels.timShop")} "{searchKey.trim()}"
              </>
            ) : (
              props.placeholder
            )}
          </CategoryItem>

          {autoCompletes.slice(0, 10).map((text) => (
            <CategoryItem>{text}</CategoryItem>
          ))}
        </CategoryList>
      )}
    </Root>
  );
};
const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const SearchContainer = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 100%;
  padding: ${spacing.xs};
  border-radius: 2px;
`;
const CustomButton = styled(ButtonPrimary)`
  height: 100%;
  flex-shrink: 0;
`;
const CategoryList = styled(Card)`
  position: absolute;
  top: 3rem;
  z-index: 1;
  width: calc(100% - 80px);
  cursor: pointer;
`;
const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${spacing.l} ${spacing.m};
  width: 100%;
  text-transform: lowercase;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  &:first-child {
    text-transform: none;
    svg {
      margin-right: ${spacing.m};
    }
  }
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
