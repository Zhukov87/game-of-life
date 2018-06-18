import { createSelector } from 'reselect';

const getField = (state) => {
    return state.gameField;
}

const getGameStarted = (state) => {
    return state.initialGameData.gameStarted;
}

export const fieldSelector = createSelector(getField, getGameStarted, (field, gameStarted) => {
    
        return {
            field: field,
            gameStarted: gameStarted
        }


});