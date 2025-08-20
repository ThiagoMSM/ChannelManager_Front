import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { userType } from '../types/index';

type UserContextType = {
  usuario: userType | null;
  setusuario: React.Dispatch<React.SetStateAction<userType | null>>;
  isLoading: boolean;
  login: (token: string, usuario: userType) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setusuario] = useState<userType | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        const localUser = localStorage.getItem("usuario");

        if (token && localUser) setusuario(JSON.parse(localUser));

        // await LoginService.validateToken();
      } catch (error) {
        console.error("Erro ao inicializar a autenticação:", error);
        logout();
      }
    };

    initializeAuth();
    setIsLoading(false);
  }, []);


  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    setusuario
    (null);
  };

  const login = (token:string, usuario:userType) => {
    setIsLoading(true);
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    setusuario(usuario);
    setIsLoading(false);
  };


  return (
    <UserContext.Provider value={{ login, logout, usuario, setusuario, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de UserProvider");
  }
  return context;
};
