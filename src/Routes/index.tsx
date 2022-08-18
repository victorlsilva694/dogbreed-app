import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextAuth } from "../Contexts/UserContext";
import List from "../Pages/List/List";
import PrivateToken from "./PrivateToken";

export function PrivateRoute(props: any) {
  const navigate = useNavigate();    
  var token = localStorage.getItem("token");
  const tokenUser = useContext(ContextAuth);
    if (!tokenUser.isAuthenticated) {
      return <h1>a</h1>
    }
  return props.children;
}
function Router() {
  const [route, setRoute] = useState("/list");
  const location = useLocation();

  useEffect(() => {
    setRoute(location.pathname);
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<Home />} path="/" />
      {location.pathname === "/list" ? (
        <>
          <Route
            element={
              <PrivateRoute>
                <List />
              </PrivateRoute>
            }
            path="/list"
          />
        </>
      ) : (
        <>
          <Route element={<h1>Rota inexistente</h1>} path="/" />
        </>
      )}
      {location.pathname === "/list/pug" ? (
        <>
          <Route
            element={
              <PrivateRoute>
                <List />
              </PrivateRoute>
            }
            path="/list/pug"
          />
        </>
      ) : (
        <>
          <Route element={<h1>Rota inexistente</h1>} path="/" />
        </>
      )}
      {location.pathname === "/list/husky" ? (
        <>
          <Route
            element={
              <PrivateRoute>
                <List />
              </PrivateRoute>
            }
            path="/list/husky"
          />
        </>
      ) : (
        <>
          <Route element={<h1>Rota inexistente</h1>} path="/" />
        </>
      )}
      {location.pathname === "/list/labrador" ? (
        <>
          <Route
            element={
              <PrivateRoute>
                <List />
              </PrivateRoute>
            }
            path="/list/labrador"
          />
        </>
      ) : (
        <>
          <Route element={<h1>Rota inexistente</h1>} path="/" />
        </>
      )}
    </Routes>
  );
}

export default observer(Router);
