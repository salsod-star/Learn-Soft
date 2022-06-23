import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import CourseModal from "./courseModal";
import RecordModal from "./recordModal";

function NavMenu() {
  const courseRef = useRef();
  const recordRef = useRef();
  const [isShown, setIsShown] = useState({
    courseClick: false,
    recordClick: false,
  });

  function handleClick(e) {
    e.preventDefault();
    if (e.target === courseRef.current) {
      setIsShown((prev) => ({ ...prev, courseClick: !prev.courseClick }));
      setIsShown((prev) => ({ ...prev, recordClick: false }));
    } else if (e.target === recordRef.current) {
      setIsShown((prev) => ({ ...prev, recordClick: !prev.recordClick }));
      setIsShown((prev) => ({ ...prev, courseClick: false }));
    }
  }
  return (
    <nav className="nav">
      <ul className="header--nav">
        <li className="dropdown">
          <a
            href="."
            className="header--nav__link"
            ref={courseRef}
            onClick={handleClick}
          >
            Start Learning
          </a>
          {isShown.courseClick ? <CourseModal /> : ""}
        </li>
        <li className="dropdown">
          <a
            href="."
            className="header--nav__link"
            ref={recordRef}
            onClick={handleClick}
          >
            Record
          </a>
          {isShown.recordClick ? <RecordModal /> : ""}
        </li>
        <li>
          <Link to="/game" className="header--nav__link">
            Games
          </Link>
        </li>
        <li>
          <Link to="/Blog" className="header--nav__link">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about" className="header--nav__link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="header--nav__link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
