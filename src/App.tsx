import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, RouteComponentProps } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";
import "./App.scss";

const Routes = lazy(() => import("./routes"));

const App: () => JSX.Element = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="loader--global">
            <Loader />
          </div>
        }
      >
        <Provider store={store}>
          <BrowserRouter>
            <Route
              path="/"
              render={(props: RouteComponentProps) => (
                <ErrorBoundary {...props}>
                  <Routes {...props} />
                </ErrorBoundary>
              )}
            />
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
};

export default App;
