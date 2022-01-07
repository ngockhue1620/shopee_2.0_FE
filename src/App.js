import { SnackbarProvider } from "notistack";
import { StylesProvider, CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router";
import { Provider, useDispatch } from "react-redux";
import "./App.css";
import { useLinks } from "./modules/common/hooks/useLinks";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./modules/theme";
import Home from "./modules/shopee/pages/Home";
import Footer from "./modules/shopee/components/Footer";
import { useShopeeApiClient } from "./modules/shopee/hooks/useShopeeApiClient";
import Login from "./modules/shopee/pages/Login";
import Register from "./modules/shopee/pages/Register";
import { AuthProvider } from "./modules/common/contexts/AuthProvider";
import store from "./store/index";
import { ProductPage } from "./modules/shopee/pages/ProductPage";
import { ProductDetail } from "./modules/shopee/pages/ProductDetail";
import { Cart } from "./modules/shopee/pages/Cart";
import { useEffect } from "react";
import { cartActions } from "./store/cart-slice";
import useAsync from "./modules/common/hooks/useAsync";
import { HistoryOrder } from "./modules/shopee/pages/HistoryOrder";

function App() {
  const links = useLinks();
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <AuthProvider>
                <BrowserRouter>
                  <Switch>
                    <Route exact path={links.shopee.home()}>
                      <Home />
                    </Route>
                    <Route path={links.shopee.login()}>
                      <Login />
                    </Route>
                    <Route path={links.shopee.register()}>
                      <Register />
                    </Route>
                    <Route path={links.shopee.products()}>
                      <ProductPage />
                    </Route>
                    <Route path={links.shopee.productDetail()}>
                      <ProductDetail />
                    </Route>
                    <Route path={links.shopee.cart()}>
                      <Cart />
                    </Route>
                    <Route path="/order">
                      <HistoryOrder />
                    </Route>
                  </Switch>
                  <Footer></Footer>
                </BrowserRouter>
              </AuthProvider>
            </CssBaseline>
          </ThemeProvider>
        </StylesProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
