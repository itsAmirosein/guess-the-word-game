import React from "react";
import { SearchBoxProps } from "./types";

function SearchBox({ onChange, onSubmit, searchInputValue }: SearchBoxProps) {
  return (
    <div className="my-5 flex justify-center items-center ">
      <input
        placeholder="Enter your guess ..."
        value={searchInputValue}
        onChange={onChange}
        className='outline-0 w-full p-2 rounded'
      />
      <button className="ml-5 p-2 bg-gray-800 rounded" onClick={onSubmit}>SUBMIT</button>
    </div>
  );
}

export default SearchBox;
