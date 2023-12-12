import { sections } from '../helpers/data';

export interface AppState {
    selectedSection: string;
    skipAnimation?: boolean;
}

interface SET_SELECTED_SECTION {
    type: 'SET_SELECTED_SECTION';
    payload: string;
}

interface SKIP_ANIMATION {
    type: 'SKIP_ANIMATION';
}

export type AppActions = SET_SELECTED_SECTION | SKIP_ANIMATION;

export const initialState: AppState = {
    selectedSection: sections[0].name,
    skipAnimation: false,
};

const reducer = (state: AppState, action: AppActions) => {
    switch (action.type) {
        case 'SET_SELECTED_SECTION':
            return { ...state, selectedSection: action.payload };
        case 'SKIP_ANIMATION':
            return { ...state, skipAnimation: true };
        default:
            return state;
    }
};

export default reducer;
