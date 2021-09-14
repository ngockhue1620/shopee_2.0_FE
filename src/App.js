import { SnackbarProvider } from "notistack";
import { StylesProvider, CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router";
import "./App.css";
import { useLinks } from "./modules/common/hooks/useLinks";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./modules/theme";
import Home from "./modules/shopee/pages/Home";
import Header from "./modules/shopee/components/Header";

function App() {
  const links = useLinks().common;
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <StylesProvider injectFirst>
          <CssBaseline>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <Header></Header>
                <Switch>
                  <Route path={links.home}>
                    <Home />
                  </Route>
                </Switch>
              </BrowserRouter>
            </ThemeProvider>
          </CssBaseline>
        </StylesProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
