import { createContext, useContext, useState, ReactNode } from "react";

interface AuthState {
  username: string;
  accountId: string;
  userId: string;
}

interface AuthContextType {
  authState: AuthState | null;
  updateAuthState: (newAuthState: AuthState) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authState, setAuthState] = useState<AuthState | null>(() => {
    const storedAuthState = localStorage.getItem("authState");
    return storedAuthState ? JSON.parse(storedAuthState) : null;
  });

  const updateAuthState = (newAuthState: AuthState) => {
    setAuthState(newAuthState);
    localStorage.setItem("authState", JSON.stringify(newAuthState));
  };

  const logout = () => {
    setAuthState(null);
    localStorage.removeItem("authState");
  };

  return (
    <AuthContext.Provider value={{ authState, updateAuthState, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error();
  }
  return context;
};
