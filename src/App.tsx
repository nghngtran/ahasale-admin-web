import React, { Suspense } from "react";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme";
import Toast from "./Toast";
import { ThemeProvider } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import Report from "./pages/Report";
import { QueryClient, QueryClientProvider } from "react-query";
import Spin from "./ui/Spin";
import Home from "./pages/Home";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={1}>
        <Toast />

        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Spin loading />}>
            <Router>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Report} />
                <Route exact path="/" component={Home} />
              </Switch>
            </Router>
          </Suspense>
        </QueryClientProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
