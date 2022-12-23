import React from "react";
import { ResetButtonProps } from "./types";

function ResetButton({ onClick }: ResetButtonProps) {
  return <button onClick={onClick}>Try again</button>;
}

export default ResetButton;
