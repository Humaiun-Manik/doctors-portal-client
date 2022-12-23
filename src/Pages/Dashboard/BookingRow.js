import React from "react";

const BookingRow = ({ index, booking }) => {
  const { treatment, patientName, patientEmail, phone, date, slot } = booking;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{treatment}</td>
      <td>{patientName}</td>
      <td>{patientEmail}</td>
      <td>{phone}</td>
      <td>{date}</td>
      <td>{slot}</td>
    </tr>
  );
};

export default BookingRow;
