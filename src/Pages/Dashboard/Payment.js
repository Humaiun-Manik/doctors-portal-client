import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MHuBwHhNgR2Lf6q4Xt8IWO9TOZfBghy4qT9BdVs9MTRLDKP4vxhHXWpHBqe0fV8pgBCSETY8vfOea04UqWSR69f00YHloROU8"
);

const Payment = () => {
  const { id } = useParams();
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(`http://localhost:5000/booking/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const { treatment, date, slot, price, patientName } = appointment;

  return (
    <section>
      <div className="hero mt-20">
        <div className="hero-content w-full flex-col lg:flex-row lg:gap-20">
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-bold text-secondary">Hello, {patientName}</h1>
            <p className="py-6 text-2xl font-bold">
              Please Pay for <span className=" text-primary">{treatment}</span>
            </p>
            <p className="text-lg text-gray-500">
              Your Appointment: <span className=" text-orange-400">{date}</span> at {slot}
            </p>
            <p className="mt-3 text-2xl font-bold">Please Pay: ${price}</p>
          </div>
          <div className="card max-w-sm w-full lg:w-2/5 shadow-2xl bg-base-100">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
