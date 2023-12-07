import { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import Drawer from "./Drawer";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(screen.width);
  const { user, SignOut } = useAuth();
  const image = user?.photoURL;

  const handleOnError = (e) => {
    e.target.src = "/image/User.png";
  };

  useEffect(() => {
    addEventListener("resize", () => {
      setScreenSize(screen.width);
    });
  }, []);

  return (
    <div className="navbar p-0 sticky top-0 bg-black z-20">
      <div className="flex-1">
        <Link to={"/"} className="btn p-0 btn-ghost text-xl h-auto">
          <Logo />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 nav-ul">
          {screenSize > 1023 ? (
            <>
              <NavbarItem />
              {user && (
                <>
                  <li>
                    <NavLink to={"/dashboard/profile"} className="p-0 mr-4">
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <img src={image} alt="" onError={handleOnError} />
                        </div>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="btn h-auto min-h-0 text-white bg-primary"
                      onClick={() => SignOut()}
                    >
                      Log Out
                    </button>
                  </li>
                </>
              )}
            </>
          ) : (
            <Drawer>
              {user && (
                <li>
                  <NavLink to={"/dashboard/profile"} className="p-0 mr-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={image} alt="" onError={handleOnError} />
                      </div>
                    </div>
                  </NavLink>
                </li>
              )}
              <hr className="border-white w-full" />
              <NavbarItem />
              {user && (
                <li>
                  <button
                    className="btn h-auto min-h-0 text-white bg-primary"
                    onClick={() => SignOut()}
                  >
                    Log Out
                  </button>
                </li>
              )}
            </Drawer>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
