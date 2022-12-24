export type InitialState = {
  searchInputValue: string;
  listData:ListData[],
  correctedValue:string
};

export type ActionsType = {
  type: string;
  payload: any;
};

export type ListData={
    guess:string,
    matchingLetters:number,
    corrected:boolean
}