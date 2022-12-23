import React from "react";

export type MessageBoxProps = {
  message: string;
};

export type SearchBoxProps = {
  searchInputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit:()=>void
};

export type ResetButtonProps={
    onClick:()=>void
}

