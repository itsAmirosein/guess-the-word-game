import React from "react";

export type MessageBoxProps = {
  message: string;
  correct:boolean
};

export type SearchBoxProps = {
  searchInputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit:()=>void
};

export type ResetButtonProps={
    onClick:()=>void
}

export type ListProps={
    listData:ListData[],
    tableHead:TableHead[]
}

export type TableHead={
    title:string,
    order:number
}

export type ListData={
    guess:string,
    matchingLetters:number,
    corrected:boolean
}


