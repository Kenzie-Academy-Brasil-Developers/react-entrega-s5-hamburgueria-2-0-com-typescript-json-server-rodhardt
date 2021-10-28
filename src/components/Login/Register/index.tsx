import { LoginStyled } from "../styles";

interface LoginProps {
  setIsRegistered: (boolean: boolean) => void;
}

function Register({ setIsRegistered }: LoginProps) {
  return (
    <LoginStyled>
      <h4>Cadastro</h4>
    </LoginStyled>
  );
}

export default Register;
