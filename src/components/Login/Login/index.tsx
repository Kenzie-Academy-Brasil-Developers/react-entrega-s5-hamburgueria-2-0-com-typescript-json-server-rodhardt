import { LoginStyled } from "../styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../../providers/authentication";

interface LoginProps {
  setIsRegistered: (boolean: boolean) => void;
}

function Login({ setIsRegistered }: LoginProps) {
  const schema = yup.object().shape({
    email: yup.string().required("*Digite seu e-mail"),
    password: yup.string().required("*Digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { signIn } = useAuth();

  return (
    <LoginStyled>
      <h4>Login</h4>
      <form className="form" onSubmit={handleSubmit(signIn)}>
        <div className="divider">
          <input placeholder="E-mail" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div className="divider">
          <input
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <button onClick={() => setIsRegistered(false)}>Cadastrar</button>
    </LoginStyled>
  );
}

export default Login;
