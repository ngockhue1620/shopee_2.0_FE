import { SnackbarProvider } from "notistack";
import { StylesProvider, CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";
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

function App() {
  const links = useLinks();
  const api = useShopeeApiClient();
  api.getCategory();
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <Provider store={store}>
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
                    </Switch>
                    <Footer></Footer>
                  </BrowserRouter>
                </AuthProvider>
              </Provider>
            </CssBaseline>
          </ThemeProvider>
        </StylesProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
