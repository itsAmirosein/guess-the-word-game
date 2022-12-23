import React from "react";
import { SearchBoxProps } from "./types";

function SearchBox({ onChange, onSubmit, searchInputValue }: SearchBoxProps) {
  return (
    <div>
      <input
        placeholder="Enter your guess ..."
        value={searchInputValue}
        onChange={onChange}
      />
      <button onClick={onSubmit}>SUBMIT</button>
    </div>
  );
}

export default SearchBox;
