import { createContext, useReducer } from 'react';
import reducer, { AppState, initialState } from './reducer';

export interface AppContextType extends AppState {
    setSelectedSection: (section: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setSelectedSection = (section: string) => {
        dispatch({ type: 'SET_SELECTED_SECTION', payload: section });
    };

    return <AppContext.Provider value={{ ...state, setSelectedSection }}>{children}</AppContext.Provider>;
};
