import { LoginStyled } from "../styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextField } from "@material-ui/core";

import { useAuth } from "../../../providers/authentication";

interface LoginProps {
  setIsRegistered: (boolean: boolean) => void;
}

function Register({ setIsRegistered }: LoginProps) {
  const schema = yup.object().shape({
    name: yup.string().required("*Digite seu nome"),
    email: yup.string().required("*Digite seu e-mail"),
    password: yup.string().required("*Digite sua senha"),
    passwordConfirm: yup
      .string()
      .required("*Confirme sua senha")
      .test("password-match", "*A senha deve ser a mesma", function (value) {
        return this.parent.password === value;
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { registerUser } = useAuth();

  return (
    <LoginStyled>
      <h4>
        Cadastro{" "}
        <span onClick={() => setIsRegistered(true)}>retornar para o login</span>
      </h4>
      <form className="form" onSubmit={handleSubmit(registerUser)}>
        <div className="divider">
          <TextField
            label="Nome"
            margin="dense"
            variant="outlined"
            size="small"
            color="primary"
            inputProps={{
              style: { width: "250px" },
            }}
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </div>
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
        <div className="divider">
          <TextField
            label="Confirme sua senha"
            type="password"
            margin="dense"
            variant="outlined"
            size="small"
            color="primary"
            inputProps={{
              style: { width: "250px" },
            }}
            {...register("passwordConfirm")}
            error={!!errors.passwordConfirm}
            helperText={errors.passwordConfirm?.message}
          />
        </div>
        <button className="register-button" type="submit">
          Cadastrar
        </button>
      </form>
    </LoginStyled>
  );
}

export default Register;
