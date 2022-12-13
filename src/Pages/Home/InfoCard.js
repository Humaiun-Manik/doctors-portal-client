import React from "react";

const InfoCard = ({ img, cardTitle, cardText, bgClass }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl py-10 ${bgClass}`}>
      <figure className="pl-8">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title text-2xl mb-2">{cardTitle}</h2>
        <p className="text-xl">{cardText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
