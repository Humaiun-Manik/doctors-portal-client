import React from "react";
import { toast } from "react-toastify";

const ManageDoctorRow = ({ user, index, refetch }) => {
  const { name, specialty, photo, email } = user;

  const handleDoctorDelete = () => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Doctor: ${name} is deleted.`);
          refetch();
        }
      });
  };

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
        <button onClick={handleDoctorDelete} className="btn hover:bg-red-600 border-0 px-6">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageDoctorRow;
