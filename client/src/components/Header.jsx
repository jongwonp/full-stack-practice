import { NavLink } from "react-router-dom";
import List from "../pages/List";
import Home from "../pages/Home";

function Header() {
  return (
    <>
      <NavLink to={`/`}>Home</NavLink>
      <NavLink to={`/list`}>List</NavLink>
    </>
  );
}

export default Header;
