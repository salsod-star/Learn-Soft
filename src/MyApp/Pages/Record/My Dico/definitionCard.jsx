import React, { useContext } from "react";
import { grammarContext } from "./MyDic";

function Noun() {
  return (
    <div className="def-card">
      <p>Noun</p>
      <ul className="list">
        <li>this is a rod</li>
        <li>this is a beans</li>
        <li>i am coding</li>
      </ul>
    </div>
  );
}

function Verb() {
  return (
    <div className="def-card">
      <p>Verb</p>
      <ul className="list">
        <li>this is a rod</li>
        <li>this is a beans</li>
        <li>i am coding</li>
      </ul>
    </div>
  );
}

function Adjective() {
  return (
    <div className="def-card">
      <p>Adjective</p>
      <ul className="list">
        <li>this is a rod</li>
        <li>this is a beans</li>
        <li>i am coding</li>
      </ul>
    </div>
  );
}

function Adverb() {
  return (
    <div className="def-card">
      <p>Adverb</p>
      <ul className="list">
        <li>this is a rod</li>
        <li>this is a beans</li>
        <li>i am coding</li>
      </ul>
    </div>
  );
}

function DefinitionCard() {
  const { dataAPI } = useContext(grammarContext);

  console.log(dataAPI);

  return (
    <div className="def-card-container">
      <Noun />
      <Adjective />
      <Verb />
      <Adverb />
    </div>
  );
}

export default DefinitionCard;
