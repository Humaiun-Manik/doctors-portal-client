import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyHistory from "./Pages/Dashboard/MyHistory";
import MyReview from "./Pages/Dashboard/MyReview";
import Payment from "./Pages/Dashboard/Payment";
import Users from "./Pages/Dashboard/Users";
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
        <Route path="about" element={<About />}></Route>
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
          <Route path="review" element={<MyReview />} />
          <Route path="history" element={<MyHistory />} />
          <Route path="payment/:id" element={<Payment />} />
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
