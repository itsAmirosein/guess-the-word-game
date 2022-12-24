import React from "react";
import { ResetButtonProps } from "./types";
import { FaUndoAlt } from "react-icons/fa";

function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <div className="flex justify-center ">
    <button className="p-2 px-4 bg-gray-800 mt-2 rounded flex items-center" onClick={onClick}>
      Try again
      <FaUndoAlt className="ml-2"/>
    </button>
    </div>
  );
}

export default ResetButton;
