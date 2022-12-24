import { Reducer } from "@reduxjs/toolkit";
import { ActionsType, InitialState } from "./types";
import { action } from "./actions";
import { ListData } from "../Components/types";

const initialState: InitialState = {
  searchInputValue: "",
  listData: [],
  correctedValue: "",
};

export const reducer: Reducer<InitialState, ActionsType> = (
  state: InitialState = initialState,
  action: ActionsType
): InitialState => {
  return ACTIONS[action?.type]
    ? ACTIONS[action?.type](state, action.payload)
    : state;
};

const ACTIONS = {
  [action.hanndleSearcInputValue]: hanndleSearcInputValue,
  [action.handleSubmitWord]: handleSubmitWord,
  [action.setCorrectedWord]: handleCorrectedWord,
  [action.handleResetButton]:handleResetButton
};

function hanndleSearcInputValue(
  state: InitialState,
  payload: any
): InitialState {
  return {
    ...state,
    searchInputValue: payload,
  };
}

function handleCorrectedWord(state: InitialState, payload: any): InitialState {
  return {
    ...state,
    correctedValue: payload,
  };
}

function handleSubmitWord(state: InitialState, payload: any): InitialState {
  let { correctedValue, searchInputValue } = state;
  const copyListData = [...state.listData]

  let matchedLettersCount = 0;
  for (let i = 0; i < searchInputValue.length; i++) {
      for (let j = 0; j < correctedValue.length; j++) {
          if (
              correctedValue.length > 0 &&
              searchInputValue[i] === correctedValue[j]
      ) {
          matchedLettersCount++;
        correctedValue =
        correctedValue.substring(0, j) +
        correctedValue.substring(++j, correctedValue.length);
    }
    }
}

  const listRecord: ListData = {
    guess: searchInputValue,
    corrected: state.correctedValue === state.searchInputValue,
    matchingLetters: matchedLettersCount,
};
copyListData.push(listRecord)
return {
    ...state,
    listData: copyListData,
};
}

function handleResetButton(state: InitialState, payload: any): InitialState {
  return {
    ...state,
    searchInputValue:'',
    listData:[],
    correctedValue:payload
  };
}