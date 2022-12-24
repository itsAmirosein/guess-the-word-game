import React from "react";
import { MessageBoxProps } from "./types";

function MessageBox({ message, correct }: MessageBoxProps) {
  return (
    <div
      className={` flex justify-center ${
        correct ? " text-green-800" : "text-red-800"
      } pb-5 text-xl font-bold`}
    >
      <p>{message}</p>
    </div>
  );
}

export default MessageBox;
