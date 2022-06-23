import React from "react";
import { Link } from "react-router-dom";

function CourseModal() {
  return (
    <ul className="courseModal">
      <li>
        <Link to="/tutorial/html" className="course-link">
          HTML5
        </Link>
      </li>
      <li>
        <Link to="/tutorial/CSS" className="course-link">
          CSS3
        </Link>
      </li>
      <li>
        <Link to="/tutorial/JavaScript" className="course-link">
          JavaScript
        </Link>
      </li>
      <li>
        <Link to="/tutorial/react" className="course-link">
          ReactJS
        </Link>
      </li>
    </ul>
  );
}

export default CourseModal;
