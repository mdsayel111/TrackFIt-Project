import { Outlet } from "react-router-dom";
import DashboardNavItem from "../Components/Dashboard/DashboardNavItem";
import { useState } from "react";
import { useEffect } from "react";
import Drawer from "../Components/Shared/Navbar/Drawer";

const Dashboard = () => {
  const [screenSize, setScreenSize] = useState(screen.width);

  useEffect(() => {
    addEventListener("resize", () => {
      setScreenSize(screen.width);
    });
  }, []);

  return (
    <div>
      <div className="lg:grid gap-4 grid-cols-7">
        <div className="lg:bg-primary sticky w-full lg:w-auto top-0 lg:static z-50 px-4 h-[100px] lg:h-full flex lg:block pt-6 items-start justify-between bg-black lg:col-span-2">
          <h1 className="lg:p-8 text-center text-3xl text-primary lg:text-white font-bold">Dashboard</h1>
          <div className="min-h-screen flex justify-center">
            {screenSize > 1023 ? (
              <DashboardNavItem />
            ) : (
              <Drawer>
                <DashboardNavItem />
              </Drawer>
            )}
          </div>
        </div>
        <div className="col-span-5 lg:mt-4">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
