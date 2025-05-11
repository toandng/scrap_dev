import { Route, Routes } from "react-router-dom";

import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import NoLayout from "../../layouts/NoLayout/NoLayout";
import ProtectedRoute from "../ProtectedRoute";
import routes from "../../routes";

import { Fragment } from "react";

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => {
        const Layout =
          route.layout === undefined ? DefaultLayout : route.layout || NoLayout;

        const Component = route.component;

        const RouteElement =
          route.protected === void 0 || route.protected
            ? ProtectedRoute
            : Fragment;

        return (
          <Route key={route.path} element={<Layout />}>
            <Route
              path={route.path}
              element={
                <RouteElement>
                  <Component />
                </RouteElement>
              }
            />
          </Route>
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
