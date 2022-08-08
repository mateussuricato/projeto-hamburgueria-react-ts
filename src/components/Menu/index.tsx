import * as S from "./styles";
import Logo from "../../assets/logo_patterns/logo.png";
import { HomeIcon, SettingsIcon, LogoutIcon } from "../../assets/icons";

interface MenuProps {
  path: "home" | "settings"
}

const Menu = ({path}: MenuProps) => {
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
        <S.MenuItemButton>
          <LogoutIcon />
        </S.MenuItemButton>
      </S.MenuItem>
    </S.MenuContainer>
  );
};

export default Menu;