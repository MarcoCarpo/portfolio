import { createContext } from 'react';

export const AppContext = createContext({});

export function AppProvider({ children }: { children: React.ReactNode }) {
    return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
