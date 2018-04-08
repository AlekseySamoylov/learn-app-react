import { DISPLAY_TRANSLATION } from 'redux/actions/cardActions'

const initialTranslation = { value: '' };

export default function (state = initialState, action) {
    switch (action.type) {
        case DISPLAY_TRANSLATION:
            return { value: state.value + 'A' };
        default:
            return state;
    }
}
