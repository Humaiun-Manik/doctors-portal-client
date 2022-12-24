import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://doctors-portal-sxnn.onrender.com/booking?patient=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        setAppointments(data);
      });
  }, [user, navigate]);

  return (
    <section className="px-5">
      <h1 className="text-2xl font-bold mt-11 mb-5">My Appointment {appointments.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-base">Name</th>
              <th className="text-base">Treatment</th>
              <th className="text-base">Time</th>
              <th className="text-base">Date</th>
              <th className="text-base">Price</th>
              <th className="text-base">Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{appointment.treatment}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.date}</td>
                <td>${appointment.price}</td>
                <td>
                  {appointment.price && !appointment.paid && (
                    <Link to={`/dashboard/payment/${appointment._id}`}>
                      <button className="btn btn-success text-white font-semibold capitalize">Pay</button>
                    </Link>
                  )}
                  {appointment.price && appointment.paid && (
                    <div>
                      <p className="text-success font-semibold text-2xl">Paid</p>
                      <small>
                        Transaction Id: <span className=" text-orange-500">{appointment.transactionId}</span>
                      </small>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyAppointment;
