import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplicationsComponent from "../Applications/Applications";
import DashboardComponent from "../Dashboard/Dashboard";
import ReportsComponent from "../Reports/Reports";
import IntegrationsComponent from "../Integrations/Integrations";

type AppRouteProps = {
    children: JSX.Element
}

const AppRoutes = (props: AppRouteProps) => {
  return (
    <BrowserRouter>
        {props.children}
      <Routes>
        <Route path="dashboard" Component={DashboardComponent}></Route>
        <Route path="" Component={ApplicationsComponent}></Route>
        <Route path="reports" Component={ReportsComponent}></Route>
        <Route path="integrations" Component={IntegrationsComponent}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
