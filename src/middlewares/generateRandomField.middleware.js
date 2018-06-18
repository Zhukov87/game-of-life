export default store => next => action => {

    if(action.type == 'GENERATE_RANDOM_FIELD') {
        const row = store.getState().initialGameData.row;
        const column = store.getState().initialGameData.column;
        const numberOfCells = row * column;
        let fieldsCellsStateArray = new Array(numberOfCells).fill(false);

        for(let i = 0; i < fieldsCellsStateArray.length; i++) {
            fieldsCellsStateArray[i] = randomBoolean();
        }

        action.payload.fieldsCellsStateArray = fieldsCellsStateArray;
        
    }
    next(action);
}

function randomBoolean() {
    return (Math.random() > 0.5);
}