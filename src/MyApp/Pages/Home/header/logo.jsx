import logo from "../../../images/logo_transparent.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="header--logo">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
