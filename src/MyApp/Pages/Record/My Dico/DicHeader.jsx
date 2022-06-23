import React, { useContext } from "react";
import { TabsContext } from "./MyDic";
function DicHeader() {
  const { inputValue, setInputValue, setValueFromInputBox } =
    useContext(TabsContext);

  return (
    <div className="dic-header">
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for word..."
          className="searchInput"
        />
        <button
          type="button"
          className="button"
          onClick={(e) => setValueFromInputBox(inputValue)}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default DicHeader;
