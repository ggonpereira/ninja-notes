import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";

import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#2196f3",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Notes} />
            <Route path="/create" component={Create} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Routes;
