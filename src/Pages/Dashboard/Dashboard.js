import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side  mt-4">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 text-xl font-bold text-gray-500">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link className="focus:text-black bg-white" to="/dashboard">
              My Appointment
            </Link>
          </li>
          {admin && (
            <>
              <li>
                <Link className="focus:text-black bg-white" to="/dashboard/bookings">
                  All Bookings
                </Link>
              </li>
              <li>
                <Link className="focus:text-black bg-white" to="/dashboard/users">
                  All Users
                </Link>
              </li>
              <li>
                <Link className="focus:text-black bg-white" to="/dashboard/addDoctor">
                  Add a Doctor
                </Link>
              </li>
              <li>
                <Link className="focus:text-black bg-white" to="/dashboard/manageDoctors">
                  Manage Doctors
                </Link>
              </li>
            </>
          )}
          <li>
            <Link className="focus:text-black bg-white" to="/home">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
