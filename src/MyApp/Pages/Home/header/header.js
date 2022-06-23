import Logo from "./logo";
import NavMenu from "./NavMenu";
import "./headerStyle.scss";

function HeaderComponent() {
  return (
    <header className="header ">
      <Logo />
      <NavMenu />
    </header>
  );
}

export default HeaderComponent;
