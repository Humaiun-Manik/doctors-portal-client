import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageDoctorRow from "./ManageDoctorRow";

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mt-11 mb-5">
        All Users: {doctors?.length < 10 && "0"}
        {doctors?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full text-lg font-semibold text-gray-500">
          <thead>
            <tr>
              <th></th>
              <th className="text-sm font-semibold text-black">Picture</th>
              <th className="text-sm font-semibold text-black">Name</th>
              <th className="text-sm font-semibold text-black">SPECIALTY</th>
              <th className="text-sm font-semibold text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, index) => (
              <ManageDoctorRow
                key={doctor._id}
                user={doctor}
                index={index}
                refetch={refetch}
              ></ManageDoctorRow>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageDoctors;
