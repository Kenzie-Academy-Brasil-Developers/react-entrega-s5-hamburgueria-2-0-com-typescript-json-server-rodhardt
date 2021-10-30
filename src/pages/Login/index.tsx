import Login from "../../components/Login/Login";
import { useAuth } from "../../providers/authentication";
import { useState, useEffect } from "react";
import Logo from "../../components/Logo";

import Register from "../../components/Login/Register";
import { LoginStyled } from "./styles";

function LoginPage() {
  const { authenticate } = useAuth();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <LoginStyled>
      {isRegistered ? (
        <>
          <Logo />
          <Login setIsRegistered={setIsRegistered} />
        </>
      ) : (
        <>
          <Register setIsRegistered={setIsRegistered} />
          <Logo />
        </>
      )}
    </LoginStyled>
  );
}

export default LoginPage;
