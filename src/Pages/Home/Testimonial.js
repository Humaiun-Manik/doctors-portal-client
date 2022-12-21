import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review: "",
      img: people1,
      country: "California",
    },
    {
      _id: 2,
      name: "Samantha Celentano",
      review: "",
      img: people2,
      country: "Canada",
    },
    {
      _id: 3,
      name: "Johanna Jet",
      review: "",
      img: people3,
      country: "Netherland",
    },
  ];
  return (
    <section className="px-5">
      <div className="flex justify-between mt-24 mb-20">
        <div>
          <h4 className="text-xl text-secondary font-bold my-3">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-28 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
