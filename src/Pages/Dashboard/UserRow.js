import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, setUser, index, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://doctors-portal-sxnn.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made a admin.");
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-sm hover:bg-green-700 border-0">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <label
          onClick={() => setUser(user)}
          htmlFor="my-modal-6"
          className="btn btn-sm hover:bg-red-500 border-0"
        >
          Remove User
        </label>
      </td>
    </tr>
  );
};

export default UserRow;
