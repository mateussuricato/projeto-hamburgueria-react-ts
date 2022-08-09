import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles"
import logo from "../../assets/logo_patterns/logo.png"

const Login = () => {
  return (
    <S.LoginPageContainer>
      <S.LoginFormContainer>
        <S.LoginLogoContainer>
            <h1>Burguer Fresh</h1>
            <img src={logo} alt="logo" />
        </S.LoginLogoContainer>
        <Input placeholder="Email"/>
        <Input placeholder="Senha"/>
        <Button text="Entrar" size="large"/>
      </S.LoginFormContainer>
    </S.LoginPageContainer>
  );
};

export default Login;
