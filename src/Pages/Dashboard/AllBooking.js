import React, { useEffect, useState } from "react";
import BookingRow from "./BookingRow";

const AllBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-booking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <section className="px-5 my-11">
      <h1 className="text-2xl font-bold mb-5">
        All Bookings: {bookings.length < 10 && "0"}
        {bookings.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Treatment</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Slot</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <BookingRow key={booking._id} index={index} booking={booking}></BookingRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Treatment</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Slot</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default AllBooking;
