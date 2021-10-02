import { SnackbarProvider } from "notistack";
import { StylesProvider, CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router";
import "./App.css";
import { useLinks } from "./modules/common/hooks/useLinks";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./modules/theme";
import Home from "./modules/shopee/pages/Home";
import Header from "./modules/shopee/components/header/Header";
import Footer from "./modules/shopee/components/Footer";
import { useShopeeApiClient } from "./modules/shopee/hook/useShopeeApiClient";

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
              <BrowserRouter>
                <Header></Header>
                <Switch>
                  <Route path={links.shopee.home()}>
                    <Home />
                  </Route>
                </Switch>
                <Footer></Footer>
              </BrowserRouter>
            </CssBaseline>
          </ThemeProvider>
        </StylesProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
