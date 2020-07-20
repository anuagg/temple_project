import * as actionTypes from "../store/action";

const initialState = {
    language: "English",
    audio: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE:
            return {
                ...state,
                language : action.language,
            }
        case actionTypes.PLAY_AUDIO:
            return {
                ...state,
                audio : action.playAudio,
            }
        default:
            return state
    }
}

export default reducer;