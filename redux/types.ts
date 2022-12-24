import { ListData } from "../Components/types";

export type InitialState = {
  searchInputValue: string;
  listData:ListData[],
  correctedValue:string
};

export type ActionsType = {
  type: string;
  payload: any;
};

