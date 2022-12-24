import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deletingDoctor, setDeletingDoctor, refetch }) => {
  const { name, email, specialty } = deletingDoctor;

  const handleDoctorDelete = () => {
    fetch(`https://doctors-portal-sxnn.onrender.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Doctor: ${name} is deleted.`);
          setDeletingDoctor(null);
          refetch();
        }
      });
  };

  return (
    <section>
      <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-red-500">Are you sure you want to delete {name} !</h3>
          <p className="py-4 text-lg">
            Specialty: <span className=" font-semibold">{specialty}</span>
          </p>
          <div className="modal-action">
            <button
              onClick={handleDoctorDelete}
              className="btn btn-sm bg-red-500 hover:bg-red-700 border-0 px-6"
            >
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteConfirmModal;
