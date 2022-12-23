import React from "react";
import { MessageBoxProps } from "./types";

function MessageBox({ message }: MessageBoxProps) {
  return (
    <div>
      <div>{message}</div>
    </div>
  );
}

export default MessageBox;
