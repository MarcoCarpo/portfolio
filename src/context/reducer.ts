import { sections } from '../helpers/data';

export interface AppState {
    selectedSection: string;
}

interface SET_SELECTED_SECTION {
    type: 'SET_SELECTED_SECTION';
    payload: string;
}

export type AppActions = SET_SELECTED_SECTION;
// type AppActions = SET_SELECTED_SECTION | RANDOM;

export const initialState: AppState = {
    selectedSection: sections[0].name,
};

const reducer = (state: AppState, action: AppActions) => {
    switch (action.type) {
        case 'SET_SELECTED_SECTION':
            return { ...state, selectedSection: action.payload };
        default:
            return state;
    }
};

export default reducer;
