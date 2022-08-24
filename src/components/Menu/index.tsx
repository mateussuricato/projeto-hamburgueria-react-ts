import * as S from "./styles";
import Logo from "../../assets/logo_patterns/logo.png";
import { HomeIcon, SettingsIcon, LogoutIcon, FavIcon} from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

interface MenuProps {
  path: "home" | "settings" | "favorites";
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ path, setLogged }: MenuProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear()
    setLogged(false);
    navigate("/");
    toast.success("Logout bem sucedido")
  };

  return (
    <S.MenuContainer>
      <img src={Logo} alt="logo" />
      <nav>
        <S.MenuItem active={path === "home"}>
          <S.MenuItemButton
            onClick={() => navigate("/home")}
            active={path === "home"}
          >
            <HomeIcon />
          </S.MenuItemButton>
        </S.MenuItem>
        <S.MenuItem active={path === "favorites"}>
          <S.MenuItemButton
            onClick={() => navigate("/favorites")}
            active={path === "favorites"}
          >
            <FavIcon />
          </S.MenuItemButton>
        </S.MenuItem>
        <S.MenuItem active={path === "settings"}>
          <S.MenuItemButton
            onClick={() => navigate("/settings")}
            active={path === "settings"}
          >
            <SettingsIcon />
          </S.MenuItemButton>
        </S.MenuItem>
      </nav>
      <S.MenuItem logout>
        <S.MenuItemButton onClick={handleLogout}>
          <LogoutIcon />
        </S.MenuItemButton>
      </S.MenuItem>
    </S.MenuContainer>
  );
};

export default Menu;
