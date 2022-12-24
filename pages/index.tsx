import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import MessageBox from "../Components/messageBox";
import SearchBox from "../Components/searchBox";
import ResetButton from "../Components/resetButton";
import List from "../Components/list";
import React, { useEffect, useMemo, useRef } from "react";
import { InitialState } from "../redux/types";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../redux/actions";

export default function Home() {
  const tableHeads = useRef([
    {
      title: "guess",
      order: 1,
    },
    {
      title: "matchingLetters",
      order: 2,
    },
    {
      title: "corrected",
      order: 3,
    },
  ]);

  const correctWordsArray = useRef(["woman", "life", "freedom"]);

  const { searchInputValue, listData } = useSelector(
    (state: InitialState) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setCorrectedWord(correctWordsArray.current[randomNumber()]);
  }, []);

  const randomNumber = (): number => {
    return Math.floor(Math.random() * 3);
  };

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
    dispatch({
      type: action.handleResetButton,
      payload: correctWordsArray.current[randomNumber()],
    });
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
    <div className="w-full h-screen flex justify-center items-center  bg-gray-400">
      <div className=" p-10 bg-gray-500 shadow-3xl rounded-xl">
        {message && <MessageBox message={message} correct={listData[listData.length - 1].corrected} />}
        <SearchBox
          searchInputValue={searchInputValue}
          onChange={handleOnSearchInputChange}
          onSubmit={handleOnSubmitClick}
        />
        <ResetButton onClick={handleOnResetButtonClick} />
        {listData.length>0&& <List listData={listData} tableHead={tableHeads.current} />}
      </div>
    </div>
  );
}
