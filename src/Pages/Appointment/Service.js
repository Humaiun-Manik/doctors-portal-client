import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg">
      <div className="card-body items-center text-center">
        <h4 className="card-title text-xl text-secondary text-semibold">{name}</h4>
        <p className="text-base">
          {slots.length ? <span>{slots[0]}</span> : <span className="text-red-500">Try another date.</span>}
        </p>
        <p className="uppercase text-sm">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-white text-sm font-semibold bg-gradient-to-r from-secondary to-primary mt-5">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
