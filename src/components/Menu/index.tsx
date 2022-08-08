import * as S from "./styles"
import Logo from "../../assets/logo_patterns/logo.png";

const Menu = () => {
  return (
    <S.MenuContainer>
    <img src={Logo} alt="logo" />
    <div>
      <img src='' alt="home" />
      <img src="" alt="settings" />
    </div>
    <img src="" alt="logout" />
  </S.MenuContainer>
  );
};

export default Menu;
