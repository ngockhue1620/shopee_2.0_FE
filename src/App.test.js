import { getAutoCompleteByKeyword } from "./modules/shopee/components/header/SearchForm";

// etc.
describe("funtion getAutoComplete()", () => {

  it("empty", () => {
    const result = getAutoCompleteByKeyword("");
    expect(result).toBe([]);
  });
  // it("renders learn react link", () => {
  //   const linkElement = getAutoCompleteByKeyword("");
  //   expect(true).toBe(true);
  // });
});
