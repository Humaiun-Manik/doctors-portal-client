import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Treatment from "./Treatment";

const AvailableAppointment = ({ date }) => {
  const [service, setService] = useState(null);
  const formattedDate = format(date, "PP");

  const {
    isLoading,
    data: treatment,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <div className="text-center mt-20">
        <h4 className="text-2xl text-secondary mb-3">Available Services on {format(date, "PPP")}</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20">
        {treatment?.map((treatment) => (
          <Treatment key={treatment._id} treatment={treatment} setService={setService}></Treatment>
        ))}
      </div>
      {service && (
        <BookingModal
          key={service._id}
          date={date}
          service={service}
          setService={setService}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
