import { render, screen } from "@testing-library/react";
import App from "./App";
import { CartItem } from "./modules/shopee/components/cart/CartItem";
import { Provider } from "react-redux";
import { shallow, Enzyme } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import store from "./store";
Enzyme.configure({ adapter: new Adapter() });
describe("test", () => {
  it("renders learn react link", () => {
    // render(<CartItem />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
