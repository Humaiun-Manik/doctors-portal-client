import React from "react";

const ManageDoctorRow = ({ user, index }) => {
  const { name, specialty, photo } = user;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={photo} alt="Doctor pic" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <button className="btn hover:bg-red-600 border-0 px-6">Delete</button>
      </td>
    </tr>
  );
};

export default ManageDoctorRow;
