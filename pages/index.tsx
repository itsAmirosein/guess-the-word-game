import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import MessageBox from "../Components/messageBox";
import SearchBox from "../Components/searchBox";
import ResetButton from "../Components/resetButton";
import List from "../Components/list";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleOnSearchInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.target.value);
  };

  const handleOnSubmitClick = () => {
    console.log("submit!");
  };

  const handleOnResetButtonClick = () => {
    console.log("resetButton Click!");
  };

  return (
    <div>
      <MessageBox Message="smt" />
      <SearchBox
        searchInputValue="value"
        onChange={handleOnSearchInputChange}
        onSubmit={handleOnSubmitClick}
      />
      <ResetButton onClick={handleOnResetButtonClick} />
      <List />
    </div>
  );
}
