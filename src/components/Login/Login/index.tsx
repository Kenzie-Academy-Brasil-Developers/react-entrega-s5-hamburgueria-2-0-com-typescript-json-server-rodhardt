import { LoginStyled } from "../styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextField } from "@material-ui/core";

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
  } = useForm<{ email: string; password: string }>({
    resolver: yupResolver(schema),
  });

  const { signIn } = useAuth();

  return (
    <LoginStyled>
      <h4>Login</h4>
      <form className="form" onSubmit={handleSubmit(signIn)}>
        <div className="divider">
          <TextField
            label="Email"
            margin="dense"
            variant="outlined"
            size="small"
            color="primary"
            inputProps={{
              style: { width: "250px" },
            }}
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>
        <div className="divider">
          <TextField
            label="Senha"
            type="password"
            margin="dense"
            variant="outlined"
            size="small"
            color="primary"
            inputProps={{
              style: { width: "250px" },
            }}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>
        <button className="login-button" type="submit">
          Logar
        </button>
      </form>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <button
        className="register-button"
        onClick={() => setIsRegistered(false)}
      >
        Cadastrar
      </button>
    </LoginStyled>
  );
}

export default Login;
