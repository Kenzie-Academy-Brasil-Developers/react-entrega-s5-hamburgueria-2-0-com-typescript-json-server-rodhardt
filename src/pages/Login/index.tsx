import Login from "../../components/Login/Login";
import { useAuth } from "../../providers/authentication";
import { useState, useEffect } from "react";
import Logo from "../../components/Logo";

import Register from "../../components/Login/Register";

function LoginPage() {
  const { authenticate } = useAuth();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <section className="login">
      <Logo />
      {isRegistered ? (
        <Login setIsRegistered={setIsRegistered} />
      ) : (
        <Register setIsRegistered={setIsRegistered} />
      )}
    </section>
  );
}

export default LoginPage;
