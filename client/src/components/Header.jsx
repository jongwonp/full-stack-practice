import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <NavLink to={`/`}>Home</NavLink>
      <NavLink to={`/list`}>List</NavLink>
    </>
  );
}

export default Header;
