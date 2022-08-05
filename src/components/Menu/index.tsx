import * as S from "./styles"
import Logo from "../../assets/logo_patterns/logo.png";
import HomeIcon from "../../assets/icons/home.svg"

const Menu = () => {
  return (
    <S.MenuContainer>
    <img src={Logo} alt="logo" />
    <div>
      <img src={HomeIcon} alt="home" />
      <img src="" alt="settings" />
    </div>
    <img src="" alt="logout" />
  </S.MenuContainer>
  );
};

export default Menu;
