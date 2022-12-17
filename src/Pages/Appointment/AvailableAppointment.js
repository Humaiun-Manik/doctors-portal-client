import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Treatment from "./Treatment";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState([]);
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/treatment")
      .then((res) => res.json())
      .then((data) => setTreatment(data));
  }, []);

  return (
    <section>
      <div className="text-center mt-20">
        <h4 className="text-2xl text-secondary mb-3">Available Services on {format(date, "PPP")}</h4>
        {/* <h4 className="text-2xl text-[#939393]">Please select a service.</h4> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20">
        {treatment.map((treatment) => (
          <Treatment key={treatment._id} treatment={treatment} setService={setService}></Treatment>
        ))}
      </div>
      {service && (
        <BookingModal key={service._id} date={date} service={service} setService={setService}></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
