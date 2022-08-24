import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import logo from "../../assets/logo_patterns/logo.png";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledInput } from "../../components/Input/styles";
import { api } from "../../services";

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("O formato do e-mail está inválido")
    .required("Campo de e-mail obrigatório"),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 catacteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no mínimo um caracter especial, um número e uma letra maiúscula"
    )
    .required("Campo de senha obrigatório"),
});

const Login = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = ({ email, password }: LoginData) => {
    const data = {
      email,
      password,
    };

    api
      .post("/auth/login", data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        toast.error("Usuário ou Senha inválido");
      });
  };
  return (
    <S.LoginPageContainer>
      <S.LoginFormContainer onSubmit={handleSubmit(handleLogin)}>
        <S.LoginLogoContainer>
          <h1>Burguer Fresh</h1>
          <img src={logo} alt="logo" />
        </S.LoginLogoContainer>
        <StyledInput placeholder="Email" {...register("email")} />
        <StyledInput
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        <S.ErrorMessage>
          {errors.email?.message || errors.password?.message}
        </S.ErrorMessage>
        <Button text="Entrar" size="large" type="submit" />
      </S.LoginFormContainer>
    </S.LoginPageContainer>
  );
};

export default Login;
