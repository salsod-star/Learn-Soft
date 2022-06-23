import React, { useEffect, useReducer, useState } from "react";

import "./dico.scss";

import DicHeader from "./DicHeader";
import Tabs from "./Tabs";
import Examples from "./examples";
import DefinitionCard from "./definitionCard";

import Antonyms from "./tabs/Antonyms";
import Bookmarks from "./tabs/Bookmark";

import RecentWords from "./tabs/Recent";
import Synonym from "./tabs/Synonym";
import WordCard from "./word";

import { reducer, initialState } from "./ReducerData";
import Controller, { filterGrammarType } from "./Controller";

// Context Hook for the Tab Buttons
export const TabsContext = React.createContext(undefined);
export const grammarContext = React.createContext(undefined);

// Initial state for the Dictionary API
const initialAPIData = {
  verb: { transitive: null, intransitive: null },
  noun: null,
  adjective: null,
  adverb: null,
  pronunciations: { verb: null, noun: null, adjective: null },
  synonyms: null,
  antonyms: null,
};

function MyDic() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [dataAPI, setDataAPI] = useState(initialAPIData);
  const [inputValue, setInputValue] = useState("");
  const [valueFromInputBox, setValueFromInputBox] = useState("");

  let componentDisplay = null;

  if (state.isDefinition || state.isWordOfTheDay) {
    componentDisplay = (
      <>
        <WordCard />
        <DefinitionCard />
        <Examples />
      </>
    );
  } else if (state.isSynonym) {
    componentDisplay = <Synonym />;
  } else if (state.isAntonym) {
    componentDisplay = <Antonyms />;
  } else if (state.isRecent) {
    componentDisplay = <RecentWords />;
  } else if (state.isBookmark) {
    componentDisplay = <Bookmarks />;
  }

  ////////////////////////////////////////////////////////
  // Fetching data from merriam webster dictionary API

  useEffect(() => {
    let headerInfo = {
      method: "GET",
    };

    let apiKeyThesaurus = "7087835b-c0f8-4283-8de5-86fd85edd8a5";
    let URLThesaurus = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${
      valueFromInputBox || "voluminous"
    }?key=${apiKeyThesaurus}`;
    let apiKeyDictionary = "49be5420-50fc-44c9-92c5-e082933d8d51";
    let URLDictionary = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${
      valueFromInputBox || "voluminous"
    }?key=${apiKeyDictionary}`;
    // let apiKey = "49be5420-50fc-44c9-92c5-e082933d8d51";

    Promise.all([
      fetch(URLDictionary, headerInfo),
      fetch(URLThesaurus, headerInfo),
    ])
      .then(function (responses) {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then(function (data) {
        setDataAPI((prev) => ({
          ...prev,
          verb: filterGrammarType(data),
        }));
        console.log(data);
      })
      .catch((e) => console.log(e));
    // function fetchData() {

    //   fetch(fetchParams.ur, headerInfo)
    //     .then((response) => {
    //       if (!response.ok) throw new Error();

    //       return response.json();
    //     })
    //     .then((data) => {
    //       setDataAPI((prev) => ({ ...prev, fetchedData: data }));
    //       return fetch
    //     })
    //     .catch((e) => console.log(e));
    // }

    // if (!valueFromInputBox) return;
    // fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueFromInputBox]);

  return (
    <main>
      <TabsContext.Provider
        value={{
          dispatch,
          inputValue,
          setInputValue,
          setValueFromInputBox,
        }}
      >
        <DicHeader />
        <Tabs />
        <grammarContext.Provider value={{ dataAPI, setDataAPI }}>
          <Controller />
          {componentDisplay}
        </grammarContext.Provider>
      </TabsContext.Provider>
    </main>
  );
}

export default MyDic;

//////////////////////////////////////////////////////////////////////////////
/////////////// Logic
//////////////////////////////////////////////////////////////
