import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import { useAuth } from "./contexts/auth";

const Router = () => {

  const { logged } = useAuth()

  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home/>} />
          <Route
            path="/settings"
            element={<Settings />}
          />
          <Route
            path="/favorites"
            element={<Favorites/>}
          />
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="*" element={<Navigate to={logged ? "/" : "/login"} replace/>} />
    </Routes>
  );
};

export default Router;
