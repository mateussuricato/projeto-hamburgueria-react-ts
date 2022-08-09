import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import logo from "../../assets/logo_patterns/logo.png";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

interface LoginProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLogged }: LoginProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      setLogged(true);
      navigate("/");
      toast.success("Bem Vindo(a) Larissa!")
      return;
    }

    toast.error("Usuário ou senha incorretos");
  };
  return (
    <S.LoginPageContainer>
      <S.LoginFormContainer>
        <S.LoginLogoContainer>
          <h1>Burguer Fresh</h1>
          <img src={logo} alt="logo" />
        </S.LoginLogoContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <Button text="Entrar" size="large" onClick={handleLogin} />
      </S.LoginFormContainer>
    </S.LoginPageContainer>
  );
};

export default Login;
