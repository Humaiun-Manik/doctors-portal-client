import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ date, service, setService, refetch }) => {
  const { _id, name, slots, price } = service;
  const [user] = useAuthState(auth);

  const handleBooking = (e) => {
    e.preventDefault();
    const formattedDate = format(date, "PP");
    const slot = e.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patientName: user.displayName,
      patientEmail: user.email,
      phone: e.target.phone.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
        }
        refetch();
        // to close the modal
        setService(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-xl">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5 mt-7">
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered input-accent text-lg w-full max-w-lg"
            />
            <select name="slot" className="select select-bordered text-lg w-full max-w-lg">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              readOnly
              placeholder={user?.displayName || ""}
              className="input input-bordered border-gray-300 input-accent w-full max-w-lg text-lg text-black-500"
            />
            <input
              type="text"
              name="email"
              readOnly
              placeholder={user?.email || ""}
              className="input input-bordered border-gray-300 input-accent w-full max-w-lg text-lg text-red-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered border-gray-300 input-accent w-full max-w-lg text-lg"
            />

            <input type="submit" className="btn input-bordered input-accent w-full max-w-lg text-lg" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
