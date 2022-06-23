/*
 * - API Calls word meanings:
 *
 * - def = definition
 * - hw = headword i.e the lookup word itself
 * - hwi = headword information
 * - prs = pronunciation
 * - fl = functional label i.e the type of grammar it is
 *
 */

import React, { useContext } from "react";
import { grammarContext } from "./MyDic";

let dataAPI, setDataAPI;

function Controller() {
  ({ dataAPI, setDataAPI } = useContext(grammarContext));

  return <div style={{ display: "none" }}>Controller</div>;
}

export default Controller;

export function filterGrammarType([dictionary, thesaurus]) {
  const grammarType = ["verb", "noun", "adjective", "adverb"];
  let thesaurusArrays = null;
  let grammarArrays = null;
  grammarArrays = Array.prototype.filter.call(dictionary, (item) => {
    if (
      (grammarType.includes(item.fl) && !item.hwi.hw.includes(" ")) ||
      (grammarType.includes("adjective") && item.hwi.hw.endsWith("ous"))
    ) {
      return item;
    }

    thesaurusArrays = Array.prototype.filter.call(thesaurus, (item) => {
      if (item.hwi.hw.split(" ").length > 1) return;
      return item;
    });
  });

  return destructureGrammarType({
    grammarArrays,
    thesaurusArrays,
  });
}

function destructureGrammarType({ grammarArrays = [], thesaurusArrays }) {
  const grammarInfoDetails = grammarArrays.slice();
  grammarInfoDetails.forEach(function (grammarInfoObject) {
    if (grammarInfoObject.fl === "verb") {
      handleVerb(grammarInfoObject);
    }
    if (grammarInfoObject.fl === "noun") {
      // handleNoun(grammarInfoObject);
    }
  });
}

function handleVerb(verbObj) {
  const {
    def,
    hwi: { prs },
  } = verbObj;

  setDataAPI((prev) => ({
    ...prev,
    pronunciations: {
      ...prev.pronunciations,
      verb: prs,
    },
  }));

  def.forEach(function (verbType) {
    if (verbType.vd === "transitive verb") {
      setDataAPI((prev) => ({
        ...prev,
        verb: {
          ...prev.verb,
          transitive: getDefinition(verbType.sseq, "dt"),
        },
      }));
    } else if (verbType.vd === "intransitive verb") {
      console.log(`Intransitive verb: ${verbType}`);
      setDataAPI((prev) => ({
        ...prev,
        verb: {
          ...prev.verb,
          intransitive: getDefinition(verbType.sseq, "dt"),
        },
      }));
    }
  });
  console.log(dataAPI);
}

function getDefinition(obj, key) {
  if (obj.hasOwnProperty(key)) {
    let { dt } = obj;

    return true;
  } else if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] === "string") continue;
      const result = getDefinition(obj[i], key);
      if (result) {
        continue;
      }
    }
  } else {
    for (const k in obj) {
      if (typeof k === "string") continue;
      const result = getDefinition(obj[k], key);
      if (result) {
        continue;
      }
    }
  }
}

// if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
//     return "Not an object/array";
//   } else
