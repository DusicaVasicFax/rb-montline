import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Layout>
        <Switch>
          {routes.map((routeItem) => {
            return (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                exact={routeItem.exact}
                component={lazy(() => import(`../pages/${routeItem.component}`))}
              />
            );
          })}
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default Router;
