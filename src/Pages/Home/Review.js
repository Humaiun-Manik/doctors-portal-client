import React from "react";

const Review = ({ review }) => {
  const { name, img, country } = review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quod animi tenetur numquam cum qui
          ipsum deleniti impedit? Consequuntur, dolore? Nemo cum non laborum ad!
        </p>
        <div className="flex items-center mt-10">
          <div className="avatar mr-4">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <h4 className="text-base font-semibold">{country}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
