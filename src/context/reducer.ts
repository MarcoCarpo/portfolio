import { sections } from '../helpers/data';

export interface AppState {
    selectedSection: string;
    selectedExperience?: number;
    skipAnimation?: boolean;
}

interface SET_SELECTED_SECTION {
    type: 'SET_SELECTED_SECTION';
    payload: string;
}

interface SKIP_ANIMATION {
    type: 'SKIP_ANIMATION';
}

interface SET_SELECTED_EXPERIENCE {
    type: 'SET_SELECTED_EXPERIENCE';
    payload: number;
}

export type AppActions = SET_SELECTED_SECTION | SKIP_ANIMATION | SET_SELECTED_EXPERIENCE;

export const initialState: AppState = {
    selectedSection: sections[0].name,
    selectedExperience: undefined,
    skipAnimation: false,
};

const reducer = (state: AppState, action: AppActions) => {
    switch (action.type) {
        case 'SET_SELECTED_SECTION':
            return { ...state, selectedSection: action.payload };
        case 'SET_SELECTED_EXPERIENCE':
            return { ...state, selectedExperience: action.payload };
        case 'SKIP_ANIMATION':
            return { ...state, skipAnimation: true };
        default:
            return state;
    }
};

export default reducer;
