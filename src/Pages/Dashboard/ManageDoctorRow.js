import React from "react";

const ManageDoctorRow = ({ doctor, index, setDeletingDoctor }) => {
  const { name, specialty, photo } = doctor;

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
        <label
          onClick={() => setDeletingDoctor(doctor)}
          htmlFor="delete-confirm-modal"
          className="btn hover:bg-red-600 border-0 px-6"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ManageDoctorRow;
