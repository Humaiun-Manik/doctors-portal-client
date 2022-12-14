import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Appointment from "./Pages/Appointment/Appointment";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import AllBooking from "./Pages/Dashboard/AllBooking";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import Payment from "./Pages/Dashboard/Payment";
import Users from "./Pages/Dashboard/Users";
import Contact from "./Pages/Home/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route
            path="bookings"
            element={
              <RequireAdmin>
                <AllBooking />
              </RequireAdmin>
            }
          />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          />
          <Route
            path="manageDoctors"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
