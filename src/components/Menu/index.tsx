import * as S from "./styles";
import Logo from "../../assets/logo_patterns/logo.png";
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface MenuProps {
  path: "home" | "settings"
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({path, setLogged}: MenuProps) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    setLogged(false)
    navigate('/login')
  }

  return (
    <S.MenuContainer>
      <img src={Logo} alt="logo" />
      <nav>
        <S.MenuItem active={path === "home"}>
          <S.MenuItemButton active={path === "home"}>
            <HomeIcon />
          </S.MenuItemButton>
        </S.MenuItem>
        <S.MenuItem active={path === "settings"}>
          <S.MenuItemButton active={path === "settings"}>
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
