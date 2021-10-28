import { LoginStyled } from "../styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
          <input placeholder="Nome" {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>
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
        <div className="divider">
          <input
            placeholder="Confirmar Senha"
            type="password"
            {...register("passwordConfirm")}
          />
          <p>{errors.passwordConfirm?.message}</p>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </LoginStyled>
  );
}

export default Register;
