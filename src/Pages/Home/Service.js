import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl w-28" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl my-2">{name}</h2>
        <p className="text-base text-ellipsis">{description}</p>
      </div>
    </div>
  );
};

export default Service;
