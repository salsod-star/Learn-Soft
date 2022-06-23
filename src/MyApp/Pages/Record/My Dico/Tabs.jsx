import React, { useContext } from "react";
import { TabsContext } from "./MyDic";
import { ACTIONS } from "./ReducerData";

function Tabs() {
  const { dispatch } = useContext(TabsContext);

  return (
    <div className="tab">
      <button
        type="button"
        onClick={() => dispatch({ type: ACTIONS.definition })}
      >
        Definition
      </button>
      <button type="button" onClick={() => dispatch({ type: ACTIONS.synonym })}>
        Synonyms
      </button>
      <button type="button" onClick={() => dispatch({ type: ACTIONS.antonym })}>
        Antonyms
      </button>
      <button type="button" onClick={() => dispatch({ type: ACTIONS.recent })}>
        Recent Words
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: ACTIONS.bookmark })}
      >
        Bookmarks
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: ACTIONS.wordOfTheDay })}
      >
        Word of the day
      </button>
    </div>
  );
}

export default Tabs;
