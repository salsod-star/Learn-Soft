import React from "react";
import { Link } from "react-router-dom";

function RecordModal() {
  return (
    <ul className="recordModal">
      <li>
        <Link to="/dictionary" className="course-link">
          My little dictionary
        </Link>
      </li>
      <li>
        <Link to="/My-notes" className="course-link">
          My Notes
        </Link>
      </li>
    </ul>
  );
}

export default RecordModal;
