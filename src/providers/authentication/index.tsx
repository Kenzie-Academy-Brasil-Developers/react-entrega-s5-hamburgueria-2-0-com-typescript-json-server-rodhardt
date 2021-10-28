import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserData } from "../../assets/types/user";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  authToken: string;
  userId: number;
  authenticate: () => void;
  signIn: (userData: UserData) => void;
  registerUser: (userData: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("@burg:token") || ""
  );

  const [userId, setUserId] = useState<number>(
    () => Number(localStorage.getItem("@burg:id")) || 0
  );

  const authenticate = () => {
    if (authToken === "") {
      history.push("/login");
    } else {
      history.push("/");
    }
  };

  const signIn = (userData: UserData) => {
    axios
      .post("https://hamburgueria-rodhadt.herokuapp.com/signin/", userData)
      .then((response) => {
        localStorage.setItem("@burg:token", response.data.accessToken);
        localStorage.setItem("@burg:id", response.data.user.id);
        setAuthToken(response.data.accessToken);
        setUserId(response.data.user.id);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const registerUser = (userData: UserData) => {
    axios
      .post("https://hamburgueria-rodhadt.herokuapp.com/users/", userData)
      .then((response) => {
        localStorage.setItem("@burg:token", response.data.accessToken);
        localStorage.setItem("@burg:id", response.data.user.id);
        setAuthToken(response.data.accessToken);
        setUserId(response.data.user.id);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken("");
    setUserId(0);
    history.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        userId,
        authenticate,
        signIn,
        registerUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
