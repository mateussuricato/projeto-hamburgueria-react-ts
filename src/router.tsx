import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import { useState } from "react";
import Settings from "./pages/Settings";

const Router = () => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <Routes>
      <Route path="/home" element={<Home setLogged={setLogged} />} />
      <Route path="/settings" element={<Settings setLogged={setLogged} />} />
      <Route path="/" element={<Login setLogged={setLogged} />} />
      <Route path="/favorites" element={<Favorites setLogged={setLogged} />} />
    </Routes>
  );
};

export default Router;
