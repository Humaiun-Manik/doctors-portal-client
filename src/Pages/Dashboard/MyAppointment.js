import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/booking?patient=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, [user]);

  return (
    <div className="px-5">
      <h1 className=" text-primary text-xl mb-3">My Appointment {appointments.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-base">Name</th>
              <th className="text-base">Treatment</th>
              <th className="text-base">Time</th>
              <th className="text-base">Date</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
