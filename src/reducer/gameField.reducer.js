import {
  CHOICE_CELL,
  SET_GAME_FIELD_OPTIONS,
  START_GAME,
  GENERATE_RANDOM_FIELD
} from "../actionCreators/constants";

const defaultField = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
];

export default (field = defaultField, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHOICE_CELL: {
      const { rowIndex, cellIndex } = payload;
      const nextField = [].concat(field);
      for (let i = 0; i < nextField.length; i++) {
        nextField[i] = [].concat(nextField[i]);
      }
      nextField[rowIndex][cellIndex] = !nextField[rowIndex][cellIndex];
      return nextField;
    }
    case SET_GAME_FIELD_OPTIONS: {
      const nextField = [];
      const { row, column } = payload;
      for (let i = 0; i < row; i++) {
        nextField.push(new Array(+column).fill(false));
      }
      return nextField;
    }
    case START_GAME: {
      const nextField = [];
      const row = field.length;
      const column = field[1].length;

      for (let i = 0; i < row + 2; i++) {
        nextField.push(new Array(+column + 2).fill(false));
      }

      for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
          nextField[i + 1][j + 1] = !!field[i][j];
        }
      }

      const finalField = [];
      for (let i = 0; i < row; i++) {
        finalField.push(new Array(+column).fill(false));
      }

      for (let i = 1; i < nextField.length - 1; i++) {
        for (let j = 1; j < nextField[i].length - 1; j++) {
          finalField[i - 1][j - 1] = checkLiveCell(i, j);
        }
      }

      function checkLiveCell(i, j) {
        let counter = 0;

        if (nextField[i - 1][j - 1]) {
          counter++;
        }
        if (nextField[i - 1][j]) {
          counter++;
        }
        if (nextField[i - 1][j + 1]) {
          counter++;
        }
        if (nextField[i][j - 1]) {
          counter++;
        }
        if (nextField[i][j + 1]) {
          counter++;
        }
        if (nextField[i + 1][j - 1]) {
          counter++;
        }
        if (nextField[i + 1][j]) {
          counter++;
        }
        if (nextField[i + 1][j + 1]) {
          counter++;
        }

        if (!nextField[i][j] && counter == 3) {
          return true;
        }

        if (!nextField[i][j] && counter == 2) {
          return false;
        }

        if (counter == 2 || counter == 3) {
          return true;
        }

        if (counter < 2 || counter > 3) {
          return false;
        }
      }
      return finalField;
    }
    case GENERATE_RANDOM_FIELD: {
      const { fieldsCellsStateArray } = payload;

      const nextField = [];
      const row = field.length;
      const column = field[1].length;

      for (let i = 0; i < row; i++) {
        nextField.push(new Array(+column).fill(false));
      }

      let counter = 0;

      for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
          nextField[i][j] = fieldsCellsStateArray[counter];
          counter++;
        }
      }

      return nextField;
    }
  }

  return field;
};
