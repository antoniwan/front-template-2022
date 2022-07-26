import { createContext, useContext, useState } from "react";

export const SessionContext = createContext({});

export function SessionProvider({ children }) {
  const initialState = {
    isAuthenticated: false,
    theme: "light",
    user: undefined,
  };
  const [sessionState, setSessionState] = useState(initialState);
  return (
    <SessionContext.Provider value={[sessionState, setSessionState]}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSessionContext() {
  return useContext(SessionContext);
}
