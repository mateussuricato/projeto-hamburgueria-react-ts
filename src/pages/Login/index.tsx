import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import logo from "../../assets/logo_patterns/logo.png";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

interface LoginProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLogged }: LoginProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };

      return axios
        .post(
          "https://projetoblue-hamburgueria-api-production.up.railway.app/auth/login",
          data
        )
        .then((res) => {
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("user", JSON.stringify(res.data.user))
          const token = localStorage.getItem("token")
          setLogged(true);
          navigate("/");
          toast.success(`Bem vindo(a) ${res.data.user.name} `, { duration: 7000 });
        })
        .catch(() => {
          toast.error("Usuário ou Senha inválido");
        });

    }

    toast.error("Preencha os campos de login");
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
