import {
  START_GAME,
  CHOICE_CELL,
  SET_GAME_FIELD_OPTIONS,
  GENERATE_RANDOM_FIELD,
  SET_GAME_STARTED,
  STOP_GAME
} from "./constants";

export function setGameFieldOptions(row, column) {
  return {
    type: SET_GAME_FIELD_OPTIONS,
    payload: { row, column }
  };
}

export function choiceCell(rowIndex, cellIndex) {
  return {
    type: CHOICE_CELL,
    payload: { rowIndex, cellIndex }
  };
}

export function setGameStarted(start) {
  return {
    type: SET_GAME_STARTED,
    payload: { start }
  };
}

export function startGame() {
  return {
    type: START_GAME
  };
}

export function stopGame(stop) {
  return {
    type: STOP_GAME,
    payload: { stop }
  };
}

export function generateRandomField(fieldsCellsStateArray) {
  return {
    type: GENERATE_RANDOM_FIELD,
    payload: { fieldsCellsStateArray }
  };
}
