import { SET_GAME_FIELD_OPTIONS, SET_GAME_STARTED, STOP_GAME } from '../actionCreators/constants';

const defaultFieldOptions = {
    row: 5,
    column: 5,
    gameStarted: false
}

export default (fieldOptions = defaultFieldOptions, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_GAME_FIELD_OPTIONS: {
            const nextFieldOptions = {...fieldOptions};
            nextFieldOptions.row = +payload.row;
            nextFieldOptions.column = +payload.column;
            return nextFieldOptions;
        }
        case SET_GAME_STARTED: {
            const nextFieldOptions = {...fieldOptions}
            nextFieldOptions.gameStarted = payload.start;
            return nextFieldOptions;
        }
        case STOP_GAME: {
            const nextFieldOptions = {...fieldOptions}
            nextFieldOptions.gameStarted = payload.stop;
            return nextFieldOptions;
        }
    }

    return fieldOptions;
}

