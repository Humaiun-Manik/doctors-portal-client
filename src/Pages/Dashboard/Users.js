import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteUserConfirmModule from "./DeleteUserConfirmModule";
import UserRow from "./UserRow";

const Users = () => {
  const [user, setUser] = useState({});
  const {
    isLoading,
    data: users,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
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
        All Users: {users.length < 10 && "0"}
        {users.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Add Admin</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserRow key={user._id} user={user} setUser={setUser} index={index} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteUserConfirmModule user={user} setUser={setUser} refetch={refetch}></DeleteUserConfirmModule>
    </section>
  );
};

export default Users;
