import { createContext, useState, useEffect } from "react";
import apiClient from "../services/apiClient";

const AuthorizeContext = createContext();

const AuthorizeProvider = ({ children }) => {
  const [initialized, setInitialized] = useState(false);
  const [authState, setAuthState] = useState({
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const fetchUser = async () => {
      const userToken = localStorage.getItem("user_token");
      apiClient.setToken(userToken);

      if (userToken) {
        const { data, error, message } = await apiClient.fetchUserFromToken();
        if (data) {
          setAuthState((state) => ({
            ...state,
            user: data.user,
            isAuthenticated: true,
          }));
          setInitialized(true);
        } else {
          setAuthState((state) => ({
            ...state,
            isAuthenticated: false,
          }));
          setInitialized(true);
          throw error;
        }
      } else {
        setInitialized(true);
      }
    };
    fetchUser();
  }, [authState.isAuthenticated]);

  const logoutUser = async () => {
    localStorage.removeItem("user_token");
    apiClient.setToken(null);
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
  };

  const passedProps = {
    authState,
    setAuthState,
    logoutUser,
    initialized,
    setInitialized,
  };

  return (
    <AuthorizeContext.Provider value={passedProps}>
      {children}
    </AuthorizeContext.Provider>
  );
};

export { AuthorizeContext, AuthorizeProvider };
