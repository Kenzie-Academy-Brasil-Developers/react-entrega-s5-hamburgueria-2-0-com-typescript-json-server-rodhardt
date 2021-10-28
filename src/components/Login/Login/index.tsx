import { LoginStyled } from "../styles";

import { TextField } from "@material-ui/core";

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
          <TextField
            label="E-mail"
            margin="dense"
            variant="outlined"
            size="small"
            color="primary"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>
        <div className="divider">
          <TextField
            label="Senha"
            margin="dense"
            type="password"
            variant="outlined"
            size="small"
            color="primary"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>
      </form>
    </LoginStyled>
  );
}

export default Login;
