import { createContext, useReducer } from 'react';
import reducer, { AppState, initialState } from './reducer';

export interface AppContextType extends AppState {
    setSelectedSection: (section: string) => void;
    setSkipAnimation: () => void;
    setSelectedExperience: (experience: number) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setSelectedSection = (section: string) => {
        dispatch({ type: 'SET_SELECTED_SECTION', payload: section });
    };

    const setSelectedExperience = (experience: number) => {
        dispatch({ type: 'SET_SELECTED_EXPERIENCE', payload: experience });
    };

    const setSkipAnimation = () => {
        dispatch({ type: 'SKIP_ANIMATION' });
    };

    return (
        <AppContext.Provider value={{ ...state, setSelectedSection, setSkipAnimation, setSelectedExperience }}>
            {children}
        </AppContext.Provider>
    );
};
