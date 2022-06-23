import React from "react";
import "./styles.scss";

function Button(props) {
  return (
    <a href="." className="btn btn-primary">
      {props.text}
    </a>
  );
}

export default Button;
