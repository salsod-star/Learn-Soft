import React, { useContext } from "react";
import { TabsContext } from "./MyDic";

function WordCard() {
  const { inputValue } = useContext(TabsContext);
  return (
    <div className="word-container">
      <p className="grammar-word">&rarr; {inputValue}</p>
      <div className="phonetic">
        <p>Show IPA :</p>
        <span>askdak</span>
      </div>
    </div>
  );
}

export default WordCard;
