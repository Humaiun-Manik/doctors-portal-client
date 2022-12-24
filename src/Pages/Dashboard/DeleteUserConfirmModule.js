import React from "react";
import { toast } from "react-toastify";

const DeleteUserConfirmModule = ({ user, setUser, refetch }) => {
  const { _id, email } = user;
  const handleDeleteUser = () => {
    fetch(`https://doctors-portal-sxnn.onrender.com/user/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Successfully deleted user");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl">Are you sure you want to delete user?</h3>
          <p className="py-4 text-lg">
            Email: <span className=" text-orange-500">{email}</span>
          </p>
          <div className="modal-action">
            <label
              onClick={handleDeleteUser}
              htmlFor="my-modal-6"
              className="btn bg-red-500 hover:bg-red-500 border-0"
            >
              Delete
            </label>
            <label onClick={() => setUser("")} htmlFor="my-modal-6" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserConfirmModule;
