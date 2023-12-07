import { NavLink } from "react-router-dom";
import "./NavItem.css";
import useAuth from "../../../Hooks/useAuth";

const NavbarItem = () => {
  const { user } = useAuth();

  return (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>
      <li>
        <NavLink to={"/trainer"}>Trainer</NavLink>
      </li>

      <li>
        <NavLink to={"/forums"}>Forums</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to={"/signin-or-signup"}>SignIn or SignUp</NavLink>
          </li>
        </>
      )}

      {/* show dashboard route when role === "admin" or role === "trainer" and loading false */}
      {user ? (
        <>
          <li>
            <NavLink to={"/classes"}>Classes</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavbarItem;
