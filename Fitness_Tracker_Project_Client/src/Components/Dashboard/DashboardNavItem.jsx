import { NavLink } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";

const DashboardNavItem = () => {
  const [role, loading] = useRole();
  const { user } = useAuth();

  return (
    <div className="w-full">
      <NavLink to="/">
        <button className="btn bg-primary w-full  text-white mb-4 border-0">
          Home
        </button>
      </NavLink>
      {/* user Route */}
      {user && (
        <>
          <NavLink to="activity">
            <button className="btn bg-primary w-full  text-white mb-4 border-0">
              Activity
            </button>
          </NavLink>
          <NavLink to="profile">
            <button className="btn bg-primary w-full  text-white mb-4 border-0">
              Profile
            </button>
          </NavLink>
          <NavLink to="recommende-class">
            <button className="btn bg-primary w-full  text-white mb-4 border-0">
              Recommended Classes
            </button>
          </NavLink>
        </>
      )}

      {/* trainer and admin route */}
      {(role === "admin" || role === "trainer") && (
        <NavLink to="add-forum">
          <button className="btn bg-primary w-full  text-white mb-4 border-0">
            Add Forum
          </button>
        </NavLink>
      )}

      {/* trainer route */}
      {role === "trainer" ? (
        <>
          <NavLink to="add-classes">
            <button className="btn bg-primary w-full  text-white mb-4 border-0">
              Add Classes
            </button>
          </NavLink>
          <NavLink to="manage-slots">
            <button className="btn bg-primary w-full  text-white mb-4 border-0">
              Manage Slots
            </button>
          </NavLink>
          <NavLink to="manage-members">
            <button className="btn bg-primary w-full  text-white mb-4 border-0">
              Manage Members
            </button>
          </NavLink>
        </>
      ) : (
        <></>
      )}

      {/* admin route in dashboard */}
      {role === "admin" && !loading && (
        <>
          <NavLink to="applied-trainer">
            <button className="btn bg-primary w-full  text-white mb-4 border-0">
              Applied Trainer
            </button>
          </NavLink>
          <NavLink to="news-letter-subscribers">
            <button className="btn bg-primary w-full  text-white mb-4 border-0">
              News Latter Subscribers
            </button>
          </NavLink>
          <NavLink to="all-trainer">
            <button className="btn bg-primary w-full  text-white mb-4 border-0">
              All Trainer
            </button>
          </NavLink>
          <NavLink to="statistic">
            <button className="btn bg-primary w-full  text-white mb-4 border-0">
              Statistic
            </button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default DashboardNavItem;
