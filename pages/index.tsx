import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import MessageBox from "../Components/messageBox";
import SearchBox from "../Components/searchBox";
import ResetButton from "../Components/resetButton";
import List from "../Components/list";
import React, { useEffect, useMemo } from "react";
import { InitialState } from "../redux/types";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../redux/actions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { searchInputValue, listData } = useSelector(
    (state: InitialState) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setCorrectedWord("book");
  }, []);

  const setCorrectedWord = (value: string) => {
    dispatch({
      type: action.setCorrectedWord,
      payload: value,
    });
  };

  const handleOnSearchInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: action.hanndleSearcInputValue,
      payload: e.target.value,
    });
  };

  const handleOnSubmitClick = () => {
    dispatch({
      type: action.handleSubmitWord,
    });
  };

  const handleOnResetButtonClick = () => {
    console.log("resetButton Click!");
  };

  const message: string = useMemo(() => {
    if (listData.length > 0) {
      return listData[listData.length - 1].corrected
        ? "You guess correctly"
        : "you guess wrong !";
    } else {
      return "";
    }
  }, [listData.length]);

  return (
    <div>
      {message && <MessageBox message={message} />}
      <SearchBox
        searchInputValue={searchInputValue}
        onChange={handleOnSearchInputChange}
        onSubmit={handleOnSubmitClick}
      />
      <ResetButton onClick={handleOnResetButtonClick} />
      <List />
    </div>
  );
}
