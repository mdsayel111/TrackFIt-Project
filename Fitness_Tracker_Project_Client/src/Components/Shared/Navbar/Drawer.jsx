import NavbarItem from "./NavbarItem";
import { IoMdMenu } from "react-icons/io";

const Drawer = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle bg-black text-white" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button hover:bg-transparent bg-transparent border-0 btn btn-primary p-0"
        >
          {<IoMdMenu className="text-white text-2xl" />}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-[70%] flex justify-start items-center space-y-3 p-4 min-h-full bg-secondary text-base-content">
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
